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


/*---------------------------------- animacion de las fases de la luna ---------------------------- */

    const orbita = document.querySelector("#orbitaLunaFases");
    const texto = document.querySelector("#faseTexto");

    let angle = 0;
    let paused = false;
    let animationFrameId = null;

    // por algun motivo, el modelo de la luna esta defasado y visualmente hace un angulo mayor a 90
    const fases = [
        { angulo: 0, nombre: "Cuarto creciente" },
        { angulo: 90, nombre: "Luna llena" },
        { angulo: 180, nombre: "Cuarto menguante" },
        { angulo: 270, nombre: "Luna nueva" }
    ];

  // Recorre continuamente
    function rotarLuna() {
        if (!paused) {
        angle = (angle + 1) % 360;
        // cambioel valor Y de la rotacion de la luna
        orbita.setAttribute("rotation", `0 ${angle} 0`);
        
            // Verifica si estamos cerca de una fase
            for (let fase of fases) {
                if (Math.abs(angle - fase.angulo) == 0) {
                // cambia el texto de la fase
                mostrarFase(fase.nombre);
                console.log('angulo: '+ angle);
                break;
                }
            }
        }
        animationFrameId = requestAnimationFrame(rotarLuna);
    }

  // Muestra el texto y pausa la rotación
    function mostrarFase(nombre) {
        paused = true;
        texto.setAttribute("value", nombre);
        texto.setAttribute("visible", "true");

        setTimeout(() => {
        texto.setAttribute("visible", "false");
        paused = false;
        }, 5000);
    }

/*----------------------------------- eventos fases de la luna ----------------------------------- */
    document.querySelector("#marcadorFases").addEventListener("markerFound", () => {
        console.log("Fases de la luna detectada");
        tierraFases.setAttribute("visible", "true");
        lunaFases.setAttribute("visible", "true");
        solFases.setAttribute("visible", "true");

        angle = 0;
        paused = false;
        rotarLuna();        
    });  

    document.querySelector("#marcadorFases").addEventListener("markerLost", () => {
        console.log("Fases de la luna ocultada");
        tierraFases.setAttribute("visible", "false");
        lunaFases.setAttribute("visible", "false");
        solFases.setAttribute("visible", "false");

        paused = true;
        texto.setAttribute("visible", "false");

        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    });
});