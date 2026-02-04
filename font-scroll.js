const text = document.getElementById("text");
const hud = document.getElementById("hud");

const minWeight = 100;
const maxWeight = 900;

function updateWeight() {
    const scrollTop = window.scrollY;
    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollTop / maxScroll;

    const weight =
        minWeight + progress * (maxWeight - minWeight);

    const roundedWeight = Math.round(weight);

    text.style.fontVariationSettings = `"wght" ${roundedWeight}`;
    hud.textContent = `Graisse : ${roundedWeight}`;
}

window.addEventListener("scroll", updateWeight);
updateWeight();