# 1. Use node base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# 4. Copy all source files
COPY . .

# 5. Build the Next.js project
RUN npm run build

# 6. Expose frontend port (Next.js default is 3000)
EXPOSE 3000

# 7. Start the Next.js app in production mode
CMD ["npm", "start"]
