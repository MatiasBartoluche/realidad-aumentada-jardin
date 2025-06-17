window.addEventListener('DOMContentLoaded', () => {
    const modeloTierra = document.querySelector("#modeloTierra");
    const modeloLuna = document.querySelector("#modeloLuna");
    const modeloSol = document.querySelector("#modeloSol");

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

});

