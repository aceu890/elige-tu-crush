// TODO: Validación para no ingresar números mayores a 10 en todos los inputs numbers
const inputs = document.querySelectorAll("input[type='number']");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value > 10) {
      input.value = 10;
    }
  });
});

// TODO:Funcion que se ejecuta al hacer click en el boton "agregar"
// Array que guarda el puntaje total de cada envio de una crush X
var sumas = [];

function agregarElemento() {

  // Obtener el valor del input text
  var valor = document.getElementById("texto").value;

  // Validar que el valor no esté vacío
  if (valor.trim() === "") {
    alert("El valor no puede estar vacío");
    return;
  }

  // Validar que la lista no tenga más de 10 elementos
  var lista = document.getElementById("lista");
  if (lista.childNodes.length >= 11) {
    alert("La lista no puede tener más de 10 elementos");
    return;
  }

  // Obtener los valores de los input number
  var numero1 = parseInt(document.getElementById("numero1").value) || 0;
  var numero2 = parseInt(document.getElementById("numero2").value) || 0;
  var numero3 = parseInt(document.getElementById("numero3").value) || 0;
  var numero4 = parseInt(document.getElementById("numero3").value) || 0;
  var numero5 = parseInt(document.getElementById("numero3").value) || 0;
  var numero6 = parseInt(document.getElementById("numero3").value) || 0;
  var numero7 = parseInt(document.getElementById("numero3").value) || 0;

  // Calcular la suma de los valores
  var suma = numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7;

  // Agregar la suma al array
  sumas.push( valor + " con " + suma + " Ptos." );
  console.log(sumas);

  // Validar que el valor no esté vacío
  if (suma === 0) {
    alert("La suma no puede ser cero");
    return;
  } else {
    // Crear un nuevo elemento li y agregarle el valor del input text
    var nuevoElemento = document.createElement("li");
    var textoNuevoElemento = document.createTextNode(valor);
    nuevoElemento.appendChild(textoNuevoElemento);

    // Agregar el nuevo elemento a la lista
    lista.appendChild(nuevoElemento);

    // Limpiar el input text
    document.getElementById("texto").value = "";
  }

  // Limpiar los input number
  document.getElementById("numero1").value = "";
  document.getElementById("numero2").value = "";
  document.getElementById("numero3").value = "";
  document.getElementById("numero4").value = "";
  document.getElementById("numero5").value = "";
  document.getElementById("numero6").value = "";
  document.getElementById("numero7").value = "";
}

// TODO: Funcion clickear imagen de corazón

function clickearImagen() {

    if (lista.childNodes.length >= 11) {
      var numeros = sumas;
      var maximo = numeros[0];
      for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
          maximo = numeros[i];
        } 
      }
       
      document.getElementById("resultado").innerHTML = "TU CRUSH ES: " + maximo;
    return;
  }

}








