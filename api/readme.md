# Tasks API (Django Backend)

This is a REST API for managing tasks, built with Django and Django REST Framework (DRF). It allows you to list, add, and update tasks, including toggling their completion status.

---

## Features

- **List Tasks**: Retrieve all tasks in the system.
- **Add New Tasks**: Create a new task with a name and completion status.
- **Update Tasks**: Update task attributes (e.g., toggle completion status).
- **Validation**: Prevents creation of tasks with empty or blank names.

---

## Prerequisites

- Python 3.8+
- pip (Python package installer)

---

## Installation

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Go into the todo_project directory
   ```bash
   cd todo_project
   ```
3. Apply database migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. Create an admin user (optional for accessing the admin panel):
   ```bash
   python manage.py createsuperuser
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

---

## API Endpoints

### **Base URL:** `http://127.0.0.1:8000/api/`

#### 1. **List Tasks**
- **Method:** `GET`
- **Endpoint:** `/tasks/`
- **Response Example:**
  ```json
  [
      { "id": 1, "name": "Learn Django REST Framework", "completed": false },
      { "id": 2, "name": "Build a REST API", "completed": true }
  ]
  ```

#### 2. **Add New Task**
- **Method:** `POST`
- **Endpoint:** `/tasks/`
- **Request Body Example:**
  ```json
  { "name": "New Task", "completed": false }
  ```
- **Validation Example:** If `name` is empty or blank:
  ```json
  {
      "name": ["El nombre de la tarea no puede estar vacío."]
  }
  ```

#### 3. **Update Task**
- **Method:** `PUT`
- **Endpoint:** `/tasks/<id>/`
- **Request Body Example:**
  ```json
  { "name": "Updated Task Name", "completed": true }
  ```
- **Response Example:**
  ```json
  { "id": 1, "name": "Updated Task Name", "completed": true }
  ```
- **Validation Example:** If `name` is empty or blank:
  ```json
  {
      "name": ["El nombre de la tarea no puede estar vacío."]
  }
  ```

---

## CORS Configuration

To allow the frontend to interact with this API, ensure CORS is properly configured. Using `django-cors-headers`, add the frontend's URL to `CORS_ALLOWED_ORIGINS` in `settings.py`:
```python
CORS_ALLOWED_ORIGINS = [
    "http://127.0.0.1:5173",  # Frontend URL
]
```

---

## Database

- **Default Database:** SQLite
- Location: `db.sqlite3` in the project root.

---

## Admin Panel

Access the admin panel at: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)  
Log in using the superuser credentials created during setup.

