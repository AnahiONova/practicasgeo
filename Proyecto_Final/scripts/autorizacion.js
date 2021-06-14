const formaIngresar = document.getElementById("formaIngresar");

formaIngresar.addEventListener('submit', (e)=>{
  console.log('Ejecutando')
  e.preventDefault();

  let correo = formaIngresar['correo'].value;
  let contrasena = formaIngresar['contrasena'].value;

  auth.signInWithEmailAndPassword(correo,contrasena).then(cred =>{
    console.log(cred);
  }).catch(err => {
    console.log(err)
  });
})