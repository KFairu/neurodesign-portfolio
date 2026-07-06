const workspace = document.querySelector("#workspace");
const svg = document.querySelector("#connections");
const nodes = [...document.querySelectorAll(".node")];
const nodePositions = new Map(
  nodes.map((node) => [
    node,
    {
      x: parseFloat(getComputedStyle(node).getPropertyValue("--x")),
      y: parseFloat(getComputedStyle(node).getPropertyValue("--y")),
    },
  ]),
);

const links = [
  ["image-reference-out", "gemini-image-a-in", "green"],
  ["prompt-picnic-out", "gemini-prompt-in", "purple"],
  ["image-reference-out", "chatgpt-image-a-in", "green"],
  ["prompt-picnic-out", "chatgpt-prompt-in", "purple"],
];

let topLayer = 20;
let activeDragNode = null;
const defaultCanvasScale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--canvas-scale")) || 0.44;
let currentCanvasScale = defaultCanvasScale;
let copyToastTimer = 0;

workspace.setAttribute("tabindex", "0");

nodes.forEach((node, index) => {
  const zIndex = 20 + index * 10;
  node.dataset.z = String(zIndex);
  node.style.setProperty("--node-z", zIndex);
  topLayer = Math.max(topLayer, zIndex);
});

function positionNode(node, x, y) {
  nodePositions.set(node, { x, y });
  node.style.setProperty("--x", `${x}px`);
  node.style.setProperty("--y", `${y}px`);
}

function canvasScale() {
  const rect = workspace.getBoundingClientRect();
  return rect.width / workspace.offsetWidth || 1;
}

function nodePoint(node) {
  return nodePositions.get(node);
}

function portCenter(portName) {
  const port = document.querySelector(`[data-port="${portName}"]`);
  const node = port.closest(".node");
  const point = nodePoint(node);

  return {
    x: point.x + port.offsetLeft + port.offsetWidth / 2,
    y: point.y + port.offsetTop + port.offsetHeight / 2,
  };
}

function portNode(portName) {
  return document.querySelector(`[data-port="${portName}"]`).closest(".node");
}

function bringNodeForward(node) {
  topLayer += 10;
  node.dataset.z = String(topLayer);
  node.style.setProperty("--node-z", topLayer);
  syncConnectionLayers();
}

function showCopyToast() {
  let toast = document.querySelector(".copy-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "copy-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.textContent = "Скопировано";
    document.body.append(toast);
  }

  window.clearTimeout(copyToastTimer);
  toast.classList.add("visible");
  copyToastTimer = window.setTimeout(() => toast.classList.remove("visible"), 1000);
}

async function copyPrompt(button) {
  const promptText = button.closest(".prompt-node").querySelector(".prompt-box").innerText.trim();

  try {
    await navigator.clipboard.writeText(promptText);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = promptText;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  showCopyToast();
  button.classList.add("copied");
  button.setAttribute("aria-label", "Prompt copied");
  window.setTimeout(() => {
    button.classList.remove("copied");
    button.setAttribute("aria-label", "Copy prompt");
  }, 900);
}

async function loadPrompt() {
  const promptBox = document.querySelector("#prompt-text");

  try {
    const response = await fetch("./assets/picnic-grid-prompt.txt");
    const text = await response.text();
    promptBox.innerHTML = "";
    text
      .split(/\n{2,}/)
      .map((chunk) => chunk.trim())
      .filter(Boolean)
      .forEach((chunk) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = chunk;
        promptBox.append(paragraph);
      });
  } catch {
    promptBox.textContent = "Prompt failed to load.";
  }
}

function bezierPath(start, end) {
  const distance = Math.max(120, Math.abs(end.x - start.x) * 0.42);
  const c1 = { x: start.x + distance, y: start.y };
  const c2 = { x: end.x - distance, y: end.y };
  return `M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`;
}

function connectionZ(from, to) {
  if (activeDragNode && (portNode(from) === activeDragNode || portNode(to) === activeDragNode)) {
    return topLayer + 1;
  }

  return 2;
}

function syncConnectionLayers() {
  links.forEach(([from, to], index) => {
    connectionLayers[index].style.setProperty("--connection-z", connectionZ(from, to));
  });
}

function renderConnections() {
  links.forEach(([from, to], index) => {
    connectionLayers[index].style.setProperty("--connection-z", connectionZ(from, to));
    connectionPaths[index].setAttribute("d", bezierPath(portCenter(from), portCenter(to)));
  });
}

let frameRequest = 0;

function requestRenderConnections() {
  if (frameRequest) return;

  frameRequest = requestAnimationFrame(() => {
    frameRequest = 0;
    renderConnections();
  });
}

function setCanvasScale(scale) {
  currentCanvasScale = Math.min(0.9, Math.max(0.28, scale));
  document.documentElement.style.setProperty("--canvas-scale", currentCanvasScale.toFixed(3));
  requestRenderConnections();
}

function zoomCanvas(delta) {
  setCanvasScale(currentCanvasScale + delta);
}

function setZoomOriginFromEvent(event) {
  const rect = workspace.getBoundingClientRect();
  const originX = ((event.clientX - rect.left) / rect.width) * 100;
  const originY = ((event.clientY - rect.top) / rect.height) * 100;
  const clampedX = Math.min(100, Math.max(0, originX));
  const clampedY = Math.min(100, Math.max(0, originY));

  workspace.style.setProperty("--zoom-origin-x", `${clampedX.toFixed(2)}%`);
  workspace.style.setProperty("--zoom-origin-y", `${clampedY.toFixed(2)}%`);
}

function handleZoomShortcut(event) {
  if (!event.metaKey && !event.ctrlKey) return;

  const key = event.key.toLowerCase();
  const code = event.code;

  if (key === "+" || key === "=" || code === "Equal" || code === "NumpadAdd") {
    event.preventDefault();
    zoomCanvas(0.06);
  } else if (key === "-" || key === "_" || code === "Minus" || code === "NumpadSubtract") {
    event.preventDefault();
    zoomCanvas(-0.06);
  } else if (key === "0" || code === "Digit0" || code === "Numpad0") {
    event.preventDefault();
    setCanvasScale(defaultCanvasScale);
  }
}

function handleWheelZoom(event) {
  if (!event.metaKey && !event.ctrlKey) return;

  event.preventDefault();
  setZoomOriginFromEvent(event);
  zoomCanvas(event.deltaY < 0 ? 0.04 : -0.04);
}

function makeDraggable(node) {
  let drag = null;

  node.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;

    const current = nodePoint(node);
    drag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      nodeX: current.x,
      nodeY: current.y,
    };

    bringNodeForward(node);
    activeDragNode = node;
    syncConnectionLayers();
    node.classList.add("dragging");
    node.setPointerCapture(event.pointerId);
  });

  node.addEventListener("pointermove", (event) => {
    if (!drag || drag.pointerId !== event.pointerId) return;

    positionNode(
      node,
      Math.max(24, drag.nodeX + (event.clientX - drag.startX) / canvasScale()),
      Math.max(24, drag.nodeY + (event.clientY - drag.startY) / canvasScale()),
    );
    requestRenderConnections();
  });

  node.addEventListener("pointerup", (event) => {
    if (!drag || drag.pointerId !== event.pointerId) return;

    drag = null;
    activeDragNode = null;
    syncConnectionLayers();
    node.classList.remove("dragging");
    node.releasePointerCapture(event.pointerId);
  });

  node.addEventListener("pointercancel", (event) => {
    if (!drag || drag.pointerId !== event.pointerId) return;

    drag = null;
    activeDragNode = null;
    syncConnectionLayers();
    node.classList.remove("dragging");
  });
}

const connectionLayers = links.map(([, , color], index) => {
  const layer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  layer.setAttribute("class", "connection-layer");
  layer.setAttribute("aria-hidden", "true");
  layer.style.setProperty("--connection-z", 1 + index);
  svg.after(layer);
  return layer;
});

const connectionPaths = links.map(([, , color], index) => {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("class", `connection ${color}`);
  connectionLayers[index].append(path);
  return path;
});

nodes.forEach(makeDraggable);
document.querySelectorAll(".copy-button").forEach((button) => button.addEventListener("click", () => copyPrompt(button)));
loadPrompt().then(requestRenderConnections);
window.addEventListener("resize", requestRenderConnections);
window.addEventListener("keydown", handleZoomShortcut);
workspace.addEventListener("wheel", handleWheelZoom, { passive: false });
renderConnections();
