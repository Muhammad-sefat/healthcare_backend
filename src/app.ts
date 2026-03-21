import express from "express";
import cookieParser from "cookie-parser";
import { IndexRoutes } from "./app/routes";

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

app.use("/api/v1", IndexRoutes);

export default app;
