const selectCantMostrarProduc = document.querySelector("#cant-mostrar-productos");
const selectCantProducMax = document.querySelector("#cantidad-por-producto");
const selectColores = document.querySelector("#select-colores");

const divMostrarInfo = document.querySelector("#mostrar-info-seleccion");
const divMostrarProductos = document.querySelector("#mostrar-productos-selec");

const PRODUCTOS = [
    {
        nombre: 'Pollo en salsa',
        imagen: 'https://www.divinacocina.es/wp-content/uploads/pollo-agridulce-salsa.jpg'
    },{
        nombre: 'Pollo frito',
        imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2019/11/pollo-frito.jpg'
    },{
        nombre: 'Hamburgesa de pollo',
        imagen: 'https://cdn.cookmonkeys.es/recetas/medium/hamburguesa-de-pollo-1-13554.jpg'
    },{
        nombre: 'Hamburgesa de pollo frito',
        imagen: 'https://www.antojoentucocina.com/wp-content/uploads/2021/03/hamburguesa-pollo-frito-4-500x500.jpg'
    },{
        nombre: 'Waffles con pollo frito',
        imagen: 'https://chefcompass.com/wp-content/uploads/Recetas/pollomiel.jpg'
    },{
        nombre: 'Pollo frito con papas fritas',
        imagen: 'https://img.freepik.com/fotos-premium/pollo-frito-papas-fritas-nuggets_1339-122665.jpg'
    },{
        nombre: 'Balde de pollo frito',
        imagen: 'https://i.pinimg.com/736x/43/82/22/4382227ac4a0c3177a9dc09db27850e8.jpg'
    },{
        nombre: 'Alitas de pollo picante',
        imagen: 'https://static.onecms.io/wp-content/uploads/sites/21/2014/09/04/b8b86683-aa45-4419-9e1f-c785e7bdc35d.jpg'
    },{
        nombre: 'Pollo con papas fritas y ketchup',
        imagen: 'https://thumbs.dreamstime.com/b/patas-de-pollo-crujientes-con-patatas-fritas-y-ketchup-aisladas-en-fondo-blanco-185063274.jpg'
    },{
        nombre: 'Salteado de pollo',
        imagen: 'https://content-cocina.lecturas.com/medio/2018/07/19/salteado-de-arroz-con-pollo-y-verduras_51c8e822_800x800.jpg'
    } 

]


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