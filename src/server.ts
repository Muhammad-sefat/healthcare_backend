import app from "./app";
import { ENV } from "./app/config/env";

async function startServer() {
  try {
    // Start server
    app.listen(ENV.PORT, () => {
      console.log(`🚀 Server running at http://localhost:${ENV.PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
