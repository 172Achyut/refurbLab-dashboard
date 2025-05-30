# refurbLab-dashboard

Frontend for a used PC parts marketplace. Built with Next.js App Router, shadcn/ui components, and OAuth login support.

---

## 🚀 Project Overview

`refurbLab-dashboard` is a modern, scalable web application designed for the **buying and selling of used PC parts** such as GPUs, CPUs, motherboards, SSDs, and more. The platform allows sellers to list their used products and buyers to browse, search, and purchase parts seamlessly.

---

## 🧩 Features

- **User Authentication**: Secure login/signup using OAuth.
- **Product Management**: Sellers can add, edit, and delete product listings.
- **Product Search**: Buyers can search and filter products based on categories and specifications.
- **Product Details**: Detailed view for each product with specifications, pricing, and images.
- **Responsive UI**: Optimized for all devices using modern UI components.

---

## 🛠️ Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/) with App Router
  - [TypeScript](https://www.typescriptlang.org/)
  - [shadcn/ui](https://ui.shadcn.dev/) for UI components
- **Authentication**:
  - OAuth integration
- **Styling**:
  - SCSS for modular and maintainable styles

---

## 📦 Installation

### Prerequisites

- Node.js (v18+)
- Docker & Docker Compose

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/172Achyut/refurbLab-dashboard.git
   cd refurbLab-dashboard
   ```

2. **Set up environment variables**:

   Create a `.env` file in the root directory and add necessary environment variables.

3. **Run the application using Docker Compose**:

   ```bash
   docker compose up --build -d
   ```

   This will build and start the frontend container.

4. **Access the application**:

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🐳 Docker Configuration

The project includes a `Dockerfile` for containerizing the Next.js application.

**Dockerfile**:

```dockerfile
# Use node base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . .

# Build the Next.js project
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "start"]
```

**Docker Compose Service**:

```yaml
frontend:
  build:
    context: .
    dockerfile: Dockerfile
  container_name: refurblab_dashboard
  env_file:
    - .env
  ports:
    - "3000:3000"
```

---

## 📁 Project Structure

```bash
refurbLab-dashboard/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   └── styles/
├── .env
├── Dockerfile
├── docker-compose.yml
├── next.config.ts
├── package.json
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---