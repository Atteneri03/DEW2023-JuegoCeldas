
let colours = ['red', 'blue', 'green', 'yellow'];

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
      change(this);
  });
    main.appendChild(box);
    
  }

  function remove(box){
    let color = box.classList[1];
    let group = [box];
    let next = box.nextSibling;
    while (next && next.classList[1]==color) {
      group.push(next);
      next = next.nextSibling;
    }
    let previous = box.previousSibling;
    while (previous && previous.classList[1]==color) {
      group.push(previous);
      previous = previous.previousSibling;
    }
    if (group.length>2) group.forEach(b => {
        b.remove();
        });
    //si se eliminan todas las celdas, ganas
    // Verificar si no hay más elementos en el contenedor
    if (document.querySelectorAll('.box').length === 0) {
      // Mostrar mensaje de "Has ganado"
      alert('¡Has ganado!');
  }
  }




  function gameOver(){
    var elements = document.querySelectorAll(".element");
    console.log (elements);
    
    if(elements.length > 0){
      var lastElement = elements[elements.length -1];

      // Obtener el ancho total del último elemento, incluyendo márgenes y bordes
      var anchoTotalElemento = lastElement.offsetWidth;
  
      // Obtener la posición del último elemento
      var pos = lastElement.getBoundingClientRect();
  
      // Obtener el ancho de la ventana
      var widthWindow = window.innerWidth;
  
      // Si la posición del último elemento supera el ancho de la ventana, mostrar "Game Over"
      if (pos.right + anchoTotalElemento > widthWindow) {
        alert('Game Over');
        clearInterval(idI);
    }
    
    }
    
  }


function change(box){
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

var idI = setInterval(function(){
  createBox();
  gameOver();
}, 2000); 
