auth.onAuthStateChanged(user => {
  if(user){
    db.collection('aparatos').onSnapshot(snapshot =>{
      obtieneAparatos(snapshot.docs);
    });

    configurarMenu(user);
  }else {
    configurarMenu();
  }
});

const botonModal1 = document.getElementById("botonModal1");

botonModal1.addEventListener("click", (e) =>{
  e.preventDefault();

  let correo = formaIngresar['correo'].value;
  let contrasena = formaIngresar['contrasena'].value;

  auth.signInWithEmailAndPassword(correo, contrasena).then(cred =>{
    console.log(cred);

    $('#ingresarModal').modal('hide');
    formaIngresar.reset();
    formaIngresar.querySelector('.error').innerHTML='';

  }).catch(err => {
    formaIngresar.querySelector('.error').innerHTML=mensajeError(err.code);
    console.log(err)
  });

});

function mensajeError(codigo){
  let mensaje = '';

  switch(codigo){
    case 'auth/wrong-password':
      mensaje = 'Su contraseña no es correcta';
      break;
    case 'auth/user-not-found':
      mensaje = 'Usuario no encontrado';
      break;
    case 'auth/weak-password':
      mensaje = 'Contraseña debil';
      break;
    default:
      mensaje = 'Ocurrio un error al ingresar con este usuario';
  }

  return mensaje;
}

const salir = document.getElementById('salir');

salir.addEventListener('click', (e) =>{
  e.preventDefault();

  auth.signOut().then(() =>{
    alert('El usuario ha salido del sistema');
  });
});

const botonModal2 = document.getElementById("botonModal2");

botonModal2.addEventListener("click", (e) =>{
  e.preventDefault();

  const correo = formaRegistrate['rcorreo'].value;
  const contrasena = formaRegistrate['rcontrasena'].value;

  auth.createUserWithEmailAndPassword(correo,contrasena).then(cred =>{

    return db.collection('usuarios').doc(cred.user.uid).set({
      nombre: formaRegistrate['rnombre'].value,
      telefono: formaRegistrate['rtelefono'].value,
      direccion: formaRegistrate['rdireccion'].value
    });

  }).then(() =>{

    $('#registrateModal').modal('hide');
    formaRegistrate.reset();
    formaRegistrate.querySelector('.error').innerHTML = '';

  }).catch(err =>{

    formaRegistrate.querySelector('.error').innerHTML = mensajeError(err.code);

  });
});