/* c.Spell:Disable */
//Get DataBase
let actividades = [
    {id:1,nombre:"Comercio 1",logo:"imgs/bts.png",categoria:"comercio",direccion:"direccion 123456",horario:"8 a 12",contacto:12345678,descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis corrupti illo quis dolores, nisi asperiores eaque qui modi facilis aut adipisci sequi, aspernatur architecto."},
    {id:2,nombre:"Comercio 2",logo:"imgs/Halal.png",categoria:"servicio",direccion:"direccion 987654",horario:"8 a 16",contacto:12345678,descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis corrupti illo quis dolores, nisi asperiores eaque qui modi facilis aut adipisci sequi, aspernatur architecto."},
    {id:2,nombre:"Comercio 2",logo:"imgs/macStore.png",categoria:"servicio",direccion:"direccion 987654",horario:"8 a 16",contacto:12345678,descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis corrupti illo quis dolores, nisi asperiores eaque qui modi facilis aut adipisci sequi, aspernatur architecto."},
    {id:2,nombre:"Comercio 2",logo:"imgs/roseChampagne.png",categoria:"servicio",direccion:"direccion 987654",horario:"8 a 16",contacto:12345678,descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perferendis corrupti illo quis dolores, nisi asperiores eaque qui modi facilis aut adipisci sequi, aspernatur architecto."}
];


const getDB = async()=>{
    const respuesta = await
    fetch("data/actividades.json")
    const data = await respuesta.json();
    actividades = data;
    console.log(actividades);
}
//getDB();

//Deconstruccion del Objeto Comercio
let { id, nombre, logo, categoria, direccion, horario, contacto, descripcion } = actividad;

//Agregando objetos al DOM
function insertarDom(arr) {

    let contComercios = document.querySelector("#contActividades");
    arr.forEach((e) => {
        contComercios.innerHTML +=
        `<div class="cajaComercios">
            <div class="logo">
                <h1>${e.nombre}</h1>
                <img src="${e.logo}">  
            </div>
            <div class="informacion">
                <h2>${e.categoria}</h2>
                <span>${e.direccion}</span>
                <span>${e.horario}</span>
                <span>${e.contacto}</span>
                <div>
                    <a href="https://web.whatsapp.com/" target="black" id="contactar">
                        <img src="imgs/wsp-verde-3.png" style="width:37px">
                    </a>
                </div>
            </div>
            <div class="descripcion p-1">           
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Descripcion
                    </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <p class="text-center scroll=true p-1">${e.descripcion}</p>
                        </ul>
                </div>
            </div>
                
        </div>
        `
    });   
}
insertarDom(actividades);

//Limpieza del Contenedor MAIN
let clearMain = _=> {
    let listaContenido = document.querySelectorAll(".cajaComercios");
    for(e of listaContenido){
        e.remove();
    }
}
