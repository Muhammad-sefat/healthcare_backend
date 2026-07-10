FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy Prisma schema and config, then generate client
COPY prisma ./prisma
COPY prisma.config.ts ./
RUN pnpm prisma generate

# Copy the rest of the application files
COPY . .

# Expose backend port
EXPOSE 5000

# Start the application in dev mode for local hot-reloading
CMD ["pnpm", "dev"]
