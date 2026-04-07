const envelope = document.getElementById("envelope");
const heartBtn = document.getElementById("heartBtn");
const clickText = document.getElementById("clickText");
const heartsContainer = document.querySelector(".hearts-container");
const bgMusic = document.getElementById("bgMusic");

let isOpened = false;

// Click ONLY the heart button
heartBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isOpened) {
    envelope.classList.add("open");
    clickText.textContent = "A Romantic Letter For You 💖";
    createBurstHearts();

    // Auto play music after click
    bgMusic.play().catch((error) => {
      console.log("Music autoplay blocked:", error);
    });

    isOpened = true;
  }
});

// Floating hearts background
function createFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 4 + 4 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 400);
}

// Burst hearts on open
function createBurstHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = (window.innerWidth / 2 - 20 + Math.random() * 140 - 70) + "px";
    heart.style.bottom = "200px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 2 + 2 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

createFloatingHearts();