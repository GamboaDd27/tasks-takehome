Here’s a clean and detailed `README.md` for the frontend, tailored for your React + TypeScript setup:

---

# Tasks Manager Frontend

This is the frontend for the **Tasks Manager** application, built with React, TypeScript, and Vite. It interacts with a Django REST API to allow users to manage tasks: viewing, adding, and marking tasks as complete or incomplete.

## Features

- **View Tasks**: Fetch and display a list of tasks from the backend.
- **Add New Tasks**: Add tasks using a form with validation.
- **Complete/Incomplete Tasks**: Toggle task completion status directly from the task list.
- **Bootstrap Styling**: Responsive design with Bootstrap integration.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (comes with Node.js)

Ensure the backend API is running. The default backend URL is `http://127.0.0.1:8000`.

---

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

---

## Configuration

The application assumes the backend API is hosted at `http://127.0.0.1:8000`. If your backend is hosted elsewhere, update the API URLs in the frontend code.  

For example, in `TaskList.tsx` and `TaskForm.tsx`:
```tsx
fetch('http://<your-backend-url>/api/tasks/')
```

---

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at [http://127.0.0.1:5173](http://127.0.0.1:5173).

---

## Folder Structure

```
src/
├── components/
│   ├── TaskList.tsx   # Displays the list of tasks and allows toggling their completion status
│   ├── TaskForm.tsx   # Form to add new tasks
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
├── index.css          # Global styles
├── types.ts           # TypeScript interfaces for API models
```

---

## Scripts

- **Start Development Server**:
  ```bash
  npm run dev
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## API Integration

This frontend interacts with a Django REST API. Endpoints used:

1. **List Tasks**:
   - **Method**: `GET`
   - **Endpoint**: `/api/tasks/`
   - **Response Example**:
     ```json
     [
       { "id": 1, "name": "Learn React", "completed": false },
       { "id": 2, "name": "Build a Task Manager", "completed": true }
     ]
     ```

2. **Add New Task**:
   - **Method**: `POST`
   - **Endpoint**: `/api/tasks/`
   - **Request Body Example**:
     ```json
     { "name": "New Task", "completed": false }
     ```

3. **Update Task Completion**:
   - **Method**: `PUT`
   - **Endpoint**: `/api/tasks/<id>/`
   - **Request Body Example**:
     ```json
     { "name": "Learn React", "completed": true }
     ```

---

## Notes

- Ensure CORS is properly configured in the backend to allow frontend requests.
- TypeScript interfaces (`Task` and `NewTask`) ensure type safety and compatibility with the backend API.

