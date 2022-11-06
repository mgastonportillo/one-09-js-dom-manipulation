const removeTaskIcon = () => {
	const i = document.createElement("i");
	i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
	i.addEventListener("click", removeTaskHandler);
	return i;
};

const removeTaskHandler = (event) => {
	const parent = event.target.parentElement;
	parent.remove();
};

export default removeTaskIcon;
