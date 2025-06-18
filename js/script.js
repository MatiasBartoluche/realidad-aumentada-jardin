window.addEventListener('DOMContentLoaded', () => {
    const modeloTierra = document.querySelector("#modeloTierra");
    const modeloLuna = document.querySelector("#modeloLuna");
    const modeloSol = document.querySelector("#modeloSol");

    const tierraSistema = document.querySelector("#tierraSistema");
    const lunaSistema = document.querySelector("#lunaSistema");
    const solSistema = document.querySelector("#solSistema");

    document.querySelector("#marcadorTierra").addEventListener("markerFound", () => {
        console.log("TIERRA detectada");
        modeloTierra.setAttribute("visible", "true");
        modeloLuna.setAttribute("visible", "false");
        modeloSol.setAttribute("visible", "false");
    });

    document.querySelector("#marcadorLuna").addEventListener("markerFound", () => {
        console.log("LUNA detectada");
        modeloLuna.setAttribute("visible", "true");
        modeloTierra.setAttribute("visible", "false");
        modeloSol.setAttribute("visible", "false");
    });

    document.querySelector("#marcadorSol").addEventListener("markerFound", () => {
        console.log("SOL detectada");
        modeloLuna.setAttribute("visible", "false");
        modeloTierra.setAttribute("visible", "false");
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
});