let counts = setInterval(updated);
const count = document.getElementById("clientCount");

let upto = 0;
function updated() {
  count.innerHTML = ++upto;
  if (upto === 100) {
    clearInterval(counts);
  }
}
