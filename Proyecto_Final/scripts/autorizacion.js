const botonModal1 = document.getElementById("botonModal1");

botonModal1.addEventListener("click", (e) =>{
  e.preventDefault();

  let correo = formaIngresar['correo'].value;
  let contrasena = formaIngresar['contrasena'].value;

  auth.signInWithEmailAndPassword(correo, contrasena).then(cred =>{
    console.log(cred);
  }).catch(err => {
    console.log(err)
  });

});