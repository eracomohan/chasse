const holo = document.querySelector(".etape-8");
const images = holo.querySelectorAll(".img-s6");
const steps = images.length - 1;

let targetT = 0;
let currentT = 0;
const smoothness = 0.1;

images[0].style.opacity = 1;

function updateImages(t) {
    const scaled = t * steps;
    const index = Math.floor(scaled);
    const localT = scaled - index;

    images.forEach(img => img.style.opacity = 0);

    if (images[index]) {
        images[index].style.opacity = 1 - localT;
    }
    if (images[index + 1]) {
        images[index + 1].style.opacity = localT;
    }
}

function animate() {
    currentT += (targetT - currentT) * smoothness;
    updateImages(currentT);
    requestAnimationFrame(animate);
}

// interaction UNIQUEMENT dans la section
holo.addEventListener("mousemove", e => {
    const rect = holo.getBoundingClientRect();
    targetT = clamp((e.clientY - rect.top) / rect.height, 0, 1);
});

function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
}

animate();