const completeTaskIcon = () => {
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
	const sibling = element.nextElementSibling;
	sibling.classList.toggle("complete");
};

export default completeTaskIcon;
