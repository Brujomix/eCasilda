//let btnNegocios = document.querySelector("#btnNegocios");
btnNegocios.onclick = () => {
    clearMain();
    insertarDom(listaNegocios);
}
btnTiendas.onclick = () => {
    clearMain();
    insertarDom(listaTiendas);
}
btnFarmacias.onclick = () => {
    clearMain();
    insertarDom(listaFarmacias);
}
btnKioscos.onclick = () => {
    clearMain();
    insertarDom(listaKioscos);
}
btnVeterinarias.onclick = () => {
    clearMain();
    insertarDom(listaVeterinarias);
}
btnRotiserias.onclick = () => {
    clearMain();
    insertarDom(listaRotiserias);
}
btnServiciosP.onclick = () => {
    clearMain();
    insertarDom(listaServiciosP);
}