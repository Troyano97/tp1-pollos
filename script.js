const selectCantMostrarProduc = document.querySelector("#cant-mostrar-productos");
const selectCantProducMax = document.querySelector("#cantidad-por-producto");
const selectColores = document.querySelector("#select-colores");

const divMostrarInfo = document.querySelector("#mostrar-info-seleccion");
const divMostrarProductos = document.querySelector("#mostrar-productos-selec");

/* Productos a la venta y su foto */

const PRODUCTOS = [
    {
        nombre: 'Pollo frito',
        imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2019/11/pollo-frito.jpg'
    }, {
        nombre: 'Pollo con salsa agridulce',
        imagen: 'https://www.divinacocina.es/wp-content/uploads/pollo-agridulce-salsa.jpg'
    }, {
        nombre: 'Hamburgesa de pollo',
        imagen: 'https://cdn.cookmonkeys.es/recetas/medium/hamburguesa-de-pollo-1-13554.jpg'
    }, {
        nombre: 'Hamburgesa de pollo frito',
        imagen: 'https://www.antojoentucocina.com/wp-content/uploads/2021/03/hamburguesa-pollo-frito-4-500x500.jpg'
    }, {
        nombre: 'Waffles con pollo frito',
        imagen: 'https://chefcompass.com/wp-content/uploads/Recetas/pollomiel.jpg'
    }, {
        nombre: 'Pollo frito con papas fritas',
        imagen: 'https://img.freepik.com/fotos-premium/pollo-frito-papas-fritas-nuggets_1339-122665.jpg'
    }, {
        nombre: 'Balde de pollo frito',
        imagen: 'https://i.pinimg.com/736x/43/82/22/4382227ac4a0c3177a9dc09db27850e8.jpg'
    }, {
        nombre: 'Alitas de pollo picante',
        imagen: 'https://static.onecms.io/wp-content/uploads/sites/21/2014/09/04/b8b86683-aa45-4419-9e1f-c785e7bdc35d.jpg'
    }, {
        nombre: 'Patas de pollo',
        imagen: 'https://thumbs.dreamstime.com/b/patas-de-pollo-crujientes-con-patatas-fritas-y-ketchup-aisladas-en-fondo-blanco-185063274.jpg'
    }, {
        nombre: 'Salteado de pollo',
        imagen: 'https://content-cocina.lecturas.com/medio/2018/07/19/salteado-de-arroz-con-pollo-y-verduras_51c8e822_800x800.jpg'
    }

]

/* Toma los valores recibidos y los muestra al usuario */

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

/* Muestra los productos junto a las opciones de pago y la cantidad */

function mostrarProductos() {

    divMostrarProductos.innerHTML = "";
    const cantidadProductos = parseInt(selectCantMostrarProduc.value);

    for (let p = 0; p < cantidadProductos; p++) {

        productos = PRODUCTOS[p];

        let opcionCantidad = "";
        const cantidadMaxPermitida = parseInt(selectCantProducMax.value);

        for (let c = 1; c <= cantidadMaxPermitida; c++) {
            opcionCantidad += `<option value="${c}">${c}</option>`;
        }
        divMostrarProductos.innerHTML += `
        <div class="producto">
        <h3>${productos.nombre}</h3>
        <img src="${productos.imagen}" alt="Producto ${p}">
        <p>Opciones de pago:</p>
        <select>
          <option value="1">Efectivo</option>
          <option value="2">Débito</option>
          <option value="3">Crédito</option>
        </select>
        <p>Seleccione Cantidad </p>
        <select>
        ${opcionCantidad}
        </select>
        <br>
        <button >Comprar</button>
        </div>`;
    }
}

function cambiarColorProducto() {
    const divMostrarProductos = document.getElementsByClassName('producto');

    for (let i = 0; i < divMostrarProductos.length; i++) {
        const producto = divMostrarProductos[i];
        const numPar = (i + 1) % 2 === 0;

        switch (selectColores.value) {
            case "ninguno":
                if (numPar) {
                    producto.style.backgroundColor = "#1D3BF6";
                } else {
                    producto.style.backgroundColor = "#1DDEF6";
                }
                break;
            case "naranja-rojo":
                if (numPar) {
                    producto.style.backgroundColor = "#FA201A";
                } else {
                    producto.style.backgroundColor = "#FB7E1C";
                }
                break;
            case "blanco-violeta":
                if (numPar) {
                    producto.style.backgroundColor = "#6214F9";
                } else {
                    producto.style.backgroundColor = "#FFFFFF";
                }
                break;
            case "verde-rosa":
                if (numPar) {
                    producto.style.backgroundColor = "#ED3DEF";
                } else {
                    producto.style.backgroundColor = "#25ED1E";
                }
                break;
            default:
        }
    }
}
function eliminarImagen() {
    var imagen = document.getElementById('img-portada');
    imagen.remove();
}
/* llama a las funciones anteriores*/

function generarProductos() {
    mostrarSeleccion();
    mostrarProductos();
    cambiarColorProducto();
    eliminarImagen();
}