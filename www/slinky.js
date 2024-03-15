document.addEventListener("DOMContentLoaded", function () {
  var countdown = 30;
  var progressBarFilled = document.querySelector(".progress-bar-filled"); // Select the progress bar filled div
  var timerSpan = document.getElementById("timerSpan"); // Select the span where the countdown is displayed
  var cthulbernetesIndicator = document.getElementById(
    "cthulbernetes-indicator"
  ); // Select the octopus icon
  
  var playButton = document.getElementById("playButton");
  var video = document.getElementById("myvideo");
  var terminalCard = document.getElementById("terminal-card");
  // terminalCard.style.display = "block";

  video.hidden = true;

  var timer = setInterval(function () {
    countdown--;
    var emojiMap = {
      0: "0️⃣",
      1: "1️⃣",
      2: "2️⃣",
      3: "3️⃣",
      4: "4️⃣",
      5: "5️⃣",
      6: "6️⃣",
      7: "7️⃣",
      8: "8️⃣",
      9: "9️⃣",
    };

    var emojiCountdown = countdown
      .toString()
      .split("")
      .map(function (digit) {
        return emojiMap[digit];
      })
      .join("");

    timerSpan.textContent = emojiCountdown;

    var percentage = ((30 - countdown) / 30) * 100; // Calculate the percentage
    progressBarFilled.style.width = percentage + "%"; // Update the width of the progress bar
    progressBarFilled.setAttribute("data-filled", percentage.toFixed(0) + "%"); // Update the tooltip

    if (percentage >= 50) {
      cthulbernetesIndicator.style.color = "red"; // Change color to red when progress is 50% or more
    }

    if (countdown <= 0) {
      clearInterval(timer);
      // send user to the manual
      window.location.href = "https://rtfm.danslinky.co.uk/#timeout";
    }
  }, 1000);

  playButton.addEventListener("click", function () {
    video.muted = false;
    video.volume = 1.0;
    // advance the video for the user
    video.currentTime = 30 - countdown;
    video.hidden = false;
    video.controls = false;
    // disclaimer.hidden = false;
    playButton.hidden = true;
    // change h1.cthulbernetes to red
  });

  // Example of adding click event listeners to your buttons
  document.getElementById("okButton").addEventListener("click", function () {
    // Handle skip tests button click
    video.play();
    terminalCard.style.display = "none";
    playButton.click();
  });

  document.getElementById("noButton").addEventListener("click", function () {
    // Handle reboot firewall button click
    window.location.href = "https://rtfm.danslinky.co.uk/#skippy";
  });
});