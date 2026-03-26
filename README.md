🏨 Hotel Listing App (Frontend + Backend)

A full-stack hotel listing application with real-time price updates, filters, and infinite scroll.

🚀 Features
🔍 Search hotels (name, city, country)
⭐ Filter by rating
💰 Filter by price range
🧰 Filter by amenities
🔄 Sort (Price Low → High, High → Low, Top Rated)
♾️ Infinite scrolling (no pagination)
⚡ Real-time price updates using Socket.IO
🧱 Tech Stack
Frontend
Next.js (App Router)
React
TypeScript
Backend
Node.js
Express
Socket.IO
📁 Project Structure
project-root/
  frontend/   # Next.js app
  backend/    # Node + Socket server
⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/your-username/hotel-app.git
cd hotel-app
▶️ Running the Backend
cd backend
npm install
npm run dev

Backend will run on:

http://localhost:4000
▶️ Running the Frontend

Open a new terminal:

cd frontend
npm install
npm run dev

Frontend will run on:

http://localhost:3000
📡 Real-Time Price Updates
Backend emits price_update events
Frontend listens via Socket.IO
Prices update instantly without refresh
📊 Data Handling (Important)

By default, only a subset of hotels is loaded for performance:

const visibleHotels = parsed.hotels.slice(0, 10);
👉 To load more data:
const visibleHotels = parsed.hotels.slice(0, 2000);
Total dataset contains ~2000 hotels
Increase slice limit to test full dataset behavior
♾️ Infinite Scroll
Data is loaded in batches (BATCH_SIZE = 20)
Uses IntersectionObserver
No traditional pagination used
⚠️ Notes
Make sure backend is running before frontend

Ensure correct API URL:

http://localhost:4000/hotels

Socket connection:

http://localhost:4000
🛠️ Future Improvements
Server-side pagination (for scalability)
Debounced API-based search
Caching layer (Redis)
Deployment (Vercel + Render)
👨‍💻 Author

Ashok (Full Stack Developer)

⭐ If you like this project

Give it a star on GitHub ⭐
