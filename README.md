# ⚡ NEXUS CART // v2.6
**Next-Generation E-Commerce Matrix**  
*Built for the modern enthusiast. Powered by Supabase & Paystack.*

---

## 🌐 Live Terminal
[View Live Project](https://fauz-del.github.io)

## 🚀 Technical Core
- **Framework:** React 19 + Vite 7 (TypeScript)
- **Styling:** Tailwind CSS (GPU Accelerated)
- **Backend:** Supabase (Auth, Database, Storage)
- **Payments:** Paystack Protocol
- **Animations:** Framer Motion (Nexus Matrix UI)
- **Optimization:** @unpic/react for CDN Image Resizing

## 🛠️ System Architecture
- **Dynamic Inventory:** Real-time synchronization with Supabase PostgreSQL tables.
- **Matrix Search:** Multi-threaded client-side filtering for instant product discovery.
- **Secure Stash:** LocalStorage-persisted cart system with unique transaction referencing.
- **Identity Auth:** Secure JWT-based authentication using Supabase Auth.

## 📦 Local Deployment
To initialize the mainframe locally:

1. **Clone the node:**
   ```bash
   git clone https://github.com
   cd Nexuscart-

2. Install dependencies:
    ```bash
    pnpm install


3. Configure Environment:
   Create a .env file with your credentials:
    ```bash
    env
    VITE_SUPABASE_URL=your_url
    VITE_SUPABASE_ANON_KEY=your_key
    VITE_PAYSTACK_PUBLIC_KEY=your_key


4. Boot System:
  ```bash
    pnpm run dev

📜 Database Schema
The project uses the following PostgreSQL structure:
- products: name, price, description, category, image_url, is_popular, is_featured.
- orders: user_id, total_amount, status, payment_reference.
- order_items: order_id, product_id, quantity, price_at_purchase.

Status: Operational // 2026
### 3. Save and Exit
*   Press `CTRL + O`, then `Enter` to save.
*   Press `CTRL + X` to exit.

### 4. Push to GitHub
Now, upload the README so it shows up on your repository page:
```bash
git add README.md
git commit -m "docs: initialize system readme"
git push origin main
