document.addEventListener("DOMContentLoaded", (e) => { 
    const wrapper3d = document.querySelector(".wrapper-3d");
    const text3d = document.querySelector(".text-3d");

    // Fonction qui fait bouger et tourner le texte
    function moveText() {
        // text3d.style.transform = `translate(-50%, -50%) rotate3d(${x}, ${y}, ${z}, ${a * 60}deg)`;
        text3d.style.top = Math.random() * 100 + "%";
        text3d.style.left = Math.random() * 100 + "%";
    }

    // Événements
    text3d.addEventListener("mouseenter", moveText);
    text3d.addEventListener("click", moveText);
});
