const listaloggedout = document.querySelectorAll('.logged-out');
const listaloggedin = document.querySelectorAll('.logged-in');
const datosdelacuenta = document.querySelector('.datosdelacuenta');

const configurarMenu = (user) => {
  if(user){
    db.collection('usuarios').doc(user.uid).get().then(doc =>{
      const html = `
        <p>Nombre: ${doc.data().nombre}</p>
        <p>Correo: ${user.email}</p>
        <p>Telefono: ${doc.data().telefono}</p>
        <p>Direccion: ${doc.data().direccion}</p>
      `;

      datosdelacuenta.innerHTML = html;

    });
    listaloggedin.forEach(item => item.style.display = 'block');
    listaloggedout.forEach(item => item.style.display = 'none');
  }else{
    listaloggedin.forEach(item => item.style.display = 'none');
    listaloggedout.forEach(item => item.style.display = 'block');
  }
};

const listadeAparatos = document.getElementById('listadeAparatos');

const obtieneAparatos = (data) => {
  if(data.length){
    const html = '';
    data.forEach(doc => {
      let aparatos = doc.data();
      const columna = `
        <div class="col-12 col-md-4">
          <img src="img/${aparatos.imagen}" alt="${aparatos.nombre}" width="100%">
          <p>${aparatos.nombre}</p>
          <a href="https://wwww.paypal.me/grupohernandezalba/$ ${aparatos.precio}" target="_blank">
              <button class="btn btn-info">Pagar Ahora</button>
          </a>
        </div>
      `;

      html += columna;
    });

    listadeAparatos.innerHTML = html;
  }
}

