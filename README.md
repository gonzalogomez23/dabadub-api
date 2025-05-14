# 📝 Blog Platform - React & Laravel API

This project is a **blog-style website** where users can read and explore various articles. The **frontend** is built with **React**, ensuring a fast and dynamic user experience, while the **backend** is powered by **Laravel**, serving as an API to manage articles and user interactions.

## 🚀 Features

- 📰 **Article Management** – Users can browse through different categories of articles.
- 🌐 **API-Driven** – Laravel serves as a RESTful API that enables full CRUD functionality, allowing users to create, retrieve, update, and delete articles.
- 🎨 **Modern UI** – Built with a responsive and visually appealing design using **Tailwind CSS**.
- 🔐 **Authentication** – User login and signup functionality.

## 🛠️ Technologies Used

### Frontend
- ⚛ **React** (Client-side rendering & dynamic UI)
- 🎨 **Tailwind CSS** (Modern styling)
- ⚡ **Vite** (For fast development)

### Backend
- 🛠 **Laravel** (REST API development)
- 📦 **MySQL / SQLite** (Database management)

---

## 🔧 Installation

### 1️⃣ Install Backend Dependencies

```sh
composer install
```

### 2️⃣ Install Frontend Dependencies

```sh
cd react
npm install  # or pnpm install / yarn install
```

Run the frontend development server:
```sh
npm run dev
```
### 3️⃣ Setup Environment & Database

Duplicate the `.env.example` file in the backend directory and configure your database settings.

Run migrations:

```sh
php artisan migrate --seed
```

Run Laravel’s local development server:

```sh
php artisan serve
```