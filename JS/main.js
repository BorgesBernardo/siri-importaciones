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
    precio: 2000
  },
  {
    id: "nikon-mirroles-01",
    titulo: "Nikon D500",
    imagen: "../assets/productos/nikon-mirroless.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 1800
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
    id: "oferta-04",
    titulo: "Canon Miroless",
    imagen: "../assets/ofertas/canon-oferta.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "ofertas"
    },
    precio: 1300
  },
  {
    id: "canon-dslr-01",
    titulo: "Canon DSLR",
    imagen: "../assets/productos/canon-dslr.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 890
  },
  {
    id: "sony-mirroles-01",
    titulo: "Sony Mirroles",
    imagen: "../assets/productos/sony-mirroless.png",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 1670
  },
  {
    id: "sony-cine-01",
    titulo: "Sony Cine",
    imagen: "../assets/productos/sony-video.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 2500
  },
  {
    id: "airpods-01",
    titulo: "Airpods Pro",
    imagen: "../assets/productos/airpods.jpg",
    categoria:{
      nombre: "Airpods",
      id: "apple"
    },
    precio: 300
  },
  {
    id: "canon-compacta-01",
    titulo: "Canon Compacta",
    imagen: "../assets/productos/canon-compacta.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 1700
  },
  {
    id: "canon-flash-01",
    titulo: "Flash Canon",
    imagen: "../assets/productos/canon-flashes.jpg",
    categoria:{
      nombre: "Flash Canon",
      id: "Canon"
    },
    precio: 700
  },
  {
    id: "oferta-01",
    titulo: "Canon Miroless",
    imagen: "../assets/ofertas/mochila-oferta.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "ofertas"
    },
    precio: 1000
  },
  {
    id: "oferta-02",
    titulo: "iMac",
    imagen: "../assets/ofertas/imac-oferta.jpg",
    categoria:{
      nombre: "Computadoras",
      id: "ofertas"
    },
    precio: 1000
  },
  {
    id: "oferta-03",
    titulo: "iWatch",
    imagen: "../assets/ofertas/iwatch-oferta.jpg",
    categoria:{
      nombre: "Relojes",
      id: "ofertas"
    },
    precio: 1000
  },
  {
    id: "canon-lentes-01",
    titulo: "Lentes Canon",
    imagen: "../assets/productos/canon-lentes.jpg",
    categoria:{
      nombre: "Lentes Canon",
      id: "canon"
    },
    precio: 680
  },
  {
    id: "sony-compacta-01",
    titulo: "Compacta Sony",
    imagen: "../assets/productos/compacta-sony.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 1900
  },
  {
    id: "sony-flash-01",
    titulo: "Flash Sony",
    imagen: "../assets/productos/flash-sony.jpg",
    categoria:{
      nombre: "Flash Sony",
      id: "sony"
    },
    precio: 2500
  },
  {
    id: "ipad-apple-01",
    titulo: 'iPad Pro 11" 256gb',
    imagen: "../assets/productos/ipad.jpg",
    categoria:{
      nombre: "Apple iPad",
      id: "apple"
    },
    precio: 590
  },
  {
    id: "lentes-nikon-01",
    titulo: "Lentes Nikon",
    imagen: "../assets/productos/lentes-nikon.jpg",
    categoria:{
      nombre: "Lentes Nikon",
      id: "nikon"
    },
    precio: 480
  },
  {
    id: "kit-luces-01",
    titulo: "Kit de Luces",
    imagen: "../assets/productos/light.jpg",
    categoria:{
      nombre: "Kit de Luces",
      id: ""
    },
    precio: 2500
  },
  {
    id: "apple-macmini-01",
    titulo: "Mac Mini",
    imagen: "../assets/productos/mac-mini.jpg",
    categoria:{
      nombre: "Apple Mac Mini",
      id: "apple"
    },
    precio: 2850
  },
  {
    id: "oferta-05",
    titulo: "Memoria 128gb",
    imagen: "../assets/ofertas/memoria-oferta.jpg",
    categoria:{
      nombre: "Memoria",
      id: "ofertas"
    },
    precio: 50
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
      <img src="${producto.imagen}" class="imagen_producto" alt="${producto.titulo}">
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



