// selecciono Elementos
const productoselementos = document.querySelector(".productos");


let productos = [
  { id: 0, nombre: "Reishi", precio: 100, stock: 10 },
  { id: 1, nombre: "Cordyceps", precio: 150, stock: 20 },
  { id: 2, nombre: "Shiitake", precio: 150, stock: 20 },
  { id: 3, nombre:"Melena", precio: 200, stock: 15 },
];

function mostrarProductos() {
  productos.forEach((producto) => {
    productoselementos.innerHTML += `
      <div class="card" id="tarjeta" style="width: 18rem">
            <h4 class="texto" id="nombre">Reishi</h4>
            <h6> Precio: $100</h6>
            <img src="./images/honguito.png" alt="imagen">
            <button class="btn btn-success">Agregar</button>
       </div>
`;
  });
}
mostrarProductos();




// class Producto {
//   constructor(id, nombre, precio, stock) {
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//   }
// }

// const mostrarProductos = (productos) => {
//   console.clear();

//   const arrayProductos = productos.map((producto) => {
//     return {
//       id: producto.id,
//       nombre: producto.nombre,
//       precio: producto.precio,
//       stock: producto.stock,
//     };
//   });
//   console.log("Tienda FUNGI");
//   console.table(arrayProductos);
// };

// const productos = [new Producto(1, "reishi", 100, 3), new Producto(2, "cordyceps", 150, 5), new Producto(3, "shiitake", 120, 3), new Producto(4, "melena de leon", 200, 10)];

// mostrarProductos(productos);

// const eliminarProducto = () => {
//   let idProducto = parseInt(prompt("Ingrese el código del item que desea borrar"));

//   let indice = productos.findIndex((producto) => producto.id == idProducto );

//   if (indice === -1){
//     alert(`El producto con códigpo ${idProducto} no existe`);
//     return;
//   }

//   const productoEliminar = productos[indice];
//   const confirmacion = confirm("Esta seguro que quiere eliminar este prducto?");

//   if (confirmacion) {
//     productos.splice(indice, 1);
//   console.log(`El producto con còdigo ${idProducto} fue eliminado.`);
//   } else {
//     alert("Eliminacion cancelada");
//   }
// };

// const salir = () => {
//   alert("Gracias por visitarnos!");
// };

// let carrito = [];

// const totalCarrito = () => {
//   let total = 0;
//   carrito.forEach((producto) => {
//     total += producto.precio;
//   });
//   return total;
// };

// const mostrarProductosCarrito = (productosCarrito) => {
//   console.clear();

//   if (productosCarrito.length === 0) {
//     console.log("El carrito está vacío.");
//   } else {
//     console.log("Tienda Fungi");
//     console.log("Productos en el carrito:");
//     const arrayProductos = productosCarrito.map((producto) => {
//       return {
//         id: producto.id,
//         nombre: producto.producto,
//         precio: producto.precio,
//       };
//     });
//     console.table(arrayProductos);
//   }
// };

// let seleccion = prompt("Desea comprar alguno de nuestros productos? (si/no) ");

// while (seleccion !== "si" && seleccion != "no") {
//   alert("si o no?");
//   seleccion = prompt("Desea comprar? si/no").toLowerCase();
// }

// if (seleccion === "si") {
//   alert("ok, estos son los productos disponibles");
//   let losProductos = productos.map((producto) => producto.id + "- " + producto.nombre + " - " + "$" + producto.precio + " - " + "(" + producto.stock + " en stock)");
//   alert(losProductos.join(" \n "));
// } else if (seleccion === "no") {
//   alert("gracias por visitarnos!");
// }

// let continuarComprando = "si";

// while (continuarComprando === "si") {
//   let idProducto = parseInt(prompt("Por favor ingrese el código del producto que desea agregar al carrito"));
//   let producto = productos.find((producto) => producto.id === idProducto);

//   if (!producto) {
//     alert(`El producto con código ${idProducto} no existe.`);
//     continuarComprando = prompt("¿Desea seguir comprando? (si/no)").toLowerCase();
//     continue;
//   }

//   carrito.push({ id: producto.id, producto: producto.nombre, precio: producto.precio });

//   continuarComprando = prompt("¿Desea seguir comprando? (si/no)").toLowerCase();
// }

// // alert("Gracias por su compra!")

// let opcionMenu;
// do {
//   alert("Menú:\n1 - Eliminar un producto\n2 - Total carrito\n3 - Salir");
//   opcionMenu = parseInt(prompt("Ingrese una opción"));

//   switch (opcionMenu) {
//     case 1:
//       eliminarProducto();
//       break;
//     case 2:
//        console.log("Carrito:");
//        mostrarProductosCarrito(carrito);
//       console.log("Total a pagar: $" + totalCarrito());
//       break;
//     case 3:
//       salir();
//       break;
//     default:
//       alert("Ingrese una opcion correcta");
//       break;
//   }
// } while (opcionMenu  !== 3);
