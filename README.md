# Backend Auth & CRUD API

Backend REST API menggunakan **Node.js, Express, Prisma, dan JWT**  
dengan fitur **Authentication, Authorization (Role Admin/User), dan CRUD Product**.

Project ini dibuat sebagai **portfolio backend developer** dan contoh implementasi **API aman & scalable**.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- Prisma ORM
- MySQL
- JSON Web Token (JWT)
- bcrypt
- dotenv
- Nodemon

---

## ✨ Features

### 🔐 Authentication
- Register user
- Login user
- Password hashing (bcrypt)
- JWT-based authentication

### 🛂 Authorization
- Role-based access control
- Admin-only access untuk create/update/delete product

### 📦 Product Management (CRUD)
- Get all products (public)
- Get product by ID (public)
- Create product (Admin only)
- Update product (Admin only)
- Delete product (Admin only)

---

## 🧑‍ Roles
| Role  | Permission |
|------|------------|
| USER | View products |
| ADMIN | Create, Update, Delete products |

---

## 📂 Project Structure
```bash
backend-auth-crud-api
├── prisma
│   └── schema.prisma
├── src
│   ├── controllers
│   │   ├── auth.controller.js
│   │   └── product.controller.js
│   ├── middlewares
│   │   └── auth.middleware.js
│   ├── routes
│   │   ├── auth.routes.js
│   │   └── product.routes.js
│   ├── utils
│   │   └── prisma.js
│   ├── app.js
│   └── server.js
├── .env
├── package.json
└── README.md

##⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/MohammadKevin/backend-auth-crud-api.git
cd backend-auth-crud-api

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Buat file .env

DATABASE_URL="mysql://user:password@localhost:3306/db_name"
JWT_SECRET="your_jwt_secret"
PORT=3000

4️⃣ Database Migration
npx prisma migrate dev

5️⃣ Run Server
npm run dev


Server akan berjalan di:

http://localhost:3000

📌 API Endpoints
🔐 Auth
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login & get token
📦 Product
Method	Endpoint	Access
GET	/api/products	Public
GET	/api/products/:id	Public
POST	/api/products	Admin
PUT	/api/products/:id	Admin
DELETE	/api/products/:id	Admin
🔑 Authorization Header

Untuk endpoint protected:

Authorization: Bearer <JWT_TOKEN>

🧪 Example Request (Create Product)
{
  "name": "Keyboard Mechanical",
  "description": "RGB Mechanical Keyboard",
  "price": 350000,
  "stock": 10
}

🔒 Middleware

authMiddleware → Validasi JWT

isAdmin → Cek role admin

🛡 Security

Password di-hash menggunakan bcrypt

Token expired otomatis

Role-based access control

📈 Future Improvements

Pagination & search product

Refresh token

Upload image product

Swagger API documentation

Deployment (Railway / Render)

👨‍💻 Author

Mohammad Kevin
Backend Developer (Node.js, Express, Prisma)

GitHub:
👉 https://github.com/MohammadKevin

⭐ Notes

Project ini dibuat untuk belajar dan portfolio.
