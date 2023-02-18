//c.Spell:Disable
//Construccion del objeto Negocio
class actividad {
    constructor (id,nombre,logo,categoria,direccion,horario,contacto,descripcion){
        this.id = Number(id);
        this.nombre = nombre.toUpperCase();
        this.logo = logo;
        this.categoria = categoria;
        this.direccion = direccion.toUpperCase();
        this.horario = horario;
        this.contacto = Number(contacto);
        this.descripcion = descripcion;
        
        }
    }

    