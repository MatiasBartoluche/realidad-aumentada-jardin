window.addEventListener('DOMContentLoaded', () => {

    openSidebar();
    closeSidebar();

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', ()=>{
            closeSidebar();
        });
    });
});

const navbar = document.getElementById('navbar');

function openSidebar(){
    navbar.classList.add('show');
}

function closeSidebar(){
    navbar.classList.remove('show');
}