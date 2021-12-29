//INPUTS

//pegando as informaçoes dos inputs
let inputAdultos = document.getElementById("nadultos");
let inputCriancas = document.getElementById("ncriancas");
let inputDuracao = document.getElementById("duracao");


//BOTOES E RESULTADO

//declarando a variavel resultado
var resultado = document.getElementById("resultado");
//declarando o botao do evento calcula
var btn = document.getElementById("btn");
//declarando o botao do evento dark mode
var btnDark = document.getElementById("darkMode");
//capturando o elemento body
var body = document.body;

//Liga/Desliga - Darkmode
var Value_ = 0;


//EVENTOS

//adicionando os eventos aos botoes ao clicar
btn.addEventListener("click", calcular);
btnDark.addEventListener("click", darkMode);


//FUNCOES

//Calculo dos recursos
function calcular() {
  let duracao = inputDuracao.value;
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;

  let qdtTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) * criancas) / 2;
  let qdtTotalBebida =
    bebidaPP(duracao) * adultos + (bebidaPP(duracao) * criancas) / 2;
  let qdtTotalCerveja = cervejaPP(duracao) * adultos;

  resultado.innerHTML = `<span><img src="../Assets/carne.png" alt="carne">${qdtTotalCarne / 1000} kg de carne </span>`;
  resultado.innerHTML += `<span><img src="../Assets/garrafa-de-cerveja.png" alt="Bebidas">${Math.ceil(qdtTotalBebida / 2000)} garrafa(s) de bebida </li>`;
  resultado.innerHTML += `<span><img src="../Assets/cerveja.png" alt="cervejas">${Math.ceil(qdtTotalCerveja / 350)} lata(s) de cerveja </span>`;
}

function carnePP(hrs) {
  if (hrs > 6) {
    return 650;
  } else {
    return 400;
  }
}
function bebidaPP(hrs) {
  if (hrs > 6) {
    return 1500;
  } else {
    return 1000;
  }
}
function cervejaPP(hrs) {
  if (hrs > 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function darkMode() {
  //Modo escuro
  if (Value_ == 0) {
    console.log(Value_);
    Value_= 1;
    body.style = "background-color:black; color:white";
    document.getElementById("formContainer").style = "background-image: linear-gradient(45deg, #3a0101, red);";
    document.getElementById("btn").style = "color:white"
  } 
  //Modo claro
  else if (Value_ == 1) {
    console.log(Value_);
    Value_ = 0;
    body.style = "background-color:white; color:black";
    document.getElementById("formContainer").style = "background-image: linear-gradient(45deg, #751f1f, red);";
    document.getElementById("btn").style = "color:black"
  }
}

//Carne  - 400gr por pessoa + de 6horas - 650
//Cerveja - 1200 ml por pessoa adulta + de 6 horas - 2000 ml
//Refrigerante/agua - 1000 ml por pessoa + de 6 horas - 1500 ml

//crianças valem por 0,5  ou 1/2

// resultado.innerHTML = `<p>${qdtTotalCarne/1000}kg de Carne</p>`;
