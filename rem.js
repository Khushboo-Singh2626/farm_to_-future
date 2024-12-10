document.addEventListener("DOMContentLoaded", () => {
    const calendarElement = document.getElementById("calendar");
    const taskForm = document.getElementById("task-form");
    const upcomingTasks = document.getElementById("upcoming-tasks");
    const pendingTasks = document.getElementById("pending-tasks");
    const completedTasks = document.getElementById("completed-tasks");
  
    // Initialize Calendar
    function generateCalendar() {
      const now = new Date();
      const currentMonth = now.toLocaleString("default", { month: "long" });
      const year = now.getFullYear();
      calendarElement.innerHTML = `<h3>${currentMonth} ${year}</h3>`;
    }
  
    generateCalendar();
  
    // Add Task
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskDate = document.getElementById("task-date").value;
      const taskName = document.getElementById("task-name").value;
  
      if (taskDate && taskName) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          ${taskDate}: ${taskName}
          <div>
            <button class="complete">Mark Completed</button>
            <button class="pending">Mark Pending</button>
          </div>
        `;
        upcomingTasks.appendChild(taskItem);
  
        // Add Event Listeners to Buttons
        taskItem.querySelector(".complete").addEventListener("click", () => {
          taskItem.remove();
          completedTasks.appendChild(taskItem);
          taskItem.querySelector(".complete").remove();
          taskItem.querySelector(".pending").remove();
        });
  
        taskItem.querySelector(".pending").addEventListener("click", () => {
          taskItem.remove();
          pendingTasks.appendChild(taskItem);
          taskItem.querySelector(".pending").remove();
        });
  
        taskForm.reset();
      } else {
        alert("Please fill out both fields.");
      }
    });
  });
  