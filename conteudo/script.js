let chave_api="d0ea03ec240ab422be7eea7de28d4f4e";

let input_city=document.getElementById("input_city");
let bnt_verificar_cidade=document.getElementById("bnt_verificar_cidade");
let cidade=document.getElementById("cidade");
let weather=document.getElementById("weather");
let mensagem_error=document.getElementById("mensagem_error");

bnt_verificar_cidade.addEventListener("click",()=>{
    const city=bnt_verificar_cidade.ariaValueMax.trim();

    if(city == ""){
        mensagem_error.innerHTML="Digite alguma cidade no campo";
    }
})