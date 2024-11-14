import { setupStoryModal } from "./story.js";
import { setupCustomCursor } from "./cursor.js";

document.addEventListener("DOMContentLoaded", () => {
	const content = document.getElementById("content");
	setupStoryModal(content);
	setupCustomCursor();
});
