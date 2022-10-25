/* Buscando documento no html */

const menu = document.querySelector('.menu');
const navmenu = document.querySelector ('.navmenu');

/* Aplicando efeito no bar  */
menu.addEventListener('click', () =>{
    menu.classList.toggle('ativo');
    navmenu.classList.toggle('ativo');
})