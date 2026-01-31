function handleOrientation(event) {
  const beta = event.beta;
  const gamma = event.gamma;
  
  const hue = ((beta + 180) / 150) * 270+35;
//   const lightness = ((gamma + 90) / 180) * 196;
  const lightness = ((gamma + 90) / 180) * 200;

  document.body.style.backgroundColor =
    `hsl(${hue.toFixed(0)}, 380%, ${lightness.toFixed(0)}%)`;
}

function startOrientation() {
  window.addEventListener("deviceorientation", handleOrientation);
}

if (
  typeof DeviceOrientationEvent.requestPermission === "function"
) {
  DeviceOrientationEvent.requestPermission()
    .then(permission => {
    })
    .catch(console.error);
} else {
  startOrientation();
}