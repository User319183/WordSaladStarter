import { cycleBorderColor } from "./utils.js";

export function setupStoryModal(content) {
	content.innerHTML = `
        <div class="container" id="storyContainer">
            <header class="my-4">
                <h1 class="text-center">Mad Lib Quest</h1>
            </header>
            <main>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="heroName" class="form-label">Enter the hero's name:</label>
                        <input type="text" id="heroName" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <label for="weapon" class="form-label">Enter a weapon:</label>
                        <input type="text" id="weapon" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <label for="enemy" class="form-label">Enter an enemy:</label>
                        <input type="text" id="enemy" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <label for="place" class="form-label">Enter a place:</label>
                        <input type="text" id="place" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <label for="treasure" class="form-label">Enter a treasure:</label>
                        <input type="text" id="treasure" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <label for="sidekick" class="form-label">Enter a sidekick:</label>
                        <input type="text" id="sidekick" class="form-control">
                    </div>
                </div>
                <button id="generateStory" class="btn btn-primary">
                    <span class="material-icons">play_arrow</span> Start Quest
                </button>
                <p id="story" class="mt-4"></p>
            </main>
            <footer class="mt-4 text-center">
                <p>&copy; 2024 User319183</p>
            </footer>
        </div>
    `;

	document.getElementById("generateStory").addEventListener("click", () => {
		const heroName = document.getElementById("heroName").value || "Hero";
		const weapon = document.getElementById("weapon").value || "sword";
		const enemy = document.getElementById("enemy").value || "dragon";
		const place = document.getElementById("place").value || "castle";
		const treasure = document.getElementById("treasure").value || "gold";
		const sidekick =
			document.getElementById("sidekick").value || "sidekick";

		const story = `In the land of ${place}, there was a brave hero named ${heroName}. Armed with a ${weapon}, and accompanied by their loyal sidekick ${sidekick}, ${heroName} set out on a quest to defeat the evil ${enemy} and claim the ${treasure}. After a fierce battle, ${heroName} and ${sidekick} emerged victorious and returned home as legends.`;

		document.getElementById("modalStoryContent").innerHTML = story;
		new bootstrap.Modal(document.getElementById("storyModal")).show();
	});

	cycleBorderColor(document.getElementById("storyContainer"));
}
