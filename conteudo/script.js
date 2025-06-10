let chave_api="d0ea03ec240ab422be7eea7de28d4f4e";
let input_city=document.getElementById("input_city");
let bnt_verificar_cidade=document.getElementById("bnt_verificar_cidade");
let cidade=document.getElementById("cidade");
let weather=document.getElementById("weather");
let mensagem_error=document.getElementById("mensagem_error");
let bx_cloud_sun=document.getElementById("bx-cloud-sun");
let bx_badge_info=document.getElementById("bx-badge-info");

bnt_verificar_cidade.addEventListener("click",()=>{
    bx_cloud_sun.style.display="none";
    const city=input_city.value.trim();

    if(city == ""){
        mensagem_error.innerHTML="Digite alguma cidade no campo";
        return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${chave_api}&lang=pt_br&units=metric`)
        .then(Response =>{
            if(!Response.ok){
                mensagem_error.innerHTML="Cidade não encontrada";
                mensagem_error.classList.add("mensagem_error_cidade_n_encontrada");
                bx_badge_info.style.display="flex";
                cidade.innerHTML = "";
                weather.innerHTML = "";

            }else{
                mensagem_error.innerHTML=""
                mensagem_error.classList.remove("mensagem_error_cidade_n_encontrada");
                bx_badge_info.style.display="none";
            }
            return Response.json();
        })
        .then(data => {
            
            const name=data.name;
            const temp=data.main.temp;
            const description=data.weather[0].description;
            const icon=data.weather[0].icon;

            cidade.innerHTML=`${name}`;
            weather.innerHTML=`${temp}°`;
            
        })
    
    input_city.value="";

    
})