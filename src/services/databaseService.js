import { supabase } from '../lib/supabase';

// ... (keep your existing fetch functions)

export const createOrder = async (orderData, cartItems) => {
  // 1. Insert the primary order record
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([
      {
        total_amount: orderData.amount,
        status: 'paid',
        payment_reference: orderData.reference,
        user_id: orderData.userId || null,
        paystack_access_code: orderData.reference // Using reference as identifier
      }
    ])
    .select()
    .single();

  if (orderError) throw orderError;

  // 2. Prepare items for the order_items table (if you created it)
  // If you haven't created order_items yet, skip this part
  const itemsToInsert = cartItems.map(item => ({
    order_id: order.id,
    product_id: item.id,
    quantity: item.quantity,
    price_at_purchase: item.price
  }));

  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(itemsToInsert);

  if (itemsError) console.error("Order items sync failed, but order was created.");

  return order;
};
