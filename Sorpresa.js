// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");
const abrirVideo = document.getElementById("abrirVideo");
const modalVideo = document.getElementById("modalVideo");
const cerrarVideo = document.getElementById("cerrarVideo");
const video = modalVideo.querySelector("video");

function abrirModal(modal) {
  modal.classList.add("activo");
}

function cerrarModal(modal) {
  modal.classList.remove("activo");
}

regalo.addEventListener("click", () => {
  abrirModal(modalCarta);
});

regalos.addEventListener("click", () => {
  abrirModal(modalCarta);
});

modalCarta.addEventListener("click", (event) => {
  if (event.target === modalCarta) {
    cerrarModal(modalCarta);
  }
});

abrirVideo.addEventListener("click", () => {
  abrirModal(modalVideo);
  video.play().catch(() => {});
});

abrirVideo.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    abrirModal(modalVideo);
    video.play().catch(() => {});
  }
});

cerrarVideo.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  cerrarModal(modalVideo);
});

modalVideo.addEventListener("click", (event) => {
  if (event.target === modalVideo) {
    video.pause();
    video.currentTime = 0;
    cerrarModal(modalVideo);
  }
});

// Todo Oscuro + Soplido + Canción
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

llama.addEventListener("click", () => {
  soplido.currentTime = 0;
  soplido.play();

  llama.style.animation = "apagar 0.5s forwards"; // forwards -> Ultimo frame (to)

  setTimeout(() => {
    cancion.currentTime = 0;
    cancion.play();
    overlay.classList.add("hidden");
  }, 1000);
});
