// ! header
let languageOptions = document.querySelectorAll(".header__link");

languageOptions.forEach(function (element, index) {
	element.addEventListener("click", switchLanguage);
});

function switchLanguage(event) {
	let targetElement = event.target;

	languageOptions.forEach(function (element, index) {
		element.classList.remove("active");
	});

	targetElement.classList.add("active");
}

// ! contacts
document.body.onclick = (event) => {
	const elem = event.target;
	// console.log(elem);
	if (elem.classList.contains("section-symbol")) {
		console.log(elem);
		navigator.clipboard.writeText("boss.armsport@gmail.com");
		alert("Эл. почта скопировано в буфер обмена");
	}
};
