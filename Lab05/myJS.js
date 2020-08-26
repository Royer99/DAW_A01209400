function verifyPasswordRequierements(){
    let lengthPass=false; //must contain at least 8 characters.
    let upperCase=false; //must contain at least one uppercase. from 65 to 90 ascii table
    let loweCase=false; //must contain at least one lowecase. from 97 to 122 ascii table
    let numeber=false; //must contain at least one number. from 48 to 57 ascii table
    let specialChar=false; //must contain at least one special character. from 33 to 63 ascii table

    let password=document.getElementById("Password").value;
    const passw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;
    if(password.match(passw)){
        alert("pass");
        let passwordCopy=document.getElementById("ConfirmPass").value;
        if(password==passwordCopy){
            alert("pass2");
        }else{
            alert("Las contraseñas no coinciden,favor de verificar.")
        }
    }else{
        alert("Por favor verifica que tu contraseña cumpla con los estandares minimos");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });

