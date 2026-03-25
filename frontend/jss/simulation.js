// -----------------------------
// 🎯 CANVAS SETUP
// -----------------------------
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Graph canvas
const graphCanvas = document.getElementById("graph");
const gctx = graphCanvas.getContext("2d");

// -----------------------------
// 🧠 DATA
// -----------------------------
let objects = [];
let graphData = [];
let time = 0;

// -----------------------------
// 🚀 START SIMULATION
// -----------------------------
function startSimulation() {
  let v = document.getElementById("velocity").value;

  objects.forEach(obj => {
    obj.vx = v;
    obj.vy = -v;
  });

  animate();
}

// -----------------------------
// 🎬 ANIMATION LOOP
// -----------------------------
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  objects.forEach(obj => {

    // Gravity
    obj.vy += 0.5;

    // Motion
    obj.x += obj.vx;
    obj.y += obj.vy;

    // Bounce from ground
    if (obj.y > canvas.height - 10) {
      obj.y = canvas.height - 10;
      obj.vy *= -0.7;
    }

    // Draw object
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, 10, 0, Math.PI * 2);
    ctx.fill();

    // Update graph
    updateGraph(obj.y);
  });

  time += 0.1;
  requestAnimationFrame(animate);
}

// -----------------------------
// 📊 GRAPH (POSITION vs TIME)
// -----------------------------
function updateGraph(y) {
  graphData.push({ t: graphData.length, y });

  gctx.clearRect(0, 0, graphCanvas.width, graphCanvas.height);

  gctx.beginPath();

  graphData.forEach((p, i) => {
    let gx = i * 2;
    let gy = graphCanvas.height - p.y;

    if (i === 0) gctx.moveTo(gx, gy);
    else gctx.lineTo(gx, gy);
  });

  gctx.stroke();
}

// -----------------------------
// 🖱️ CLICK TO ADD OBJECT
// -----------------------------
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  objects.push({
    x,
    y,
    vx: 0,
    vy: 0
  });
});d