import express from "express";
import { prisma } from "./lib/prisma";

const app = express();

// Middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

// Future: import routes from modules
// app.use("/auth", authRoutes);
// example
app.get("/secial", async (req, res) => {
  const secialty = await prisma.specialty.create({
    data: {
      title: "Cardiology",
    },
  });
  res.status(201).json({
    success: true,
    message: "Specialty created successfully",
    data: secialty,
  });
});

export default app;
