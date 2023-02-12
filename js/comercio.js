/* cSpell:Disable */
class comercio {
    constructor (id,categoria,logo,nombre,direccion,horario,actividad){
        this.id = Number(id);
        this.categoria = categoria.toUpperCase();
        this.logo = logo;
        this.nombre = nombre.toUpperCase();
        this.direccion = direccion.toUpperCase();
        this.horario = horario;
        this.actividad = actividad;
    }
}
