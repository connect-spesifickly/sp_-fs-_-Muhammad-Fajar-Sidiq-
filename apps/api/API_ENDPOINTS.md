# API Endpoints Documentation

## Base URL

```
http://localhost:3000/api
```

## Authentication Endpoints

### Register User

- **POST** `/auth/register`
- **Description**: Register a new user
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "id": "uuid",
      "email": "user@example.com"
    }
  }
  ```

### Login User

- **POST** `/auth/login`
- **Description**: Login user and get access token
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "uuid",
        "email": "user@example.com"
      },
      "accessToken": "jwt_token",
      "refreshToken": "jwt_refresh_token"
    }
  }
  ```

## Project Endpoints

**Note**: All project endpoints require authentication using the `verifyUser` middleware. Include the access token in the Authorization header:

```
Authorization: Bearer <access_token>
```

### Create Project

- **POST** `/projects`
- **Description**: Create a new project (user becomes the owner)
- **Body**:
  ```json
  {
    "name": "My Project"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Project created successfully",
    "data": {
      "id": "uuid",
      "name": "My Project",
      "ownerId": "user_uuid",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z",
      "owner": {
        "id": "user_uuid",
        "email": "user@example.com"
      }
    }
  }
  ```

### Get All Projects (Dashboard)

- **GET** `/projects`
- **Description**: Get all projects where user is owner or member
- **Response**:
  ```json
  {
    "success": true,
    "message": "Projects retrieved successfully",
    "data": [
      {
        "id": "uuid",
        "name": "My Project",
        "ownerId": "user_uuid",
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z",
        "owner": {
          "id": "user_uuid",
          "email": "user@example.com"
        },
        "memberships": [
          {
            "id": "membership_uuid",
            "user": {
              "id": "member_uuid",
              "email": "member@example.com"
            }
          }
        ],
        "tasks": [
          {
            "id": "task_uuid",
            "title": "Task Title",
            "description": "Task Description",
            "status": "Todo",
            "assigneeId": null
          }
        ]
      }
    ]
  }
  ```

### Get Project by ID (Detail & Board View)

- **GET** `/projects/:id`
- **Description**: Get project details with members and tasks
- **Response**:
  ```json
  {
    "success": true,
    "message": "Project retrieved successfully",
    "data": {
      "id": "uuid",
      "name": "My Project",
      "ownerId": "user_uuid",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z",
      "owner": {
        "id": "user_uuid",
        "email": "user@example.com"
      },
      "memberships": [
        {
          "id": "membership_uuid",
          "user": {
            "id": "member_uuid",
            "email": "member@example.com"
          }
        }
      ],
      "tasks": [
        {
          "id": "task_uuid",
          "title": "Task Title",
          "description": "Task Description",
          "status": "Todo",
          "assigneeId": null
        }
      ]
    }
  }
  ```

### Update Project

- **PUT** `/projects/:id`
- **Description**: Update project details (owner only)
- **Body**:
  ```json
  {
    "name": "Updated Project Name"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Project updated successfully",
    "data": {
      "id": "uuid",
      "name": "Updated Project Name",
      "ownerId": "user_uuid",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z",
      "owner": {
        "id": "user_uuid",
        "email": "user@example.com"
      }
    }
  }
  ```

### Delete Project

- **DELETE** `/projects/:id`
- **Description**: Delete project (owner only)
- **Response**:
  ```json
  {
    "success": true,
    "message": "Project deleted successfully",
    "data": null
  }
  ```

## Member Management Endpoints

### Add Member to Project

- **POST** `/projects/:id/members`
- **Description**: Add a user as member to project (owner only)
- **Body**:
  ```json
  {
    "email": "newmember@example.com"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Member added successfully",
    "data": {
      "id": "membership_uuid",
      "userId": "member_uuid",
      "projectId": "project_uuid",
      "user": {
        "id": "member_uuid",
        "email": "newmember@example.com"
      }
    }
  }
  ```

### Remove Member from Project

- **DELETE** `/projects/:id/members/:memberId`
- **Description**: Remove a member from project (owner only)
- **Response**:
  ```json
  {
    "success": true,
    "message": "Member removed successfully",
    "data": null
  }
  ```

### Get Project Members

- **GET** `/projects/:id/members`
- **Description**: Get all members of a project (project owner or member only)
- **Response**:
  ```json
  {
    "success": true,
    "message": "Project members retrieved successfully",
    "data": [
      {
        "id": "membership_uuid",
        "userId": "member_uuid",
        "projectId": "project_uuid",
        "user": {
          "id": "member_uuid",
          "email": "member@example.com"
        }
      }
    ]
  }
  ```

## Task Management Endpoints

### Create Task

- **POST** `/projects/:projectId/tasks`
- **Description**: Create a new task in a project (project owner or member only)
- **Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task description (optional)",
    "assigneeId": "user_uuid (optional)"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Task created successfully",
    "data": {
      "id": "task_uuid",
      "title": "Task Title",
      "description": "Task description",
      "status": "Todo",
      "projectId": "project_uuid",
      "assigneeId": "user_uuid",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z",
      "assignee": {
        "id": "user_uuid",
        "email": "assignee@example.com"
      },
      "project": {
        "id": "project_uuid",
        "name": "Project Name"
      }
    }
  }
  ```

### Get Task by ID

- **GET** `/projects/tasks/:taskId`
- **Description**: Get task details (project owner or member only)
- **Response**:
  ```json
  {
    "success": true,
    "message": "Task retrieved successfully",
    "data": {
      "id": "task_uuid",
      "title": "Task Title",
      "description": "Task description",
      "status": "Todo",
      "projectId": "project_uuid",
      "assigneeId": "user_uuid",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z",
      "assignee": {
        "id": "user_uuid",
        "email": "assignee@example.com"
      },
      "project": {
        "id": "project_uuid",
        "name": "Project Name"
      }
    }
  }
  ```

### Get All Tasks in Project

- **GET** `/projects/:projectId/tasks`
- **Description**: Get all tasks in a project (project owner or member only)
- **Response**:
  ```json
  {
    "success": true,
    "message": "Project tasks retrieved successfully",
    "data": [
      {
        "id": "task_uuid",
        "title": "Task Title",
        "description": "Task description",
        "status": "Todo",
        "projectId": "project_uuid",
        "assigneeId": "user_uuid",
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z",
        "assignee": {
          "id": "user_uuid",
          "email": "assignee@example.com"
        }
      }
    ]
  }
  ```

### Get Kanban Board

- **GET** `/projects/:projectId/tasks/kanban`
- **Description**: Get tasks organized by status for kanban board (project owner or member only)
- **Response**:
  ```json
  {
    "success": true,
    "message": "Kanban board retrieved successfully",
    "data": {
      "todo": [
        {
          "id": "task_uuid",
          "title": "Task 1",
          "description": "Task description",
          "status": "Todo",
          "assigneeId": "user_uuid",
          "assignee": {
            "id": "user_uuid",
            "email": "assignee@example.com"
          }
        }
      ],
      "inProgress": [
        {
          "id": "task_uuid",
          "title": "Task 2",
          "description": "Task description",
          "status": "In_Progress",
          "assigneeId": "user_uuid",
          "assignee": {
            "id": "user_uuid",
            "email": "assignee@example.com"
          }
        }
      ],
      "done": [
        {
          "id": "task_uuid",
          "title": "Task 3",
          "description": "Task description",
          "status": "Done",
          "assigneeId": "user_uuid",
          "assignee": {
            "id": "user_uuid",
            "email": "assignee@example.com"
          }
        }
      ]
    }
  }
  ```

### Get Tasks by Status

- **GET** `/projects/:projectId/tasks/status/:status`
- **Description**: Get tasks filtered by status (Todo, In_Progress, Done)
- **Response**:
  ```json
  {
    "success": true,
    "message": "Todo tasks retrieved successfully",
    "data": [
      {
        "id": "task_uuid",
        "title": "Task Title",
        "description": "Task description",
        "status": "Todo",
        "assigneeId": "user_uuid",
        "assignee": {
          "id": "user_uuid",
          "email": "assignee@example.com"
        }
      }
    ]
  }
  ```

### Get Tasks by Assignee

- **GET** `/projects/:projectId/tasks/assignee/:assigneeId`
- **Description**: Get tasks assigned to a specific user
- **Response**:
  ```json
  {
    "success": true,
    "message": "Assignee tasks retrieved successfully",
    "data": [
      {
        "id": "task_uuid",
        "title": "Task Title",
        "description": "Task description",
        "status": "Todo",
        "assigneeId": "user_uuid",
        "assignee": {
          "id": "user_uuid",
          "email": "assignee@example.com"
        }
      }
    ]
  }
  ```

### Update Task

- **PUT** `/projects/tasks/:taskId`
- **Description**: Update task details (project owner or member only)
- **Body**:
  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated description",
    "assigneeId": "new_assignee_uuid"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Task updated successfully",
    "data": {
      "id": "task_uuid",
      "title": "Updated Task Title",
      "description": "Updated description",
      "status": "Todo",
      "projectId": "project_uuid",
      "assigneeId": "new_assignee_uuid",
      "assignee": {
        "id": "new_assignee_uuid",
        "email": "newassignee@example.com"
      },
      "project": {
        "id": "project_uuid",
        "name": "Project Name"
      }
    }
  }
  ```

### Update Task Status (Drag & Drop)

- **PATCH** `/projects/tasks/:taskId/status`
- **Description**: Update task status for kanban drag & drop (project owner or member only)
- **Body**:
  ```json
  {
    "status": "In_Progress"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Task status updated successfully",
    "data": {
      "id": "task_uuid",
      "title": "Task Title",
      "description": "Task description",
      "status": "In_Progress",
      "projectId": "project_uuid",
      "assigneeId": "user_uuid",
      "assignee": {
        "id": "user_uuid",
        "email": "assignee@example.com"
      },
      "project": {
        "id": "project_uuid",
        "name": "Project Name"
      }
    }
  }
  ```

### Delete Task

- **DELETE** `/projects/tasks/:taskId`
- **Description**: Delete a task (project owner or member only)
- **Response**:
  ```json
  {
    "success": true,
    "message": "Task deleted successfully",
    "data": null
  }
  ```

## Error Responses

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error message",
  "data": null
}
```

Common HTTP status codes:

- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid/missing token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found (resource not found)
- `500` - Internal Server Error

## Authentication

To access protected endpoints, include the JWT token in the Authorization header:

```
Authorization: Bearer <access_token>
```

The access token is obtained from the login endpoint and expires after 3 hours.

## Architecture

The API follows a clean architecture pattern with proper separation of concerns and modular service design:

### **Service Layer** (`/src/services/`)

- **ProjectService**: Handles project CRUD operations

  - Create, read, update, delete projects
  - Project access and ownership validation
  - Project listing with memberships and tasks

- **MemberService**: Handles member management operations

  - Add and remove project members
  - Get project members list
  - Member validation and authorization

- **TaskService**: Handles task management operations

  - Create, read, update, delete tasks
  - Kanban board functionality
  - Task status management (drag & drop)
  - Task assignment and filtering

- **AuthService**: Handles user authentication
  - User registration and login
  - JWT token generation

### **Controller Layer** (`/src/controllers/`)

- **ProjectController**: Project CRUD operations
- **MemberController**: Member management operations
- **TaskController**: Task management operations
- **AuthController**: Authentication operations

### **Router Layer** (`/src/routes/`)

- **ProjectRouter**: Project CRUD routes
- **MemberRouter**: Member management routes
- **TaskRouter**: Task management routes
- **AuthRouter**: Authentication routes

### **Middleware Layer** (`/src/middlewares/`)

- **Auth Middleware**: JWT authentication and user validation
- **Project Middleware**: Input validation for project and task operations

### **Validation Layer** (`/src/validations/`)

- **User Validation**: Login and registration validation
- **Project Validation**: Project creation and update validation
- **Task Validation**: Task creation, update, and status validation

This modular design ensures:

- **Single Responsibility**: Each service handles specific domain logic
- **Maintainability**: Easy to modify and extend individual components
- **Testability**: Services can be unit tested independently
- **Scalability**: New features can be added without affecting existing code
- **Kanban Functionality**: Full drag & drop task management with status updates
