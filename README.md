# 🏨 Hotel Listing App (Frontend + Backend)

A full-stack hotel listing application with real-time price updates, filters, and infinite scroll.

---

## note:

Change in backend `index.js`:

```js
const visibleHotels = parsed.hotels.slice(0, 10);
```

👉 To load more data:

```js
const visibleHotels = parsed.hotels.slice(0, 2000);
```

---

## Frontend

* Next.js (App Router)
* React
* TypeScript

---

## Backend

* Node.js
* Express
* Socket.IO

---

## 📁 Project Structure

```
project-root/
  frontend/   # Next.js app
  backend/    # Node + Socket server
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hotel-app.git
cd hotel-app
```

---

## ▶️ Running the Backend

```bash
cd backend
npm install
node index.js
```

Backend will run on:

```
http://localhost:4000
```

---

## ▶️ Running the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```
