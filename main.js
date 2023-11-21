// Pom ...............................................
function tocaSomPom (iDElementoAudio) {
    document.querySelector(iDElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
(let contador = 0; contador < listaDeTeclas.leight; contador++)

//enquanto
while (contador < listaDeteclas.leight) {
    listaDeTeclas[0].onclick = tocaSomPom;

      contador = contador + 1;

      console.log(contador);
}