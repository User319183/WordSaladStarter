import { cycleCursorColor } from "./utils.js";

// Set up a custom cursor
export function setupCustomCursor() {
    // Disable custom cursor on mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    // New div element for the custom cursor
    const customCursor = document.createElement("div");
    customCursor.classList.add("custom-cursor");
    document.body.appendChild(customCursor);

    // Update the position of the custom cursor based on mouse movement
    document.addEventListener("mousemove", (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    // Aanimation class to the custom cursor on click and remove it after 500ms
    document.addEventListener("click", () => {
        customCursor.classList.add("animate");
        setTimeout(() => {
            customCursor.classList.remove("animate");
        }, 500);
    });

    // Cycle the color of the custom cursor
    cycleCursorColor(customCursor);
}