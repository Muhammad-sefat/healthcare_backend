import app from "./app.server";
import { ENV } from "./app/config/env";
import { seedSuperAdmin } from "./app/utils/seed";

async function startServer() {
  try {
    await seedSuperAdmin();
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
