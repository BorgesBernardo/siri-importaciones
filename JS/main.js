const productos = [
  {
    id: "iphone-01",
    titulo: "iPhone 11",
    imagen: "../assets/productos/iphone.jpg",
    categoria:{
      nombre: "Celulares",
      id: "apple"
    },
    precio: 1000
  },
  {
    id: "macbook-01",
    titulo: "Macbook Air",
    imagen: "../assets/productos/macbook.jpg",
    categoria:{
      nombre: "Notebooks",
      id: "apple"
    },
    precio: 1000
  },
  {
    id: "nikon-mirroles-01",
    titulo: "Nikon D500",
    imagen: "../assets/productos/nikon-mirroless.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 1000
  },
  {
    id: "nikon-dslr-01",
    titulo: "Nikon DSLR",
    imagen: "../assets/productos/nikon-dslr.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 1050
  },
  {
    id: "canon-mirroles-01",
    titulo: "Canon Miroless",
    imagen: "../assets/productos/canon.mirroless.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 1000
  },
  {
    id: "canon-dslr-01",
    titulo: "Canon DSLR",
    imagen: "../assets/productos/canon-dslr.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 1000
  },
  {
    id: "sony-mirroles-01",
    titulo: "Sony Mirroles",
    imagen: "../assets/productos/sony-mirroless.png",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 1000
  },
  {
    id: "sony-cine-01",
    titulo: "Sony Cine",
    imagen: "../assets/productos/sony-video.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 1000
  },
  {
    id: "oferta-01",
    titulo: "Canon Miroless",
    imagen: "../assets/productos/canon.mirroless.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 1000
  },
  {
    id: "oferta-02",
    titulo: "iMac",
    imagen: "../assets/productos/imac.jpg",
    categoria:{
      nombre: "Computadoras",
      id: "apple"
    },
    precio: 1000
  },
  {
    id: "oferta-03",
    titulo: "iWatch",
    imagen: "../assets/productos/iwatch.jpg",
    categoria:{
      nombre: "Relojes",
      id: "apple"
    },
    precio: 1000
  },

];

const contenedorProducto = document.querySelector("#productos");
const botonesCategorias = document.querySelectorAll(".categoria-boton");
let agregarCarrito = document.querySelectorAll(".agregar_carrito");
const numero = document.querySelector("#cantidadEnCarrito");


// Mostrar productos en pantalla

function pintarProductos (productosFiltrados){

  contenedorProducto.innerHTML = "";

  productosFiltrados.forEach(producto => { // recorre el array productos
    
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${producto.imagen}" class="imagen_pr" alt="${producto.titulo}">
      <div class="producto_body">
        <h3 class="titulo_producto">${producto.titulo}</h3>
        <p class="precio_producto">$${producto.precio}</p>
        <button class="agregar_carrito" id="${producto.id}"> Agregar al carrito </button>
      </div>
    `;

    contenedorProducto.append(div);

  });

  llamarBotones();
};

pintarProductos(productos);


// Mostrar los producos según la categoría elegida

botonesCategorias.forEach(boton => {

  boton.addEventListener("click", (e)=> {

    if(e.target.id != "todos"){

      const productosCategorias = productos.filter(producto => producto.categoria.id === e.target.id);
      pintarProductos(productosCategorias);

    }else{

      pintarProductos(productos);

    };

  });

});




// Llamamos los botones "Agregar al carrito" una vez agregado

function llamarBotones(){
  
  agregarCarrito = document.querySelectorAll(".agregar_carrito");
  
  agregarCarrito.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
    
  });

};

llamarBotones();





// Agregar los productos al carrito


let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLS) {

  productosEnCarrito = productosEnCarritoLS;
  actualizarNumeroCarrito();

}else{

  productosEnCarrito = [];

};



function agregarAlCarrito (e){

  const idBoton = e.target.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.find(producto => producto.id === idBoton)){ // revisamos si hay conincidencia en el array productos en carrito

    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad++;

  }else{
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);

  };
  
  actualizarNumeroCarrito();
  
  const carritoJson = JSON.stringify(productosEnCarrito);
  localStorage.setItem("productos-en-carrito",carritoJson);
  
};







// Actualización de las cantidades en el carrito

function actualizarNumeroCarrito (){
  let cantidadEnCarrito = productosEnCarrito.reduce ((acc,producto)=> acc + producto.cantidad,0);
  numero.innerText = cantidadEnCarrito;
};



