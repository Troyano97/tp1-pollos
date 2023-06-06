const selectCantMostrarProduc = document.querySelector("#cant-mostrar-productos");
const selectCantProducMax = document.querySelector("#cantidad-por-producto");
const selectColores = document.querySelector("#select-colores");

const divMostrarInfo = document.querySelector("#mostrar-info-seleccion");
const divMostrarProductos = document.querySelector("#mostrar-productos-selec");

function mostrarSeleccion() {
    cantProductSelec = (selectCantMostrarProduc.value);
    cantMaxProductos = (selectCantProducMax.value);
    coloresSeleccionados = (selectColores.value);

    divMostrarInfo.innerHTML = `
    <p> La cantidad de productos a mostrar es: ${cantProductSelec} </p>
    <p> La cantidad de productos permitidos por compra es: ${cantMaxProductos} </p>
    <p> Los colores seleccionados son: ${coloresSeleccionados} </p>
    `;
}
function mostrarProductos() {
    mostrarSeleccion();
}