exibirTexto ('h1', 'digite o valor do capacitor:');
exibirTexto ('p', 'para saber qual a sua capacitância mínima tolerável em 20%');
let listaDeCapacitores = [];

function calcular(){
    let valorInserido = document.querySelector('input').value; 
    listaDeCapacitores.push (Number (valorInserido));
    let capacitanciaTotal = listaDeCapacitores.reduce((acumulador, valorAtual) => acumulador + valorAtual);
    let toleranciaDoCapacitor = capacitanciaTotal - capacitanciaTotal * 0.2;

    exibirTexto ('p', '');
    exibirTexto ('h1', `o valor mínimo tolerável de um capacitor de ${capacitanciaTotal}uF é ${toleranciaDoCapacitor}uF`)

    document.querySelector('input').value = '';
    listaDeCapacitores = [];
}

function exibirTexto (tag,titulo){
    let texto = document.querySelector(tag);
    texto.innerHTML = titulo;
}

function recomecar (){
    exibirTexto ('h1', 'digite o valor do capacitor:');
    exibirTexto ('p', 'para saber qual a sua tolerância em 20%');    

    valorInserido = document.querySelector('input');
    valorInserido.value = ''

    listaDeCapacitores = [];
}

function adicionarCapacitor (){
    let valorInserido = document.querySelector('input').value; 
    listaDeCapacitores.push (Number (valorInserido));
    let capacitanciaTotal = listaDeCapacitores.reduce((acumulador, valorAtual) => acumulador + valorAtual);

    exibirTexto ('h1', `Somando capacitores, insira o valor que deseja adicionar`);
    exibirTexto ('p', `Valor atual: ${capacitanciaTotal}`);

    document.querySelector('input').value = ''
}   