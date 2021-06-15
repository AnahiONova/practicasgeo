const listaloggedout = document.querySelectorAll('.logged-out');
const listaloggedin = document.querySelectorAll('.logged-in');
const datosdelacuenta = document.querySelector('.datosdelacuenta');

const configurarMenu = (user) => {
  if(user){
    listaloggedin.forEach(item => item.style.display = 'block');
    listaloggedout.forEach(item => item.style.display = 'none');
  }else{
    listaloggedin.forEach(item => item.style.display = 'none');
    listaloggedout.forEach(item => item.style.display = 'block');
  }
}
