import completeTaskIcon from "./components/completeTaskIcon.js";
import removeTaskIcon from "./components/removeTaskIcon.js";

(() => {
	const btn = document.querySelector("[data-form-btn]");

	const createTask = (event) => {
		event.preventDefault();

		const input = document.querySelector("[data-form-input]");

		if (input.value.trim() === "") {
			alert("Must write a task name");
			return;
		}

		const value = input.value;

		const list = document.querySelector("[data-list]");

		const task = document.createElement("li");
		task.classList.add("card");

		const taskContent = document.createElement("div");

		const taskTitle = document.createElement("span");
		taskTitle.classList.add("task");
		taskTitle.innerText = value;

		taskContent.appendChild(completeTaskIcon());
		taskContent.appendChild(taskTitle);

		task.appendChild(taskContent);
		task.appendChild(removeTaskIcon());
		list.appendChild(task);

		input.value = "";
	};

	btn.addEventListener("click", createTask);
})();
