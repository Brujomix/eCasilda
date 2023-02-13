//cSpell:disable
//Arrays y metodos de Comercios

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
let listaVerdulerias = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Negocio", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Negocio", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Negocio", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Negocio", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaPanaderias = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Kioscos", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Kioscos", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Kioscos", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Kioscos", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaCarnicerias = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Veterinaria", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Veterinaria", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Veterinaria", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Veterinaria", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaFerreterias = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Rotiseria", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Rotiseria", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Rotiseria", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Rotiseria", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaPolirubros = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaJugueterias = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
let listaKioscoAlmacenes = [
    { id: 1, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 3520", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 2, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 2875", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 3, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 6545", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
    { id: 4, categoria: "Categoria", logo:"imgs/twiter-bk.png", nombre: "Nombre Oficio", direccion: "Casilda 1234", horario: "8 a 12", actividad: "Descripcion de la actividad que desarrolla" },
];
