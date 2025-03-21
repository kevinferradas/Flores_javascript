// Datos de trabajo

const flores = [
  { nombre: "rosa", color: "rojo", floracion: "primavera", stock: true },
  { nombre: "rosa", color: "blanco", floracion: "verano", stock: true },
  { nombre: "jazmín", color: "blanco", floracion: "verano", stock: false },
  { nombre: "crisantemo", color: "blanco", floracion: "otoño", stock: false },
  { nombre: "cerezo", color: "blanco", floracion: "primavera", stock: false },
  { nombre: "clavel", color: "rojo", floracion: "verano", stock: true },
];

// Cómo se ordena un array por nombre
flores.sort((a, b) => {
  return a.nombre.localeCompare(b.nombre, "es-ES", { numeric: true });
});

// ==============================================================================
// EJERCICIO 1

// console.log(flores);

// Tiene que mostrarse en el HTML los datos de las flores como lista
// Flor: rosa, de color rojo, florece en primavera y tenemos stock
// Se mostrará el resultado en #ejercicio1

// for clásico
// for (let i = 0; i < flores.length; i++) {
//     console.log(flores[i]);
// }

// SOLUCION KEVIN
// let ejercicio1 = document.querySelector("#ejercicio1")
// let stockk = ""
// let mensaje = ""
// for (let i = 0; i< flores.length;i++) {

//   if (flores[i]["stock"]==true) {stockk= "tenemos stock"}
//   else {stockk="no tenemos stock"}

// mensaje += `<p>Flor: ${flores[i]["nombre"]}, de color ${flores[i]["color"]}, florece en ${flores[i]["floracion"]} y ${stockk}  </p>`
// console.log(mensaje);
// }
// ejercicio1.innerHTML = mensaje

// SOLUCION FERRAN

const ejercicio1 = document.getElementById("ejercicio1");

function mostrarFlores(id) {
  let html1 = "<ul>";
  flores.forEach((flor) => {
    let textoStock = "";

    if (!flor.stock) {
      textoStock = "no";
    }

    html1 += `<li>Flor : ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock} tenemos stock.</li>`;
  });

  html1 += "</ul>";

  id.innerHTML = html1;
}

mostrarFlores(ejercicio1);

// ==============================================================================
// EJERCICIO 2
// Listar las flores de color blanco que florecen en verano
// Modelo de mensaje de salida:
// Flor: rosa, de color blanco, florece en verano y tenemos stock
// Se mostrará el resultado en #ejercicio2

const ejercicio2 = document.querySelector("#ejercicio2");

function mostrarFlores2(id) {
  let html = "<ul>";
  flores.forEach((flor) => {
    if (
      flor.color == "blanco" &&
      flor.floracion == "verano" &&
      flor.stock == true
    ) {
      html += `<li>Flor : ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y tenemos stock.`;
    }
  });

  html += "</ul>";

  id.innerHTML = html;
}

mostrarFlores2(ejercicio2);

// ==============================================================================
// EJERCICIO 3

// A partir del formulario incluido, hay que mostrar que datos
// corresponden a la selección realizada.
// Se mostrarán en forma de lista como los modelos anteriores.
// Si no hay ninguna flor que cumpla las condiciones, se mostrará este mensaje:
// "No hay flor que cumpla las condiciones"
// Se mostrará el resultado en #ejercicio3

const ejercicio3 = document.querySelector("#ejercicio3");
const formEj3 = document.forms["formEj3"];

// let contadorFlores = 0

formEj3.addEventListener("change", (e) => {
  e.preventDefault();
  let mensaje = "<ul>";

  for (let i = 0; i < flores.length; i++) {
    // console.log(typeof formEj3['stock'].value); --> notemos que es un string, no un booleano!!

    let textoStock = "";

    if (!flores[i].stock) {
      textoStock = "no";
    }

    if (
      flores[i].color == formEj3["color"].value &&
      flores[i].floracion == formEj3["floracion"].value &&
      String(flores[i].stock) == formEj3["stock"].value
    ) {
      mensaje += `<li>Flor : ${flores[i].nombre}, de color ${flores[i].color}, florece en ${flores[i].floracion} y ${textoStock} tiene stock.</li>`;
    }
  }
  mensaje += "</ul>";


 if (mensaje.length == 9 ) {mensaje = '<p>No hay flor que cumpla las condiciones</p>'}
  ejercicio3.innerHTML = mensaje;
});


// ==============================================================================
// EJERCICIO 4

// Hacer un formulario para obtener una flor por su nombre.
// Se mostrará el resultado en #ejercicio4

const ejercicio4 = document.querySelector("#ejercicio4");
const formEj4 = document.forms["formEj4"];

formEj4.addEventListener("change" ,(e) => {
  e.preventDefault();
  let mensaje4 = "<ul>";
  let textoStock4=""
  // alert(formEj4["flor"].value)
  for (let i = 0; i < flores.length; i++) {

    if (!flores[i].stock) {
      textoStock4 = "no";
    }
    if (flores[i].nombre == formEj4["flor"].value.trim().toLocaleLowerCase()){
      mensaje4 += `<li>Flor : ${flores[i].nombre}, de color ${flores[i].color}, florece en ${flores[i].floracion} y ${textoStock4} tiene stock.</li>`;
    }


  }
  mensaje4 += "</ul>";
  if (mensaje4.length == 9 ) {mensaje4 = '<p>No hay flor con ese nombre</p>'}
  ejercicio4.innerHTML = mensaje4;

})

// ==============================================================================
// EJERCICIO 5

// Crea y programa un formulario para añadir flores al array.
// Por ejemplo:
// flor: cyclamen, color:rosa, floracion: invierno, stock:true
// Tiene que actualizarse automáticamente la lista del ejercicio 1

const formEj5 = document.forms["formEj5"];

formEj5.addEventListener('submit',(event) => {
event.preventDefault()

const nombre = formEj5['nombre'].value
const color = formEj5['color'].value
const floracion = formEj5['floracion'].value
const stock = formEj5['stock'].value

flores.push({nombre, color , floracion, stock})

mostrarFlores(ejercicio1);

localStorage.setItem("flores" , JSON.stringify(flores))

})



// ==============================================================================
/* E X T R A S */

// ==============================================================================
// EJERCICIO 6

// Crea y programa un formulario para añadir precios a las flores:
// rosa roja : 8.00€
// rosa blanca : 10.00€
// jazmin: 12.00€
// crisantemo: 5.00€
// cerezo: 25.00€
// cyclamen: 4.50€
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 7

// Crea la forma de eliminar elementos del array
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 8

// Crea la forma de editar elementos del array de flores
// Todas las propiedades deben poder ser editadas: nombre, color, floración, stock  y precio
// Tiene que actualizarse automáticamente la lista del ejercicio 1
