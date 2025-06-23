window.addEventListener('DOMContentLoaded', () => {

    openSidebar();
    closeSidebar();

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', ()=>{
            closeSidebar();
        });
    });

   const titulo = document.getElementById("titulo");
   const alturaTitulo = parseInt(titulo.offsetHeight);
   console.log(alturaTitulo); // Imprime la altura del elemento en píxeles

   const botonMenu = document.getElementById("open-sidebar-button");
   botonMenu.style.top = alturaTitulo+'px';
});

const navbar = document.getElementById('navbar');

function openSidebar(){
    navbar.classList.add('show');
}

function closeSidebar(){
    navbar.classList.remove('show');
}