# 🏥 Hospital Management System

A web-based Hospital Management System developed using **Node.js, Express.js, MongoDB, HTML, CSS and JavaScript**.

The system allows hospital staff to manage patients, doctors, appointments and billing information through a simple web interface.

---

## ✨ Features

### 🔐 Authentication
- Login page
- Logout functionality
- Protected dashboard
- Basic demo authentication

### 👤 Patient Management
- Add patients
- View patients
- Search patients
- Edit patient details
- Delete patients

### 👨‍⚕️ Doctor Management
- Add doctors
- View doctors
- Search doctors
- Edit doctor details
- Delete doctors

### 📅 Appointment Management
- Add appointments
- View appointments
- Search appointments
- Edit appointments
- Delete appointments

### 💳 Billing Management
- Add bills
- View bills
- Search bills
- Edit bills
- Delete bills

### 📊 Dashboard
- Total patients
- Total doctors
- Total appointments
- Total bills
- Total revenue
- Recent appointments
- Recent bills

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Frontend structure |
| CSS3 | User interface design |
| JavaScript | Frontend functionality |
| Node.js | Backend runtime |
| Express.js | REST API |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| Git & GitHub | Version control |

---

## 📂 Project Structure

```text
Hospital-Management-System/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Appointment.js
│   │   ├── Billing.js
│   │   ├── Doctor.js
│   │   └── Patient.js
│   ├── routes/
│   │   ├── appointmentRoutes.js
│   │   ├── billingRoutes.js
│   │   ├── dashboardRoutes.js
│   │   ├── doctorRoutes.js
│   │   └── patientRoutes.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── login.js
│   ├── script.js
│   └── style.css
│
├── screenshots/
│
├── .gitignore
└── README.md