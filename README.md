Certainly! Here’s a sample `README.md` for your GitHub repository based on the NestJS Users Controller code you provided:

---

# NestJS Users API

A simple RESTful API for managing users, built with NestJS. This project demonstrates basic CRUD operations using an in-memory array.

## Features

- **Create a user** (`POST /users/create`)
- **List all users** (`GET /users/list`)
- **Get user by ID** (`GET /users/:id`)
- **Update user by ID** (`PUT /users/:id`)
- **Delete user by ID** (`DELETE /users/:id`)

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- NestJS CLI (optional)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm run start:dev
   ```

## Usage

### Endpoints

- **POST /users/create**  
  Create a new user.
- **GET /users/list**  
  List all users.
- **GET /users/:id**  
  Get a user by ID.
- **PUT /users/:id**  
  Update a user by ID.
- **DELETE /users/:id**  
  Delete a user by ID.

**Note:**  
This API uses an in-memory array for storage. Data will be lost when the server restarts.

## Example Request

**Create a user**
```bash
curl -X POST http://localhost:3000/users/create \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "id": "1"}'
```

**List all users**
```bash
curl http://localhost:3000/users/list
```

## Project Structure

```
src/
  users/
    users.controller.ts
    dto/create-user.dto.ts
```

## License

MIT

---

Feel free to customize the repository link and other details as needed!