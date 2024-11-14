export function cycleBorderColor(element) {
	let hue = 0;
	setInterval(() => {
		hue = (hue + 1) % 360;
		element.style.border = `2px solid hsl(${hue}, 100%, 50%)`;
	}, 100);
}

export function cycleCursorColor(element) {
	let hue = 0;
	setInterval(() => {
		hue = (hue + 1) % 360;
		element.style.borderColor = `hsl(${hue}, 100%, 50%)`;
	}, 100);
}
