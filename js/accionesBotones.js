//c.spell:disable
//Botones

//Participar
participar.onclick = _=>{
    const modalParticipar = new bootstrap.Modal("#modalParticipar");
    modalParticipar.show();
}

btnGuardar_Participar.onclick = _=>{

    this.nombre = document.getElementById("inNombre").value;
    this.logo = document.getElementById("inLogo").value;
    this.categoria = document.getElementById("inCategoria").value;
    this.direccion = document.getElementById("inDireccion").value;
    this.horario = document.getElementById("inHorario").value;
    this.contacto = document.getElementById("inContacto").value;
    this.descripcion = document.getElementById("inDescripcion").value;
    
    let nuevaActividad = new actividad (nombre, logo, categoria, direccion, horario, contacto, descripcion);

    actividades.push(nuevaActividad);
}