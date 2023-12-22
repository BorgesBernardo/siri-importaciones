
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const botonVaciarCarrito = document.querySelector("#vaciar-carrito");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
const contenedorSumaTotal = document.querySelector("#total-a-comprar");
const botonComprar = document.querySelector("#comprar");

if(productosEnCarritoLS){

  contenedorCarritoVacio.classList.add("ocultar");
  contenedorCarritoProductos.classList.remove("ocultar");
  contenedorCarritoAcciones.classList.remove("ocultar");

  contenedorCarritoProductos.innerHTML = "";

  productosEnCarritoLS.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("articulo_carrito");
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.titulo}" class="foto_producto">
      <div class="contenedor_descripcion"> 
      <div class="nombre">
        <h3>Nombre:</h3>
        <p class="subtitulo_carrito">${producto.titulo}</p>
      </div>
      <div class="cantidad">
        <h3>Cantidad:</h3>
        <p class="subtitulo_carrito">${producto.cantidad}</p>
      </div>
      <div class="precio">
        <h3>Precio:</h3>
        <p class="subtitulo_carrito">$${producto.precio}</p>
      </div>
      <div class="subtotal">
        <h3>Sub Total:</h3>
        <p class="subtitulo_carrito">$${producto.cantidad * producto.precio}</p>
      </div>
      </div>
      `;

    contenedorCarritoProductos.append(div);
  });

  sumarTotales();

} else{

  contenedorCarritoVacio.classList.remove("ocultar");
  contenedorCarritoProductos.classList.add("ocultar");
  contenedorCarritoAcciones.classList.add("ocultar");

};


// Vaciar carrito

botonVaciarCarrito.addEventListener("click",vaciarCarrito);

function vaciarCarrito (){
  contenedorCarritoProductos.innerHTML = "";
  contenedorCarritoVacio.classList.remove("ocultar");
  contenedorCarritoAcciones.classList.add("ocultar");
  localStorage.removeItem("productos-en-carrito");
};


// Sumar total a pagar

function sumarTotales (){

  const totalSumado = productosEnCarritoLS.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0);
  contenedorSumaTotal.innerText = `Total compra: $ ${totalSumado}`;

};


// Boton Comprar

botonComprar.addEventListener("click",comprar);

function comprar(){
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Muchas gracias por su compra",
    showConfirmButton: false,
    timer: 3500
  });

  vaciarCarrito();

}

