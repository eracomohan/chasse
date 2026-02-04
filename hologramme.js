const images = document.querySelectorAll(".img");

const minAngle = -70;
const maxAngle = 70;

const steps = images.length - 1;

window.addEventListener("deviceorientation", (evt) => {
    const angle = evt.gamma;

    const t = clamp(invLerp(minAngle, maxAngle, angle), 0, 1);

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
});

function invLerp(a, b, v) {
    return (v - a) / (b - a);
}

function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
}
/*
const images = document.querySelectorAll(".img");
const steps = images.length - 1;

function updateFromT(t) {
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

// desktop
window.addEventListener("mousemove", e => {
    const t = clamp(e.clientY / window.innerHeight, 0, 1);
    updateFromT(t);
});

// mobile
window.addEventListener("deviceorientation", e => {
    const minAngle = -70;
    const maxAngle = 70;
    const t = clamp((e.gamma - minAngle) / (maxAngle - minAngle), 0, 1);
    updateFromT(t);
});

function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
}
*/