# refurbLab-dashboard

## Project Overview

`refurbLab-dashboard` is a modern, scalable web application designed for the **buying and selling of used PC parts** such as GPUs, CPUs, motherboards, SSDs, and more. The platform allows sellers to list their used products and buyers to browse, search, and purchase parts seamlessly.

## Features

- **Signup/Login**: User authentication using OAuth for secure access.
- **Product Management**: Sellers can easily add their products with detailed information.
- **Product Search**: Buyers can search and filter products based on categories and specifications.
- **Product Details**: A detailed page for each product with specifications, pricing, and images.
- **Responsive UI**: Built with modern web technologies ensuring a smooth user experience across all devices.

## Tech Stack

- **Frontend**:  
  - [Next.js](https://nextjs.org/) – React framework for building the app  
  - [TypeScript](https://www.typescriptlang.org/) – For static type checking and improved developer experience  
  - [Shadcn](https://ui.shadcn.dev/) – Tailored UI components for a clean and customizable design

- **Authentication**:  
  - [OAuth](https://oauth.net/) for secure user login and signup

- **State Management**:  
  - [React Context API](https://reactjs.org/docs/context.html) or [Redux](https://redux.js.org/) (depending on your use case)

- **Styling**:  
  - Custom styles using SCSS for consistent, maintainable, and modular styling

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/172Achyut/refurbLab-dashboard.git
   ```

## Running with Docker

You can run the entire refurbLab-dashboard project (frontend, backend, and database) using Docker Compose. This makes it easy to get the app up and running without manually installing dependencies or setting up the environment.

### Steps

1. Make sure you have Docker and Docker Compose installed.

2. From the root directory of the project (where your `docker-compose.yml` file is located), run:
   ```bash
   docker compose up -d --build
   ```

   This will:
   - Build the Docker images for frontend and backend.
   - Start the containers for the frontend, backend, and the PostgreSQL database.
   - Run everything in detached mode (`-d`), so it runs in the background.

3. Once started, access the frontend dashboard at:  
   [http://localhost:3000](http://localhost:3000)

4. To view logs for a specific service, use:
   ```bash
   docker logs -f <container_name>
   ```
   Example to follow frontend logs:
   ```bash
   docker logs -f refurblab_dashboard
   ```

5. To stop all running containers:
   ```bash
   docker compose down
   ```
