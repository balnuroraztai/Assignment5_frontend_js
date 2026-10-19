
const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasks = [];
let nextId = 1;

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();

    if (title === "" || description === "") {
        return;
    }

    const task = {
        id: nextId++,
        title: title,
        description: description,
        completed: false
    };

    tasks.push(task);
    taskForm.reset();
    displayTasks();
});

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task) {
        const card = document.createElement("div");
        card.className = "task-card";

        const header = document.createElement("div");
        header.className = "task-header";

        const title = document.createElement("span");
        title.className = "task-title";
        title.textContent = task.title;

        const actions = document.createElement("div");
        actions.className = "task-actions";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "complete-checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function() {
            task.completed = checkbox.checked;
            displayTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function() {
            tasks = tasks.filter(function(item) {
                return item.id !== task.id;
            });

            displayTasks();
        });

        const description = document.createElement("p");
        description.className = "task-description";
        description.textContent = task.description;

        if (task.completed) {
            title.classList.add("completed");
            description.classList.add("completed");
        }

        actions.appendChild(checkbox);
        actions.appendChild(deleteBtn);

        header.appendChild(title);
        header.appendChild(actions);

        card.appendChild(header);
        card.appendChild(description);

        taskList.appendChild(card);
    });

    const remaining = tasks.filter(function(task) {
        return !task.completed;
    }).length;

    taskCount.textContent = remaining + " tasks remaining";
}
