window.addEventListener('DOMContentLoaded', () => {
    const modeloTierra = document.querySelector("#modeloTierra");
    const modeloLuna = document.querySelector("#modeloLuna");
    const modeloSol = document.querySelector("#modeloSol");

    const tierraSistema = document.querySelector("#tierraSistema");
    const lunaSistema = document.querySelector("#lunaSistema");
    const solSistema = document.querySelector("#solSistema");

/*-------------------------------- mostrar modelos de planetas ----------------------------------------*/
    document.querySelector("#marcadorTierra").addEventListener("markerFound", () => {
        console.log("TIERRA detectada");
        modeloTierra.setAttribute("visible", "true");
    });

    document.querySelector("#marcadorLuna").addEventListener("markerFound", () => {
        console.log("LUNA detectada");
        modeloLuna.setAttribute("visible", "true");
    });

    document.querySelector("#marcadorSol").addEventListener("markerFound", () => {
        console.log("SOL detectada");
        modeloSol.setAttribute("visible", "true");
    });

    document.querySelector("#marcadorSistema").addEventListener("markerFound", () => {
        console.log("SISTEMA detectado");
        tierraSistema.setAttribute("visible", "true");
        lunaSistema.setAttribute("visible", "true");
        solSistema.setAttribute("visible", "true");
    });

    document.querySelector("#marcadorFases").addEventListener("markerFound", () => {
        console.log("Fases de la luna detectada");
    });  
/*------------------------------------------------------------------------------------------------------*/
    

/*--------------------------------- ocultar modelos de planetas ----------------------------------------*/
    document.querySelector('#marcadorTierra').addEventListener('markerLost', () => {
        console.log("TIERRA ocultada");
        modeloTierra.setAttribute("visible", "false");
    });

    document.querySelector('#marcadorLuna').addEventListener('markerLost', () => {
        console.log("LUNA ocultada");
        modeloLuna.setAttribute("visible", "false");
    });

    document.querySelector('#marcadorSol').addEventListener('markerLost', () => {
        console.log("SOL ocultada");
        modeloSol.setAttribute("visible", "false");
    });

    document.querySelector("#marcadorSistema").addEventListener("markerLost", () => {
        console.log("SISTEMA oculto");
        tierraSistema.setAttribute("visible", "false");
        lunaSistema.setAttribute("visible", "false");
        solSistema.setAttribute("visible", "false");
    });

    document.querySelector("#marcadorFases").addEventListener("markerLost", () => {
        console.log("Fases de la luna ocultada");
    });  
});