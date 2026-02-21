import express from "express";
import { IndexRoutes } from "./app/routes";

const app = express();

// Middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

app.use("/api/v1", IndexRoutes);

export default app;
