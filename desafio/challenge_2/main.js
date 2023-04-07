const somar = document.querySelector("#calcular")
const resultado = document.querySelector("#resultado")


somar.addEventListener("click",function (event){
    resultado.value = parseInt(resultado.value) + 1;
})


