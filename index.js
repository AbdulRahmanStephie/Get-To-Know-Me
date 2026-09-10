//window.alert("Welcome to My Portfolio!");

document.getElementById("Welcome").textContent = "Get to Know AbdulRahman Stephen";

const aboutButton = document.getElementById("aboutButton");
const aboutText = document.getElementById("KnowMe");

aboutButton.addEventListener("click", () => {
    aboutText.textContent = "Hi, I'm AbdulRahman Stephen. I enjoy learning, building projects, and growing my skills.";
    aboutText.hidden = false;
    aboutButton.textContent = "About Me";
});