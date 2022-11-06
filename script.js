(() => {
	const btn = document.querySelector("[data-form-btn]");

	const completeTask = () => {
		const i = document.createElement("i");
		i.classList.add("far", "fa-check-square", "icon");
		i.addEventListener("click", completeTaskHandler);
		return i;
	};

	const completeTaskHandler = (event) => {
		const element = event.target;
		element.classList.toggle("fas");
		element.classList.toggle("completeIcon");
		element.classList.toggle("far");
	};

	const removeTask = () => {
		const i = document.createElement("i");
		i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
		i.addEventListener("click", removeTaskHandler);
		return i;
	};

	const removeTaskHandler = (event) => {
		const element = event.target;
	};

	const createTask = (event) => {
		event.preventDefault();

		const input = document.querySelector("[data-form-input]");
		const value = input.value;
		const list = document.querySelector("[data-list]");

		const task = document.createElement("li");
		task.classList.add("card");

		const taskContent = document.createElement("div");

		const taskTitle = document.createElement("span");
		taskTitle.classList.add("task");
		taskTitle.innerText = value;

		taskContent.appendChild(completeTask());
		taskContent.appendChild(taskTitle);

		task.appendChild(taskContent);
		task.appendChild(removeTask());
		list.appendChild(task);

		input.value = "";
	};

	btn.addEventListener("click", createTask);
})();
