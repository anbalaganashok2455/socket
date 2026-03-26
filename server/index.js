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


let hotels = [];


import fs from "fs";

const rawData = fs.readFileSync("./hotel_2000.json", "utf-8");
const parsed = JSON.parse(rawData);


const visibleHotels = parsed.hotels.slice(0, 10);


app.get("/hotels", (req, res) => {
  res.json(visibleHotels);
});


setInterval(() => {
  const updates = [];


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

  console.log(" Sending updates:", updates);

  io.emit("price_update", updates);
}, 2000);


io.on("connection", (socket) => {
  console.log(" User connected:", socket.id);
});

server.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});