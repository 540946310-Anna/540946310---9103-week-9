const SVG_NS = "http://www.w3.org/2000/svg";

// 1. Clear the SVG canvas
function clearCanvas(svg) {
    svg.innerHTML = "";
}

// 2. Create a circle
function createCircle(cx, cy, r, fill) {
    const circle = document.createElementNS(SVG_NS, "circle");

    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", fill);

    return circle;
}

// 3. Create a rectangle
function createRectangle(x, y, width, height, fill) {
    const rect = document.createElementNS(SVG_NS, "rect");

    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fill);

    return rect;
}

// 4. Generate a random number
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// 5. Convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

// 6. Calculate a point on a circle
function getPointOnCircle(centerX, centerY, radius, angleDegrees) {
    const angle = degreesToRadians(angleDegrees);

    return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
    };
}
