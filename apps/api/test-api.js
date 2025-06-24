const axios = require("axios");

const BASE_URL = "http://localhost:8000/api";
let accessToken = "";
let projectId = "";
let taskId = "";

// Test user data
const testUser = {
  email: "test3@example.com",
  password: "password123",
};

const testProject = {
  name: "Test Project",
};

const testTask = {
  title: "Test Task",
  description: "This is a test task description",
};

async function testAPI() {
  try {
    console.log("🚀 Testing API endpoints with complete task management...\n");

    // 1. Register user
    console.log("1. Testing user registration...");
    try {
      const registerResponse = await axios.post(
        `${BASE_URL}/auth/register`,
        testUser
      );
      console.log("✅ Registration successful:", registerResponse.data.message);
    } catch (error) {
      if (error.response?.data?.message?.includes("already exists")) {
        console.log("ℹ️  User already exists, continuing...");
      } else {
        console.log("❌ Registration failed:", error.response?.data?.message);
      }
    }

    // 2. Login user
    console.log("\n2. Testing user login...");
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, testUser);
    accessToken = loginResponse.data.data.accessToken;
    console.log("✅ Login successful:", loginResponse.data.message);

    // Set up axios with auth header
    const authAxios = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // 3. Create project
    console.log("\n3. Testing project creation...");
    const createProjectResponse = await authAxios.post(
      "/projects",
      testProject
    );
    projectId = createProjectResponse.data.data.id;
    console.log("✅ Project created:", createProjectResponse.data.message);
    console.log("   Project ID:", projectId);

    // 4. Create task
    console.log("\n4. Testing task creation...");
    const createTaskResponse = await authAxios.post(
      `/projects/${projectId}/tasks`,
      testTask
    );
    taskId = createTaskResponse.data.data.id;
    console.log("✅ Task created:", createTaskResponse.data.message);
    console.log("   Task ID:", taskId);

    // 5. Get all tasks in project
    console.log("\n5. Testing get all tasks in project...");
    const getTasksResponse = await authAxios.get(
      `/projects/${projectId}/tasks`
    );
    console.log("✅ Tasks retrieved:", getTasksResponse.data.message);
    console.log("   Number of tasks:", getTasksResponse.data.data.length);

    // 6. Get task by ID
    console.log("\n6. Testing get task by ID...");
    const getTaskResponse = await authAxios.get(`/projects/tasks/${taskId}`);
    console.log("✅ Task details retrieved:", getTaskResponse.data.message);
    console.log("   Task title:", getTaskResponse.data.data.title);

    // 7. Get tasks by status
    console.log("\n7. Testing get tasks by status...");
    const getTodoTasksResponse = await authAxios.get(
      `/projects/${projectId}/tasks/status/Todo`
    );
    console.log("✅ Todo tasks retrieved:", getTodoTasksResponse.data.message);
    console.log(
      "   Number of todo tasks:",
      getTodoTasksResponse.data.data.length
    );

    // 8. Update task status (drag & drop simulation)
    console.log("\n8. Testing task status update (drag & drop)...");
    const updateStatusResponse = await authAxios.patch(
      `/projects/tasks/${taskId}/status`,
      {
        status: "In_Progress",
      }
    );
    console.log("✅ Task status updated:", updateStatusResponse.data.message);
    console.log("   New status:", updateStatusResponse.data.data.status);

    // 9. Get tasks by new status
    console.log("\n9. Testing get tasks by updated status...");
    const getInProgressTasksResponse = await authAxios.get(
      `/projects/${projectId}/tasks/status/In_Progress`
    );
    console.log(
      "✅ In Progress tasks retrieved:",
      getInProgressTasksResponse.data.message
    );
    console.log(
      "   Number of in progress tasks:",
      getInProgressTasksResponse.data.data.length
    );

    // 10. Update task details
    console.log("\n10. Testing task update...");
    const updateTaskResponse = await authAxios.put(
      `/projects/tasks/${taskId}`,
      {
        title: "Updated Test Task",
        description: "This is an updated test task description",
      }
    );
    console.log("✅ Task updated:", updateTaskResponse.data.message);
    console.log("   Updated title:", updateTaskResponse.data.data.title);

    // 11. Move task to Done status
    console.log("\n11. Testing move task to Done...");
    const moveToDoneResponse = await authAxios.patch(
      `/projects/tasks/${taskId}/status`,
      {
        status: "Done",
      }
    );
    console.log("✅ Task moved to Done:", moveToDoneResponse.data.message);

    // 12. Get kanban board
    console.log("\n12. Testing kanban board...");
    const kanbanResponse = await authAxios.get(
      `/projects/${projectId}/tasks/kanban`
    );
    console.log("✅ Kanban board retrieved:", kanbanResponse.data.message);
    console.log("   Todo tasks:", kanbanResponse.data.data.todo.length);
    console.log(
      "   In Progress tasks:",
      kanbanResponse.data.data.inProgress.length
    );
    console.log("   Done tasks:", kanbanResponse.data.data.done.length);

    // 13. Create another task for testing
    console.log("\n13. Creating another task for testing...");
    const secondTask = {
      title: "Second Test Task",
      description: "Another test task",
    };
    const createSecondTaskResponse = await authAxios.post(
      `/projects/${projectId}/tasks`,
      secondTask
    );
    console.log(
      "✅ Second task created:",
      createSecondTaskResponse.data.message
    );

    // 14. Get updated kanban board
    console.log("\n14. Testing updated kanban board...");
    const updatedKanbanResponse = await authAxios.get(
      `/projects/${projectId}/tasks/kanban`
    );
    console.log(
      "✅ Updated kanban board retrieved:",
      updatedKanbanResponse.data.message
    );
    console.log("   Todo tasks:", updatedKanbanResponse.data.data.todo.length);
    console.log(
      "   In Progress tasks:",
      updatedKanbanResponse.data.data.inProgress.length
    );
    console.log("   Done tasks:", updatedKanbanResponse.data.data.done.length);

    // 15. Delete task
    console.log("\n15. Testing task deletion...");
    const deleteTaskResponse = await authAxios.delete(
      `/projects/tasks/${taskId}`
    );
    console.log("✅ Task deleted:", deleteTaskResponse.data.message);

    // 16. Delete project
    console.log("\n16. Testing project deletion...");
    const deleteProjectResponse = await authAxios.delete(
      `/projects/${projectId}`
    );
    console.log("✅ Project deleted:", deleteProjectResponse.data.message);

    console.log("\n🎉 All tests completed successfully!");
    console.log("✅ Complete task management system working correctly!");
    console.log("✅ Kanban drag & drop functionality working!");
  } catch (error) {
    console.error(
      "❌ Test failed:",
      error.response?.data?.message || error.message
    );
  }
}

// Run the test
testAPI();
