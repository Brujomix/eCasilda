/* c.Spell:Disable */

//Deconstruccion del Objeto Comercio
let { id, categoria, logo, nombre, direccion, horario, actividad } = comercio;

//Listado de Negocios
let listaNegocios = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Negocio", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Negocio", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Negocio", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Negocio", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaTiendas = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Tienda", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Tienda", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Tienda", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Tienda", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaFarmacias = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Farmacia", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Farmacia", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Farmacia", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Farmacia", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaKioscos = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Kioscos", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Kioscos", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Kioscos", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Kioscos", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaVeterinarias = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Veterinaria", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Veterinaria", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Veterinaria", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Veterinaria", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaRotiserias = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Rotiseria", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Rotiseria", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Rotiseria", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Rotiseria", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaServiciosP = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];

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
