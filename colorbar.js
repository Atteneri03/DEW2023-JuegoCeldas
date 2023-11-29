let colours = ['red', 'blue', 'green', 'yellow'];

function createBox() {
  let main = document.getElementById('main');
  let box = document.createElement('div');
  box.classList.add('box');
  let r = ~~(Math.random()*colours.length);
  let color = colours[r];
  box.classList.add(color);
  //box.setAttribute('onclick', 'deleteColor("'+color+'")');
  box.setAttribute('onclick', 'deleteAdjacents(this)');
  main.appendChild(box);
  let boxNumber = document.getElementById('box_number');
  boxNumber.textContent++;
}

function createNBoxes() {
  let num = parseInt(
    document.querySelector('[name="number"]')
    .value);
  for(let i=0; i<num; i++) {
    createBox();
  }
}

function deleteBox(elem) {
  elem.remove();
  let boxNumber = document.getElementById('box_number');
  boxNumber.textContent--;
}

function deleteColor(color) {
  let boxes = document.querySelectorAll('#main .' + color);
  boxes.forEach(box => deleteBox(box));
}

function getColor(box) {
  return box.classList[1];
}

// function deleteAdjacents(box) {
//   let color = getColor(box);
//   let next = box.nextSibling;
//   while (next && getColor(next)==color) {
//     next.remove();
//     next = box.nextSibling;
//   }
//   let previous = box.previousSibling;
//   while (previous && getColor(previous)==color) {
//     previous.remove();
//     previous = box.previousSibling;
//   }
//   box.remove();
// }

function deleteAdjacents(box) {
  let color = getColor(box);
  let group = [box];
  let next = box.nextSibling;
  while (next && getColor(next)==color) {
    group.push(next);
    next = next.nextSibling;
  }
  let previous = box.previousSibling;
  while (previous && getColor(previous)==color) {
    group.push(previous);
    previous = previous.previousSibling;
  }
  if (group.length>2) group.forEach(b => deleteBox(b));
}
