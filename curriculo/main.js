function typeWriter(elemento){

const textoArray = elemento.innerHTML.split("");
console.log(textoArray)

elemento.innerHTML = "";

textoArray.forEach((letra, i) => {

    setTimeout(() => elemento.innerHTML += letra , 200 * i);

    });
}

const titulo = document.querySelector('.maquinaDeEscrever');
typeWriter(titulo);