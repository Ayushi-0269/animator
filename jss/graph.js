const graph = document.getElementById("graph");
const gctx = graph.getContext("2d");

let graphData = [];

function updateGraph(x, y) {
  graphData.push({ t: graphData.length, y });

  gctx.clearRect(0, 0, graph.width, graph.height);

  gctx.beginPath();

  graphData.forEach((p, i) => {
    let gx = i * 2;
    let gy = graph.height - p.y;

    if (i === 0) gctx.moveTo(gx, gy);
    else gctx.lineTo(gx, gy);
  });

  gctx.stroke();
}