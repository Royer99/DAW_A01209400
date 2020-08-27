function beautify(x){
      x.style.fontSize="xx-large";
      x.style.fontFamily="roboto";
}

function uglify(x){
      x.style.fontSize="small";
      x.style.fontFamily="arial";
}

function verifyPasswordRequierements(){
      let password=document.getElementById("Password").value;
      const passw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;
      if(password.match(passw)){
          alert("pass");
          let passwordCopy=document.getElementById("ConfirmPass").value;
          if(password==passwordCopy){
              alert("pass2");
          }else{
              alert("Las contraseñas no coinciden,favor de verificar.");
          }
      }else{
          alert("Por favor verifica que tu contraseña cumpla con los estandares minimos");
      }
}

// Make the DIV element draggable:

dragElement(document.getElementById("postIt"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}