init();

function init(){
    populateColorDropdown();
    populateFirstBtns();
}

function populateColorDropdown(){
  for (var i = 0; i < colors.length; i++) {
    addOption(colors[i]);
  }
}

function populateFirstBtns(){
  createBtn('red');
  createBtn('yellow');
  createBtn('blue');
}

function createBtn(color){
  var buttonContainer = document.getElementById("buttons");
  var btn = document.createElement("button");
  btn.innerText = color;
  btn.value = color;
  btn.setAttribute("id", color);
  btn.className = 'color-btn';
  btn.style.backgroundColor = color;
  buttonContainer.appendChild(btn);
  btn.onclick = function changecolor(){
    document.body.style.backgroundColor = color;
  }
  removeOption(color);
}

function addOption(color){
  var select = document.getElementById("color-dropdown");
  var el = document.createElement("option");
  el.innerText = color;
  el.value = color;
  select.appendChild(el);
}

function addNewButton(){
  var color = document.getElementById("color-dropdown").value;
  if (color === "") {
    alert("Welp, you've gone too far. You gotta delete some buttons to keep playing.")
  }
  else {
    createBtn(color);
    removeOption(color);
  }
}

function changeColor(){
  var color = document.getElementById("color-dropdown").value;
  document.body.style.backgroundColor = color;
}

function removeCurrent(){
  var buttonContainer = document.getElementById("buttons");
  var backgroundColor = document.body.style.backgroundColor;
  var btnToRemove = document.getElementById(backgroundColor);
  buttonContainer.removeChild(btnToRemove);
  document.body.style.backgroundColor = "white";
  addOption(backgroundColor);
}

function removeOption(color){
  var colorOption = document.getElementById("color-dropdown");
  var options = colorOption.childNodes;
  for (var i = 0; i < options.length; i++){
    if (options[i].value === color){
      colorOption.removeChild(options[i]);
    }
  }
}
