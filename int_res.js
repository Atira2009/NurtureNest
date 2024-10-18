document.getElementById("add-task-btn").addEventListener("click", function() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();
        
    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");
            
        li.innerHTML = `
            <input type="checkbox" id="${taskText}">
            <label for="${taskText}">${taskText}</label>
        `;
            
        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field
    }
});

