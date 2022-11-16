const btnCarrito = document.querySelector("#cart");
const ventanaCarrito = document.querySelector(".cart-modal-overlay");
const cerrarCarrito = document.querySelector("#close-btn");
const botonesComprar = document.querySelectorAll(".add-to-cart");
const contenedorCarrito = document.querySelector(".product-rows");
const totalCarrito = document.querySelector('.total-price');
const totalProducto = document.querySelector(".cart-quantity");
let carrito = [ 
    {id: 100, nombre : "fender Custom",  precio:2600},
    {id: 101, nombre : "fender sg", precio:2500},
    {id: 102, nombre : "fender stratocaster", precio:2600 },
    {id: 103, nombre : "fender jaguar", precio:3000}

];
class Producto {
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen
    }
}

// abrir el carrito 
btnCarrito.addEventListener("click", ()=> {
    ventanaCarrito.classList.add("open");
})

//cerrar carrito
cerrarCarrito.addEventListener("click", ()=> {
    ventanaCarrito.classList.remove("open");
})

console.log(botonesComprar);
//agregar a cada boton la funcion para agregar el producto al carrito
botonesComprar.forEach(boton => {
    boton.addEventListener("click", agregarCarrito);
})



function agregarCarrito(e){
    boton = e.target;
    let padre = boton.parentElement;
    let prodID = padre.getAttribute("id");
    let nombreProd = padre.querySelector("h3").textContent;
    let precio = parseFloat(padre.querySelector('.product-price').textContent.replace("$", ""));
    let imagen = padre.querySelector('.product-image').src;
    
    const prodCarrito = new Producto(prodID,nombreProd, precio, imagen);

    carrito.push(prodCarrito);
    popularCarrito();
    ActualizarCantidadCarrito();
}

function popularCarrito(){
    contenedorCarrito.innerHTML = '';
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <div class='product-row' id='${producto.id}'>
                <img src='${producto.imagen}' class='cart-image' />
                <span>${producto.nombre}</span>
                <span class='cart-price'>$${producto.precio}</span>
                <input type='number' value='1' class="product-quantity" />
                <button class="remove-btn">Borrar</button>
            </div>
        `
    })
    actualizarTotal();
    
}

function actualizarTotal() {
    let total = carrito.reduce((acc, producto)=>{ 
        return acc + producto.precio 
    },0)
    // console.log(total)
    totalCarrito.innerHTML = `$${total}`
}

function ActualizarCantidadCarrito () {
    totalProducto.textContent = carrito.length;
}







