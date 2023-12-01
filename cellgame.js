
//Los posibles colores de las casillas
let colours = ['red', 'blue', 'green', 'yellow'];

//Un número aleatorio de casillas al empezar
let rand = Math.floor(Math.random() * (10 - 1) + 1);
for (let index = 0; index < rand; index++) {
  createBox();
}

//Un contador, cada dos segundos se inserta una nueva casilla
var idI = setInterval(function(){
  createBox();
  gameOver();
}, 2000); 

function createBox() {
    let main = document.getElementById('main');
    let box = document.createElement('div');
    box.classList.add('box');
    //----------------
    let r = ~~(Math.random()*colours.length);
    let color = colours[r];
    box.classList.add(color);
    box.classList.add("element");

    //----------------
    box.addEventListener('click', function() {
      remove(this);
  });
  
  box.addEventListener('click', function() {
      change();
  });
    main.append(box);
    
  }

  function remove(box){
    let color = box.classList[1];
    let group = [box];

    // Buscar elementos a la derecha con el mismo color
    let next = box.nextElementSibling;
    while (next && next.classList && next.classList[1] == color) {
      group.push(next);
      next = next.nextElementSibling;
  }

    // Buscar elementos a la izquierda con el mismo color
    let previous = box.previousElementSibling;
    while (previous && previous.classList && previous.classList[1] == color) {
        group.push(previous);
        previous = previous.previousElementSibling;
    }

    // Eliminar elementos si hay más de 2 en el grupo
    if (group.length > 2) {
        group.forEach(b => {
            b.remove();
        });
  // box.remove();

    // Verificar si no hay más elementos en el contenedor
    if (document.querySelectorAll('.box').length === 0) {
        // Mostrar mensaje de "Has ganado"
        alert('¡Has ganado!');
        clearInterval(idI);
    }
  }
 }


  function gameOver(){
    var elements = document.querySelectorAll(".element");
    var lastElement = elements[elements.length -1];

    // //AQUÍ LO HAGO CON EL TAMAÑO DEL DIV
    // //----------------------------------------------
    // if(elements.length > 0){

    //  // Obtener el ancho total del último elemento, incluyendo márgenes y bordes
    //   var anchoTotalElemento = lastElement.offsetWidth;
   
    //   // Obtener la posición del último elemento
    //   var pos = lastElement.getBoundingClientRect();
  
    //   // Obtener el ancho del div
    //   var main = document.getElementById('main');
    //   var posDerecho = main.getBoundingClientRect().right;

  
    //   // Si la posición del último elemento supera el ancho de la ventana, mostrar "Game Over"
    //   if (pos.right + anchoTotalElemento >= posDerecho) {
    //     alert('Game Over');
    //     console.log(elements.length);
    //     clearInterval(idI);
    //     lastElement.remove();
    // }
    
    // }
    
    //AQUÍ LO HAGO CON EL NUMERO DE CELDAS
    //-------------------------------
    let max = 70;
    

    if(elements.length == max){
      alert('Game Over');
      clearInterval(idI);
      lastElement.remove();
    }
  }


function change(){
  let color1, color2;
  let container = document.getElementById('main');
  container.addEventListener("click", (event) => {
    let box = event.target;
    if(event.ctrlKey){
      if(box.nextElementSibling){
        
        color1 = box.getAttribute("class");
        color2 = box.nextElementSibling.getAttribute("class");
        // console.log("Color pulsado: " + color1);
        // console.log("Color derecha: " + color2);
        box.setAttribute("class",color2);
        box.nextElementSibling.setAttribute("class",color1);
    
    
      } 
    }
  });
 
}


