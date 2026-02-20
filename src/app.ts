import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

// Future: import routes from modules
// app.use("/auth", authRoutes);

export default app;
