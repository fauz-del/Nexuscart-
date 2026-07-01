from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional
from database import get_db
from models import Order, OrderItem
from auth import get_current_user, oauth2_scheme
from models import User
from jose import jwt, JWTError

SECRET_KEY = "nexuscart-super-secret-key-2026"
ALGORITHM = "HS256"

router = APIRouter(prefix="/orders", tags=["orders"])


class OrderItemRequest(BaseModel):
    product_id: str
    quantity: int
    price_at_purchase: float


class OrderRequest(BaseModel):
    total_amount: float
    payment_reference: str
    items: List[OrderItemRequest]


@router.post("/create")
def create_order(
    request: OrderRequest,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    # Get user from token if available
    user_id = None
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")
        if email:
            user = db.query(User).filter(User.email == email).first()
            if user:
                user_id = user.id
    except JWTError:
        pass

    order = Order(
        user_id=user_id,
        total_amount=request.total_amount,
        payment_reference=request.payment_reference,
        status="paid"
    )
    db.add(order)
    db.commit()
    db.refresh(order)

    for item in request.items:
        order_item = OrderItem(
            order_id=order.id,
            product_id=item.product_id,
            quantity=item.quantity,
            price_at_purchase=item.price_at_purchase
        )
        db.add(order_item)
    db.commit()

    return {
        "message": "Order created successfully",
        "order_id": order.id,
        "total": order.total_amount
    }


@router.get("/my-orders")
def my_orders(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    orders = db.query(Order).filter(Order.user_id == current_user.id).all()
    return [
        {
            "id": o.id,
            "total": o.total_amount,
            "status": o.status,
            "reference": o.payment_reference,
            "created_at": o.created_at,
            "items": [
                {
                    "product_id": i.product_id,
                    "quantity": i.quantity,
                    "price": i.price_at_purchase
                }
                for i in o.items
            ]
        }
        for o in orders
    ]
