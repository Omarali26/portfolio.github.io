// Custom Cursor
const cursor = document.querySelector(".cursor") as HTMLDivElement;
if (window.screen.width >= 992) {
    document.addEventListener("mousemove", (e) => { cursor.setAttribute("style", `top: ${e.pageY + 5}px; left: ${e.pageX + 5}px;`); });
    document.addEventListener("mouseout", () => { cursor.style.display = "none"; });
} else { cursor.style.display = "none"; }


// let landingSection = document.querySelector(".landing") as HTMLDivElement;
// let workSection = document.querySelector("section.work") as HTMLElement;
// let experienceSection = document.querySelector("section.experience") as HTMLElement;

// // Go Down
// let arrowToGoDown = landingSection.querySelector(".go-down") as HTMLDivElement;
// arrowToGoDown.addEventListener("click", () => { window.scrollTo(0, landingSection.clientHeight); });
    
// window.addEventListener("scroll", () => {
//     // Work
//     if (window.scrollY > landingSection.clientHeight - 300) {        
//         workSection.querySelectorAll(".have-done .done").forEach((done) => {
//             (done as HTMLDivElement).style.opacity = "1";
//             (done as HTMLDivElement).style.animation = "pushUp 1s alternate";
//         });
//     }
    
//     // Experience
//     if (window.scrollY > workSection.clientHeight + 400) {
//         experienceSection.querySelectorAll(".experiences .exp").forEach((exp) => {
//             (exp as HTMLDivElement).style.opacity = "1";
//             (exp.querySelector(".date") as HTMLDivElement).style.animation = "slideRight 1s alternate";
//             (exp.querySelector(".breif") as HTMLDivElement).style.animation = "slideLeft 1s alternate";
//         });
//     }
    
//     // Contact
//     if (window.scrollY > experienceSection.clientHeight + 500) {
//         (document.querySelector("section.contact a") as HTMLAnchorElement).style.opacity = "1";
//         (document.querySelector("section.contact a") as HTMLAnchorElement).style.animation = "slideRight 1s alternate";
//     }
// });