window.addEventListener('DOMContentLoaded', () => {
    const modeloTierra = document.querySelector("#modeloTierra");
    const modeloLuna = document.querySelector("#modeloLuna");
    const modeloSol = document.querySelector("#modeloSol");

    const infoTierra = document.querySelector("#infoTierra");
    const infoLuna = document.querySelector("#infoLuna");
    const infoSol = document.querySelector("#infoSol");

    const tierraSistema = document.querySelector("#tierraSistema");
    const lunaSistema = document.querySelector("#lunaSistema");
    const solSistema = document.querySelector("#solSistema");

    const tierraFases = document.querySelector("#tierraFases");
    const lunaFases = document.querySelector("#lunaFases");
    const solFases = document.querySelector("#solFases");

/*-------------------------------- Eventos Tierra ----------------------------------------*/
    document.querySelector("#marcadorTierra").addEventListener("markerFound", () => {
        console.log("TIERRA detectada");
        modeloTierra.setAttribute("visible", "true");
        infoTierra.setAttribute("visible", "true");
    });

    document.querySelector('#marcadorTierra').addEventListener('markerLost', () => {
        console.log("TIERRA ocultada");
        modeloTierra.setAttribute("visible", "false");
        infoTierra.setAttribute("visible", "false");
    });

/*-------------------------------- eventos luna ------------------------------------------ */
    document.querySelector("#marcadorLuna").addEventListener("markerFound", () => {
        console.log("LUNA detectada");
        modeloLuna.setAttribute("visible", "true");
        infoLuna.setAttribute("visible", "true");
    });

    document.querySelector('#marcadorLuna').addEventListener('markerLost', () => {
        console.log("LUNA ocultada");
        modeloLuna.setAttribute("visible", "false");
        infoLuna.setAttribute("visible", "false");
    });

/*-------------------------------- eventos sol -------------------------------------------- */    
    document.querySelector("#marcadorSol").addEventListener("markerFound", () => {
        console.log("SOL detectada");
        modeloSol.setAttribute("visible", "true");
        infoSol.setAttribute("visible", "true");
    });

    document.querySelector('#marcadorSol').addEventListener('markerLost', () => {
        console.log("SOL ocultada");
        modeloSol.setAttribute("visible", "false");
        infoSol.setAttribute("visible", "false");
    });

/*--------------------------------- eventos sistema ----------------------------------------- */
    document.querySelector("#marcadorSistema").addEventListener("markerFound", () => {
        console.log("SISTEMA detectado");
        tierraSistema.setAttribute("visible", "true");
        lunaSistema.setAttribute("visible", "true");
        solSistema.setAttribute("visible", "true");
    });

    document.querySelector("#marcadorSistema").addEventListener("markerLost", () => {
        console.log("SISTEMA detectado");
        tierraSistema.setAttribute("visible", "false");
        lunaSistema.setAttribute("visible", "false");
        solSistema.setAttribute("visible", "false");
    });
/*----------------------------------- eventos fases de la luna ----------------------------------- */
    document.querySelector("#marcadorFases").addEventListener("markerFound", () => {
        console.log("Fases de la luna detectada");
        tierraFases.setAttribute("visible", "true");
        lunaFases.setAttribute("visible", "true");
        solFases.setAttribute("visible", "true");
    });  

    document.querySelector("#marcadorFases").addEventListener("markerLost", () => {
        console.log("Fases de la luna ocultada");
        tierraFases.setAttribute("visible", "false");
        lunaFases.setAttribute("visible", "false");
        solFases.setAttribute("visible", "true");
    });  
});