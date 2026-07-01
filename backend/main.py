from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routes import auth, orders

# Create all tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="NexusCart API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://fauz-del.github.io", "http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(orders.router)

@app.get("/")
def health_check():
    return {"status": "ok", "message": "NexusCart API running"}
