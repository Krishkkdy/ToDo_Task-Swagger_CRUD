        
  <h1>ToDo List Application</h1>
    <p>A simple and intuitive ToDo List application that enables users to manage their daily tasks. The application allows adding, editing, marking as complete, and deleting tasks. The project is built with an ASP.NET Core Web API backend and a responsive frontend using HTML, CSS, and JavaScript.</p>

  <h2>Features</h2>
    <ul>
        <li><strong>Create Tasks:</strong> Add new tasks to your list.</li>
        <li><strong>Edit Tasks:</strong> Update task details as needed.</li>
        <li><strong>Mark as Complete:</strong> Highlight tasks that have been completed.</li>
        <li><strong>Delete Tasks:</strong> Remove tasks from the list.</li>
        <li><strong>Responsive Design:</strong> Optimized for both desktop and mobile use.</li>
        <li><strong>API Integration:</strong> Perform CRUD operations via a .NET 8 Web API.</li>
    </ul>

  <h2>Technologies Used</h2>
    <h3>Backend</h3>
    <ul>
        <li>ASP.NET Core Web API (.NET 8)</li>
        <li>In-Memory Database (for task management)</li>
    </ul>
    <h3>Frontend</h3>
    <ul>
        <li>HTML, CSS, JavaScript</li>
    </ul>
    <h3>API Testing</h3>
    <ul>
        <li>Swagger UI</li>
    </ul>

  <h2>Project Structure</h2>
    <h3>Backend</h3>
    <ul>
        <li>Built using .NET 8 Web API.</li>
        <li>Implements CRUD operations for task management.</li>
        <li>Uses an in-memory database for demonstration purposes.</li>
    </ul>
    <h3>Frontend</h3>
    <ul>
        <li>A responsive user interface for task management.</li>
        <li>Interacts with the API for real-time task updates.</li>
    </ul>

  <h2>Prerequisites</h2>
    <p>Before running the application, ensure the following tools are installed:</p>
    <ul>
        <li>.NET 8 SDK</li>
        <li>Visual Studio 2022 (or higher)</li>
        <li>Browser (for running the frontend)</li>
    </ul>

  <h2>Setup Instructions</h2>
    <h3>Clone the Repository</h3>
    <h3>Run the Backend</h3>
    <ol>
        <li>Open the project in <strong>Visual Studio</strong>.</li>
        <li>Build the solution to restore dependencies.</li>
        <li>Run the project to start the Web API server.</li>
        <li>Use Swagger UI to test the API endpoints (by navigating to <code>/swagger</code> in the browser).</li>
    </ol>
    <h3>Run the Frontend</h3>
    <ol>
        <li>Open the frontend folder in your code editor.</li>
        <li>Run the <code>index.html</code> file in any browser.</li>
    </ol>

  <h2>API Endpoints</h2>
    <table>
        <thead>
            <tr>
                <th>HTTP Method</th>
                <th>Endpoint</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>GET</strong></td>
                <td>/api/tasks</td>
                <td>Fetch all tasks</td>
            </tr>
            <tr>
                <td><strong>POST</strong></td>
                <td>/api/tasks</td>
                <td>Add a new task</td>
            </tr>
            <tr>
                <td><strong>PUT</strong></td>
                <td>/api/tasks/{id}</td>
                <td>Update an existing task</td>
            </tr>
            <tr>
                <td><strong>DELETE</strong></td>
                <td>/api/tasks/{id}</td>
                <td>Delete a task</td>
            </tr>
        </tbody>
    </table>

  <h2>Future Enhancements</h2>
    <ul>
        <li>Add database integration (SQL Server or PostgreSQL).</li>
        <li>Implement user authentication and authorization.</li>
        <li>Enhance task categorization and filtering.</li>
    </ul>

  <h2>Screenshots</h2>
  
  ![image](https://github.com/user-attachments/assets/aae21fbc-aed7-410f-870b-79eefa8cbbd4)

  <p><br>Feel free to use and modify this application as needed. For any questions or feedback, please contact me</p>
