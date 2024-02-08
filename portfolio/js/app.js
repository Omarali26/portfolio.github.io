"use strict";
const cursor = document.querySelector(".cursor");
if (window.screen.width >= 992) {
    document.addEventListener("mousemove", (e) => { cursor.setAttribute("style", `top: ${e.pageY + 5}px; left: ${e.pageX + 5}px;`); });
    document.addEventListener("mouseout", () => { cursor.style.display = "none"; });
}
else {
    cursor.style.display = "none";
}
