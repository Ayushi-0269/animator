function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const canvas = document.getElementById("canvas");
  const rect = canvas.getBoundingClientRect();

  const x = ev.clientX - rect.left;
  const y = ev.clientY - rect.top;

  objects.push({ x, y, vx: 0, vy: 0 });
}