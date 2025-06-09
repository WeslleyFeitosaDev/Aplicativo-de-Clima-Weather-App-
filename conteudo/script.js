let chave_api="d0ea03ec240ab422be7eea7de28d4f4e";

let input_city=document.getElementById("input_city");
let bnt_verificar_cidade=document.getElementById("bnt_verificar_cidade");
let cidade=document.getElementById("cidade");
let weather=document.getElementById("weather");
let mensagem_error=document.getElementById("mensagem_error");

bnt_verificar_cidade.addEventListener("click",()=>{
    const city=input_city.value.trim();

    if(city == ""){
        mensagem_error.innerHTML="Digite alguma cidade no campo";
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${chave_api}&lang=pt_br&units=metric`)
        .then(response =>{
            if(!response.ok) throw new Error("Cidade não encontrada");
            return response.json();
        })
        .then(data => {
            const name=data.name;
            const temp=data.main.temp;
            const description=data.weather[0].description;
            const icon=data.weather[0].icon;

            cidade.innerHTML=`${name}`;
            weather.innerHTML=`${temp}°`;
            
        })
            
        

    
})