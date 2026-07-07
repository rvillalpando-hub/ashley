// Carta
 const regalo = document.getElementById("regalo");
  const regalos = document.querySelector(".regalos");
  const modalCarta = document.getElementById("modalCarta");
  const abrirVideo = document.getElementById("abrirVideo");
  const modalVideo = document.getElementById("modalVideo");
  const cerrarVideo = document.getElementById("cerrarVideo");
  const video = modalVideo.querySelector("video");
  const cancion = document.getElementById("cancion");
  const overlay1 = document.getElementById("overlay1");
  const soplido = document.getElementById("soplido");
  const llama = document.getElementById("llama");
  const overlay = document.getElementById("overlay");

  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 3000);

  let videoStarted = false;

  function abrirModal(modal) {
    modal.classList.add("activo");
    document.body.style.overflow = 'hidden';
  }

  function cerrarModal(modal) {
    modal.classList.remove("activo");
    document.body.style.overflow = '';
  }

  // Abrir carta
  regalo.addEventListener("click", () => abrirModal(modalCarta));
  regalos.addEventListener("click", () => abrirModal(modalCarta));

  // Cerrar carta
  document.getElementById("cerrarCarta").addEventListener("click", (e) => {
    e.stopPropagation();
    cerrarModal(modalCarta);
  });

  modalCarta.addEventListener("click", (event) => {
    if (event.target === modalCarta) cerrarModal(modalCarta);
  });


abrirVideo.addEventListener("click", () => {
  abrirModal(modalVideo);
     if (!cancion.paused) cancion.pause();
    
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

  // Soplido - MEJORADO
  llama.addEventListener("click", () => {
    soplido.currentTime = 0;
    soplido.play();
    llama.style.animation = "apagar 0.6s forwards";
    setTimeout(() => {
      cancion.currentTime = 0;
      cancion.play().catch(() => console.log("La música no pudo reproducirse automáticamente"));
      overlay1.classList.add("hidden");
    }, 1000);
  });

  // Soporte para teclado
  llama.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      llama.click();
    }
  });

