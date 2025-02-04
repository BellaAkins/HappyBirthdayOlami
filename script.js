var countDownDate = new Date("Feb 4, 2025 06:05:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24)) + ":";
  var hours =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + ":";
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + ":";
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Redirect to birthday.html after a short delay
    setTimeout(function () {
      window.location.href = "birthday.html";
    }, 5000); // 5 seconds delay
  }
}, 1000);
