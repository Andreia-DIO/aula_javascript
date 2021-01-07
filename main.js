
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"; 
    elemento.innerHTML = "Passe o mouse aqui"; 
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n2){
    return n1 + n2;
}
  
var validar = 0;
function validaidade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade")
console.log(validaidade(idade));
*/
//alert(soma(5, 10));

/*
var d = new Date();
alert(d.getDay()+1);
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade");
if(idade >=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

var lista = ["maça", "pera", "laranja"];
lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString);
//console.log(lista.join(" - "));

//alert(lista);

//var nome = "Andreia Nascimento";
//var idade = "38";
//var idade2 = "10";
//var frase = "Japao é o melhor time do mundo";
//alert(nome + "tem" + idad + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLowerCase("Japao", "Brasil"));
//alert(frase.replace("Japao", "Brasil"));
