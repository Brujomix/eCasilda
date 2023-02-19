//c.spell:disable
//Declaracion de funciones

//Limpiar Visualizador
function updateActividades(){
    let el = document.querySelectorAll(".lista");
    el.forEach((e) => {
        e.remove();
    });
}

//Participar
function nuevaActividad(arr){
    
    nombre = document.getElementById("inNombre").value;
    categoria = document.getElementById("inCategoria").value;
    logo = document.getElementById("inLogo").value;
    direccion = document.getElementById("inDireccion").value;
    horario = document.getElementById("inHorario").value;
    contacto = document.getElementById("inContacto").value;
    descripcion = document.getElementById("inDescripcion").value;
    
    let obj = new actividad(nombre,logo,categoria,direccion,horario,contacto,descripcion);
    console.log(obj);

    arr.push(obj);
}

//Buscar
function buscar(arr) {
    let valor = document.getElementById("inBusqueda").value;
    let encontrados = arr.filter((e)=> 
        e.nombre.includes(`${valor}`)
    );
    insertarDom(encontrados);
}



