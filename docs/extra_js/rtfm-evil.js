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
    p.innerHTML = `
        <!-- I love you https://codepen.io/jh3y/pen/WNXBdyZ -->
        <div class="container">
        <div class="scene">
        <div class="scene__shadow"></div>
        <div class="plane" style="--ring-count: 21">
            <div class="plane__shadow"></div>
            <div class="ring" style="--index: 0; --name: slink-0"></div>
            <div class="ring" style="--index: 1; --name: slink-1"></div>
            <div class="ring" style="--index: 2; --name: slink-2"></div>
            <div class="ring" style="--index: 3; --name: slink-3"></div>
            <div class="ring" style="--index: 4; --name: slink-4"></div>
            <div class="ring" style="--index: 5; --name: slink-5"></div>
            <div class="ring" style="--index: 6; --name: slink-6"></div>
            <div class="ring" style="--index: 7; --name: slink-7"></div>
            <div class="ring" style="--index: 8; --name: slink-8"></div>
            <div class="ring" style="--index: 9; --name: slink-9"></div>
            <div class="ring" style="--index: 10; --name: slink-10"></div>
            <div class="ring" style="--index: 11; --name: slink-11"></div>
            <div class="ring" style="--index: 12; --name: slink-12"></div>
            <div class="ring" style="--index: 13; --name: slink-13"></div>
            <div class="ring" style="--index: 14; --name: slink-14"></div>
            <div class="ring" style="--index: 15; --name: slink-15"></div>
            <div class="ring" style="--index: 16; --name: slink-16"></div>
            <div class="ring" style="--index: 17; --name: slink-17"></div>
            <div class="ring" style="--index: 18; --name: slink-18"></div>
            <div class="ring" style="--index: 19; --name: slink-19"></div>
            <div class="ring" style="--index: 20; --name: slink-20"></div>
        </div>
        </div>
        </div>

        <h1><a title="User:D0ktorz, GPL &lt;http://www.gnu.org/licenses/gpl.html&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Vimlogo.svg">
        <img width="64" alt="Vimlogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/64px-Vimlogo.svg.png"></a>
        saver</h1>
        <p>Are you stuck in vim?</p>
        <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=dan-slinky-50a257230">
        <img src="/assets/images/linkedin-240.png"><br />
        Call @danslinky</a>
        </p>
    `;
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
    document.title = "porn.guv";

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