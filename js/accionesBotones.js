//c.spell:disable

//Participar
participar.onclick = _=>{
    const modalParticipar = new bootstrap.Modal("#modalParticipar");
    modalParticipar.show();
}
btnGuardar_Participar.onclick = _=>{
    nuevaActividad(actividades);
    updateActividades();
    insertarDom(actividades);
}

//Buscar Nombre Comercio
iniciarBusqueda.onclick = () => {
    updateActividades();
    buscar(actividades);
    document.getElementById("inBusqueda").value = "";
}

//Mostrar Todos
mostrarTodos.onclick = _=> {
    updateActividades();
    insertarDom(actividades);
};
