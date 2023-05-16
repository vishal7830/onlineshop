const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('closeBtn');




menu.addEventListener("click", () => {
    navbar.style.display = "flex";
});




closeBtn.addEventListener("click", () => {
    navbar.style.display = "none";
});
