# 🚗 Auto Repair ERP (NestJS + Prisma + PostgreSQL)

A simple **ERP system** for **auto repair businesses**, focusing on:
- **📅 Appointment Scheduling** – Manage customer bookings efficiently.
- **📦 Inventory Management** – Track auto parts stock and low inventory alerts.

---

## 📂 Project Structure
```
/auto-repair-erp
│── prisma/                # Prisma schema and database migrations
│── src/
│   ├── appointments/      # CRUD API for managing appointments
│   ├── inventory/         # CRUD API for managing auto parts inventory
│   ├── prisma/            # Database connection service
│   ├── main.ts            # App entry point
│── .env                   # Environment variables (DO NOT SHARE)
│── package.json           # Dependencies
│── README.md              # Project documentation
```

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/auto-repair-erp.git
cd auto-repair-erp
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the project root:
```env
DATABASE_URL="postgresql://your-username:your-password@your-database-host:5432/auto_repair_erp"
```
Replace with your actual **PostgreSQL connection string** (from **Supabase** or local setup).

### 4️⃣ Run Prisma Migrations
```sh
npx prisma migrate dev --name init
```
This sets up the **database schema**.

### 5️⃣ Start the Server
```sh
npm run start
```
Your NestJS API will now be running at:
```
http://localhost:3000
```

---

## 📡 API Endpoints

### 📝 **Appointments API**
| Action         | Method | Endpoint                   | Description                     |
|---------------|--------|---------------------------|---------------------------------|
| Create        | `POST`  | `/appointments`           | Add a new appointment          |
| Read All      | `GET`   | `/appointments`           | Get all appointments           |
| Read One      | `GET`   | `/appointments/:id`       | Get appointment by ID          |
| Update        | `PUT`   | `/appointments/:id`       | Update appointment details     |
| Delete        | `DELETE`| `/appointments/:id`       | Remove an appointment          |

### 🏪 **Inventory API**
| Action         | Method | Endpoint                   | Description                     |
|---------------|--------|---------------------------|---------------------------------|
| Create        | `POST`  | `/inventory`              | Add a new inventory item       |
| Read All      | `GET`   | `/inventory`              | Get all inventory items        |
| Read One      | `GET`   | `/inventory/:id`          | Get inventory item by ID       |
| Update        | `PUT`   | `/inventory/:id`          | Update inventory details       |
| Delete        | `DELETE`| `/inventory/:id`          | Remove an inventory item       |

---

## 🛠 Database Visualization
You can view and manage the database using **Prisma Studio**:
```sh
npx prisma studio
```
This opens a browser-based GUI for easy management.

---

## 👥 Contributors
- **Kai Lu**
- **Zeinab Awada** 
- **Erdi Hida** 
- **Donovan Hodges** 

---

## ⚠️ License
This project is **open-source** and can be modified or distributed under the **MIT License**.


