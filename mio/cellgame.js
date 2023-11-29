
let colours = ['red', 'blue', 'green', 'yellow'];

function createBox() {
    let main = document.getElementById('main');
    let box = document.createElement('div');
    box.classList.add('box');
    //box.setAttribute("class","element");
    //----------------
    let r = ~~(Math.random()*colours.length);
    let color = colours[r];
    box.classList.add(color);
    box.classList.add("element");

    //----------------
    box.setAttribute('onclick', 'remove(this)');
    //box.className = "element";
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
  }




  function gameOver(){
    var elements = document.querySelectorAll(".element");

    var lastElement = elements[elements.length -1];

    // Obtener el ancho total del último elemento, incluyendo márgenes y bordes
    var anchoTotalElemento = lastElement.offsetWidth;

    // Obtener la posición del último elemento
    var pos = lastElement.getBoundingClientRect();

    

    //console.log(pos);

    // Obtener el ancho de la ventana
    var widthWindow = window.innerWidth;

    console.log(widthWindow);
    console.log(pos.right);
  


    // Si la posición del último elemento supera el ancho de la ventana, mostrar "Game Over"
    if (pos.right + anchoTotalElemento > widthWindow) {
      alert('Game Over');
      clearInterval(idI);
  }
  }

  var idI = setInterval(function(){
    createBox();
    gameOver();
  }, 2000); 
