/* c.Spell:Disable */
//Carga lista Actividades
window.addEventListener("load", _=>{
    insertarDom(actividades);
});

let actividades = [
    {nombre:"BTS",logo:"../imgs/bts.png",categoria:"Servicio",direccion:"Bv.O.Lagos 2056",horario:"8 a 12 - 16 a 20",contacto:12345678,descripcion:"Servicio de Venta de Inmuebles"},
    {nombre:"Bar Halai",logo:"../imgs/Halal.png",categoria:"Comercio",direccion:"Medoza 7654",horario:"7 a 00",contacto:12345678,descripcion:"Bar de comidas y tragos"},
    {nombre:"Mc Store",logo:"../imgs/macStore.png",categoria:"Servicio",direccion:"Bv.BsAs 1654",horario:"8 a 12 - 16 - 20",contacto:12345678,descripcion:"Servicio de Mac Store, Venta de Equipos Apple"},
    {nombre:"Catering",logo:"../imgs/roseChampagne.png",categoria:"Servicio",direccion:"Sarmiento 654",horario:"8 a 16",contacto:12345678,descripcion:"Servicio de Catering"}
];

//Get DataBase
//let actividades;
const getDB = async()=>{
    const respuesta = await
    fetch("data/actividades.json")
    let data = await respuesta.json();
    actividades = data;
    console.log(data);
    console.log(actividades);
}

localStorage.setItem("actividades", JSON.stringify(actividades));

//Deconstruccion del Objeto Comercio
let {nombre, logo, categoria, direccion, horario, contacto, descripcion } = actividad;

//Agregando objetos al DOM
function insertarDom(arr) {

    listaActividades = document.createElement("div");
    listaActividades.setAttribute("class", "lista");
    
    arr.forEach((e) => {
        listaActividades.innerHTML +=
        `
        <div class="cajaComercios">
            <div>
                <h1>${e.nombre}</h1>
            </div>
            <div class="informacionCards">
                <img src="${e.logo}">  
                <h2>${e.categoria}</h2>
                <span>${e.direccion}</span>
                <span>${e.horario}</span>
                
                <div class="dropdown">
                    <img class="dropdown-toggle" data-bs-toggle="dropdown" src="../imgs/wsp-verde-3.png" style="width:37px">
                    <div class="p-2 dropdown-menu">
                        <span class="invisible">${e.contacto}</span>
                        <textarea id="mensajeWsp" placeholder="Envia un mensaje"></textarea>
                        <button class="btn btn-success" id="btnEnviar">Enviar</button>
                    </div>   
                </div>

                <div class="descripcion p-1">           
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Actividad
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <p class="text-center scroll=true p-1">${e.descripcion}</p>
                        </ul>
                    </div>
            </div>
        </div>      
        `
    });  
    document.querySelector(".cajaActividades").appendChild(listaActividades)
}

//Limpieza del Contenedor MAIN
let clearMain = _=> {
    let listaContenido = document.querySelectorAll(".cajaComercios");
    for(e of listaContenido){
        e.remove();
    }
}
