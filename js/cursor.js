import { cycleCursorColor } from "./utils.js";

export function setupCustomCursor() {
	const customCursor = document.createElement("div");
	customCursor.classList.add("custom-cursor");
	document.body.appendChild(customCursor);

	document.addEventListener("mousemove", (e) => {
		customCursor.style.left = `${e.clientX}px`;
		customCursor.style.top = `${e.clientY}px`;
	});

	document.addEventListener("click", () => {
		customCursor.classList.add("animate");
		setTimeout(() => {
			customCursor.classList.remove("animate");
		}, 500);
	});

	cycleCursorColor(customCursor);
}
