let timeoutId;

function resetTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(startScreensaver, 30000);
}

function startScreensaver() {
    // delete the page
    document.body.innerHTML = "";

    // create a screensaver
    const p = document.createElement("p");
    p.innerHTML = "HIRE @danslinky TO FIX THIS SCREENSAVER";
    document.body.appendChild(p);

    // set the text to white
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.body.style.fontSize = "50px";

    // make the text fly around on the page
    let x = 0;
    let y = 0;
    let dx = 1;
    let dy = 1;

    setInterval(() => {
        x += dx;
        y += dy;
        p.style.position = "absolute";
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
        if (x > window.innerWidth - p.clientWidth || x < 0) {
            dx = -dx;
        }
        if (y > window.innerHeight - p.clientHeight || y < 0) {
            dy = -dy;
        }
    }, 10);

    // reload the page when the mouse is moved
    document.onmousemove = () => {
        location.reload();
    }
}

document.addEventListener('mousemove', resetTimeout);
document.addEventListener('mousedown', resetTimeout);
document.addEventListener('keydown', resetTimeout);
document.addEventListener('scroll', resetTimeout);
document.addEventListener('touchstart', resetTimeout);

resetTimeout(); // start the initial timeout