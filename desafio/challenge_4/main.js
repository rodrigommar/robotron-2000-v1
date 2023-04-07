const lista = document.querySelector("ul");

function mostraTintas(){
  document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});
}

function ocultaTintas(){
  document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});
}
