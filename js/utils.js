// Cycle the border color of an element through the HSL color spectrum
export function cycleBorderColor(element) {
    let hue = 0;
    // Set an interval to update the border color every 100 milliseconds
    setInterval(() => {
        hue = (hue + 1) % 360;
        element.style.border = `2px solid hsl(${hue}, 100%, 50%)`;
    }, 100);
}

// Cycle the cursor color of an element through the HSL color spectrum
export function cycleCursorColor(element) {
    let hue = 0;
    // Set an interval to update the cursor color every 100 milliseconds
    setInterval(() => {
        hue = (hue + 1) % 360;
        element.style.borderColor = `hsl(${hue}, 100%, 50%)`;
    }, 100);
}