// ===============================
// SCRIPT.JS – Funções interativas
// ===============================

// Exemplo de alerta inicial
document.addEventListener("DOMContentLoaded", () => {
  console.log("Treino da Patrícia carregado com sucesso 💪");
});

// Opcional: efeito suave de rolagem entre seções
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
