/* c.Spell:Disable */

//Deconstruccion del Objeto Comercio
let { id, categoria, logo, nombre, direccion, horario, actividad } = tipoServicio;

//Agregando objetos al DOM
function insertarDom(arr) {
    
    arr.forEach((e) => {
        contComercios.innerHTML +=
        `<div class="cajaComercios">
            <div class="logo">
                <h3>${e.nombre}</h3
                <img src="${e.logo}">  
            </div>
            <div class="informacion">
                <span>${e.categoria}</span>
                <span>${e.direccion}</span>
                <span>${e.horario}</span>
            </div>
            <div class="descripcion">
                <textarea>${e.actividad}</textarea>
                <button id="contactar">Contactar</button>
            </div>
        </div>
        `
    });   
}

//Limpieza del Contenedor MAIN
let clearMain = _=> {
    let listaContenido = document.querySelectorAll(".cajaComercios");
    for(e of listaContenido){
        e.remove();
    }
}
