// I <3 uBlock Origin
let timeoutId;

function resetTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(startScreensaver, 15000); // screensaver timeout
}

function startScreensaver() {

    // delete the page
    document.body.innerHTML = "";

    // create a screensaver
    const p = document.createElement("p");
    p.innerHTML = "Stuck in vim? HIRE @danslinky for help!";
    document.body.appendChild(p);

    // enable dark mode...
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.body.style.fontSize = "50px";

    // recreate the dvd logo
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

    // change the tab <title>
    document.title = "pornhub.com";

    // reload the page when the mouse is moved
    // document.onmousemove = () => {
    //     location.reload();
    // }
    // vim escape mode activated
    document.onkeydown = (e) => {
        if (e.key === "Escape") {
            document.onkeydown = (e) => {
                if (e.key === ":") {
                    document.onkeydown = (e) => {
                        if (e.key === "q") {
                            location.reload();
                        }
                    }
                }
            }
        }
    }

    // told you, disable javascript
    
}

// reset the timeout on any user interaction
document.addEventListener('mousemove', resetTimeout);
document.addEventListener('mousedown', resetTimeout);
document.addEventListener('keydown', resetTimeout);
document.addEventListener('scroll', resetTimeout);
document.addEventListener('touchstart', resetTimeout);
document.addEventListener('click', resetTimeout);
document.addEventListener('keypress', resetTimeout);
document.addEventListener('keyup', resetTimeout);
document.addEventListener('keydown', resetTimeout);
document.addEventListener('resize', resetTimeout);
document.addEventListener('wheel', resetTimeout);
document.addEventListener('touchmove', resetTimeout);
document.addEventListener('touchend', resetTimeout);
document.addEventListener('touchcancel', resetTimeout);
document.addEventListener('touchleave', resetTimeout);
document.addEventListener('touchenter', resetTimeout);

resetTimeout(); // start the initial timeout