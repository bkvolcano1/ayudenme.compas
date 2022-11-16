class Producto {
    constructor(id, marca, modelo, origen,precio,stock) {
        this.id = id;
        this.marca = marca;
        this.modelo= modelo;
        this.origen = origen;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen
    }
}


//La carga de los productos se detiene cuando se ingresa la palabra "fin".

let listaProd = [];
function prod() {
    let nombreProducto = prompt("Ingrese nombre: ");
    if (nombreProducto == "") {
        alert("No se ingreso producto");
    }
    while (nombreProducto != "fin" ) {
        let marcaProducto = prompt("Ingrese marca: ");
        if (marcaProducto == "") {
            alert("No se ingreso marca");
            
        }
        else if (marcaProducto == "gibson") {
            alert("El precio de una Gibson es de 3000 usd en adelante");
            
        }else if (marcaProducto == "epiphone") {
            alert("El precio de una Epiphone es de 200 usd en adelante");
            
        }else if (marcaProducto == "fender") {
            alert("El precio de una Fender es de 2800 usd en adelante");
            
        }else if (marcaProducto == "squier") {
            alert("El precio de una Squier es de 600 usd en adelante")
            
        }else{
            alert("Precio sin definir");
        }
        let modeloProducto = prompt("Ingrese modelo: ");
        if (modeloProducto  == "") {
            alert("No se ingreso modelo");
            
        }
        let origenProducto = prompt("Ingrese origen: ");
        if (origenProducto == "") {
            alert("No se ingreso origen");
        }
        let precioProducto = parseFloat(prompt("Ingrese precio: "));
        if (precioProducto == "") {
            alert("No se ingreso precio del producto");
        }
        let stockProducto = parseFloat(prompt("Ingrese stock: "));
        if (stockProducto == "") {
            alert("No se ingreso stock");
        }
        
        let producto = new Producto(nombreProducto,marcaProducto,modeloProducto ,origenProducto,precioProducto,stockProducto);
        listaProd.push(producto)
        nombreProducto = prompt("Ingrese nombre: ");
        if (nombreProducto == "") {
            alert("No se ingreso producto");
        } 
    }
    return listaProd
    
}
//Se aplica el descuento del 10% cuando se quiere comprar un producto mayor a 5000 dolares. 
function descuento() {
    for (const producto of listaProd) {
        let conDescuento = `${producto.precio}` * 0.9;
        if (`${producto.precio}` > 5000){
            console.log(`el precio paso de ser de ${producto.precio} con descuento de 10% a: `+ conDescuento)
        } 
      
    }
  
    return listaProd
    
}



const lista = [
    {id: 100, marca : "fender", modelo:"telecaster", origen:"usa", precio:2600, stock:12},
    {id: 101, marca : "fender", modelo:"sg", origen:"china", precio:2500, stock:5},
    {id: 102, marca : "fender", modelo:"stratocaster", origen:"usa", precio:2600, stock:32},
    {id: 103, marca : "fender", modelo:"jaguar", origen:"usa", precio:3000, stock:3}
    
];



const guardarProducto = () => {
    let producto = parseFloat(document.getElementById("id").value);
    let marca = document.getElementById("marca").value;
    let modelo= document.getElementById("modelo").value;
    let origen = document.getElementById("origen").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let stock = parseFloat(document.getElementById("stock").value);
    let nuevoProd = new Producto(producto,marca,modelo,origen,precio,stock);
    lista.push(nuevoProd);
    
}



let boton = document.getElementById("btn");

boton.addEventListener("click", (e)=> {
    let usuario = document.getElementById("usuario").value;
    e.preventDefault();
    localStorage.setItem("usuario", usuario)

})

const lista2 = document.getElementById("lista2");

lista2.onchange = () => {
    parrafo.innerHTML = `La marca elegida es ${lista2.value}`;
    
}
texto.addEventListener("input",()=>{
    if (texto.value == '') {
        texto.style.background = 'yellow';
        
    }else{
        parrafo.innerHTML = texto.value;
    }
})









