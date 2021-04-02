const container = document.querySelector("#container")
const rect = container.getBoundingClientRect();
const height = Math.floor(rect.bottom - rect.top);

function resize() {
    const scale = window.innerHeight / height;
    container.style.transform = `scale(${scale})`;
    const tempRect = container.getBoundingClientRect();
    const left = (window.innerWidth - tempRect.right) / 2;
    container.style.left = `${left}px`;
    container.style.opacity = 1;
}

resize();

window.addEventListener('resize', resize)
