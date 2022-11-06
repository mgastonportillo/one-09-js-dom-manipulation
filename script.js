const btn = document.querySelector("[data-form-btn]");

const createTask = (event) => {
	event.preventDefault();
	const input = document.querySelector("[data-form-input]");
	const list = document.querySelector("[data-list]");
	const task = document.createElement("li");
	const value = input.value;
	const content = `
  <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
	task.classList.add("card");
	task.innerHTML = content;
	list.appendChild(task);
	input.value = "";
};

btn.addEventListener("click", createTask);
