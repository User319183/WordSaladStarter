document.addEventListener("DOMContentLoaded", function () {
	const content = document.getElementById("content");

	// The modal for displaying the story
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
                <button id="generateStory" class="btn btn-primary">Start Quest</button>
                <p id="story" class="mt-4"></p>
            </main>
            <footer class="mt-4 text-center">
                <p>&copy; 2024 User319183</p>
            </footer>
        </div>
    `;

	// Event listener to the button
	document
		.getElementById("generateStory")
		.addEventListener("click", function () {
			// Get values from input fields
			const heroName = document.getElementById("heroName").value;
			const weapon = document.getElementById("weapon").value;
			const enemy = document.getElementById("enemy").value;
			const place = document.getElementById("place").value;
			const treasure = document.getElementById("treasure").value;
			const sidekick = document.getElementById("sidekick").value;

			// Validate inputs & provide default values if empty
			const validatedHeroName = heroName || "Hero";
			const validatedWeapon = weapon || "sword";
			const validatedEnemy = enemy || "dragon";
			const validatedPlace = place || "castle";
			const validatedTreasure = treasure || "gold";
			const validatedSidekick = sidekick || "sidekick";

			// Create the story using the validated inputs
			const story = `In the land of ${validatedPlace}, there was a brave hero named ${validatedHeroName}. Armed with a ${validatedWeapon}, and accompanied by their loyal sidekick ${validatedSidekick}, ${validatedHeroName} set out on a quest to defeat the evil ${validatedEnemy} and claim the ${validatedTreasure}. After a fierce battle, ${validatedHeroName} and ${validatedSidekick} emerged victorious and returned home as legends.`;

			// Display the story in the modal
			const modalStoryContent =
				document.getElementById("modalStoryContent");
			modalStoryContent.innerHTML = story;
			modalStoryContent.style.backgroundColor = "rgba(52, 152, 219, 0.8)";
			modalStoryContent.style.padding = "20px";
			modalStoryContent.style.borderRadius = "10px";
			const storyModal = new bootstrap.Modal(
				document.getElementById("storyModal")
			);
			storyModal.show();
		});

	// Cycle through RGB colors for the border
	function cycleBorderColor(element) {
		let hue = 0;
		setInterval(() => {
			hue = (hue + 1) % 360;
			element.style.border = `2px solid hsl(${hue}, 100%, 50%)`;
		}, 100);
	}

	// Apply color cycling to the border of the story container
	const storyContainer = document.getElementById("storyContainer");
	cycleBorderColor(storyContainer);
});
