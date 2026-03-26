import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

// 👉 Store hotels in memory
let hotels = [];

// 👉 Load your JSON (replace with your actual file)
import fs from "fs";

const rawData = fs.readFileSync("./hotel_2000.json", "utf-8");
const parsed = JSON.parse(rawData);

// 🔥 TAKE ONLY 5 HOTELS
const visibleHotels = parsed.hotels.slice(0, 10);

// ✅ API → send ONLY these 5
app.get("/hotels", (req, res) => {
  res.json(visibleHotels);
});

// ✅ SOCKET → update ONLY these same 5
setInterval(() => {
  const updates = [];

  // update 2–3 hotels each time
  const updatesCount = Math.floor(Math.random() * 3) + 1;

  for (let i = 0; i < updatesCount; i++) {
    const index = Math.floor(Math.random() * visibleHotels.length);
    const hotel = visibleHotels[index];

    const change = Math.floor(Math.random() * 200 - 100);
    const newPrice = Math.max(100, hotel.total_price + change);

    hotel.total_price = newPrice;

    updates.push({
      hotelId: hotel.id,
      newPrice,
    });
  }

  console.log("📡 Sending updates:", updates);

  io.emit("price_update", updates);
}, 2000);

// ✅ Socket connection
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);
});

server.listen(4000, () => {
  console.log("🚀 Server running on http://localhost:4000");
});