
let amigo = [];

function adicionar() {
let addAmigos = document.getElementById('nome-amigo');
if(addAmigos.value == ''){
    alert('Informe o nome do amigo!');
    return;
}
//proximo passo = converter o nome para maiusculo antes de guardar no arra
if(amigo.includes(addAmigos.value)){
    alert('Nome ja adicionado!');
    return;
}

let lista = document.getElementById('lista-amigos');

 amigo.push(addAmigos.value);

 if(lista.textContent == ''){
    lista.textContent = addAmigos.value;
 } else{
    lista.textContent = lista.textContent + ', ' + addAmigos.value;
 }
 addAmigos.value = '';
}

function sortear(){
if(amigo.length < 4){
alert('Adicione pelo menos 4 pessoas');
return;
}
    embaralhar(amigo);

let sorteio = document.getElementById('lista-sorteio');
    for(let i = 0; i < amigo.length; i++){
        if (i == amigo.length -1){
            sorteio.innerHTML = sorteio.innerHTML + amigo[i] + '-->' + amigo[0] + '<br/>';
     }   else{
         sorteio.innerHTML = sorteio.innerHTML + amigo[i] + '-->' + amigo[i + 1] + '<br/>';
    }
}
 

}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigo = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
