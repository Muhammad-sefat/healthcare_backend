/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import cookieParser from "cookie-parser";
import { IndexRoutes } from "./app/routes";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./app/lib/auth";
import path from "path";
import cors from "cors";
import cron from "node-cron";
import { ENV } from "./app/config/env";
import { PaymentController } from "./app/module/payment/payment.controller";
import { AppointmentService } from "./app/module/appointment/appointment.service";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve(process.cwd(), `src/app/templates`));

app.use(
  cors({
    origin: [
      ENV.FRONTEND_URL,
      ENV.BETTER_AUTH_URL,
      "http://localhost:3000",
      "http://localhost:5000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use("/api/auth", toNodeHandler(auth));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

cron.schedule("*/25 * * * *", async () => {
  try {
    console.log("Running cron job to cancel unpaid appointments...");
    await AppointmentService.cancelUnpaidAppointments();
  } catch (error: any) {
    console.error(
      "Error occurred while canceling unpaid appointments:",
      error.message,
    );
  }
});

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  PaymentController.handleStripeWebhookEvent,
);
// Example route
app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

app.use("/api/v1", IndexRoutes);

export default app;
