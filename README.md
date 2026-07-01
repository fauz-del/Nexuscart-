# ⚡ NEXUS CART // v2.6
**Next-Generation E-Commerce Matrix**
*Built for the modern enthusiast. No third-party backend dependencies.*

---

## 🌐 Live Demo
[View Live Project](https://fauz-del.github.io/Nexuscart-/)

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Vite 7 (TypeScript) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Backend | Python + FastAPI |
| Database | SQLite via SQLAlchemy |
| Auth | JWT (python-jose + bcrypt) |
| Payments | Paystack |
| Hosting (Frontend) | GitHub Pages |
| Hosting (Backend) | Render |

---

## 🛠️ System Architecture

- **Local Inventory** — Product data and images served entirely from the repo. No external storage dependencies.
- **Custom Auth** — Register and login via a custom FastAPI backend with bcrypt password hashing and JWT sessions stored in localStorage.
- **Matrix Search** — Client-side filtering by category and name for instant product discovery.
- **Secure Stash** — localStorage-persisted cart with quantity management and unique transaction referencing.
- **Order Sync** — Completed orders saved to a SQLite database on the backend via Paystack's onSuccess callback.

---

## 📦 Running Locally

### Frontend
```bash
git clone https://github.com/fauz-del/Nexuscart-.git
cd Nexuscart-
pnpm install
pnpm run dev
```

Create a `.env` file in the root:
```env
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_test_key
```

Open `localhost:5173` in your browser.

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Backend runs at `localhost:8000`. Update `src/services/authService.js` to point to `http://localhost:8000` for local development.

---

## 🗄️ Database Schema

SQLite database auto-created on first backend start.

**users**
- id, email, hashed_password, created_at

**orders**
- id, user_id, total_amount, status, payment_reference, created_at

**order_items**
- id, order_id, product_id, quantity, price_at_purchase

---

## 🔐 Security

- Passwords hashed with bcrypt — never stored in plain text
- JWT tokens stored in localStorage — never sent to any third party
- Paystack keys use test mode for demo — no real transactions
- No Supabase or external auth provider — full ownership of user data

---

## 🗂️ Project Structure

```
Nexuscart-/
├── backend/
│   ├── main.py           ← FastAPI app
│   ├── auth.py           ← JWT + bcrypt logic
│   ├── models.py         ← SQLAlchemy models
│   ├── database.py       ← SQLite connection
│   └── routes/
│       ├── auth.py       ← /auth/register, /auth/login, /auth/me
│       └── orders.py     ← /orders/create, /orders/my-orders
├── public/
│   └── assets/           ← All product images (local)
└── src/
    ├── components/
    ├── context/
    ├── data/
    │   └── products.ts   ← Local product catalog
    ├── pages/
    └── services/
        └── authService.js ← Connects to custom backend
```

---

## 🗺️ Roadmap (v3)

- [ ] User order history page
- [ ] Admin dashboard for inventory management
- [ ] Product reviews and ratings
- [ ] Wishlist / saved items
- [ ] Email notifications on order confirmation

---

## 👤 Author

Built by [@fauz-del](https://github.com/fauz-del)

---

*Status: Operational // 2026*
git push origin main
