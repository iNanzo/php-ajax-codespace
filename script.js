const quoteBox = document.getElementById("quote-box");
const button = document.getElementById("quote-btn");

const fonts = ["Raleway", "Roboto Mono", "Playfair Display"];

function getRandomQuote() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "random_quotes.php", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      quoteBox.classList.remove("visible");

      setTimeout(() => {
        quoteBox.textContent = xhr.responseText;

        const newFont = fonts[Math.floor(Math.random() * fonts.length)];
        quoteBox.style.fontFamily = `"${newFont}", sans-serif`;

        quoteBox.classList.add("visible");
      }, 250);
    } else {
      quoteBox.textContent = "Error loading quote.";
    }
  };

  xhr.onerror = function () {
    quoteBox.textContent = "Connection error.";
  };

  xhr.send();
}

// Run on page load
window.addEventListener("DOMContentLoaded", () => {
  getRandomQuote();
  setInterval(getRandomQuote, 5000);
});

// Manual refresh
button.addEventListener("click", getRandomQuote);
