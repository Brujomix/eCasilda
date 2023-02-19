//c.Spell:Disable
//Construccion del objeto Negocio
class actividad {
    constructor (nombre,logo,categoria,direccion,horario,contacto,descripcion){
        this.nombre = nombre.toUpperCase();
        this.logo = logo;
        this.categoria = categoria;
        this.direccion = direccion.toUpperCase();
        this.horario = horario;
        this.contacto = Number(contacto);
        this.descripcion = descripcion;
        
        }
    }

    