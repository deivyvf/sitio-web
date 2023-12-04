
// Verificar que el usuario este logeado en la pagina //////////////////

window.onload = verificar_login();

function verificar_login() {
  auth.onAuthStateChanged((user) => {
    if (user) {
    document.getElementById("perfil_menu").innerHTML =`
    <li style="cursor: pointer;"><a class="dropdown-item">`+user.email+`</a>
    </li>

    <li style="cursor: pointer;"><a class="dropdown-item" href='./pages/registro.html'>Registrar Producto</a>
    </li>

    <li style="cursor: pointer;"><a class="dropdown-item" onclick="logout()">Cerrar Sesion</a>
    </li>`;
    }
  });
}

// funcion Login
function login(event) {
  event.preventDefault();
  let email = event.target["correo"].value;
  let password = event.target["pass"].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
        location.reload();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      alert("Error al inicar sesion");
      // ..
    });

  // console.log(event.target['correo'].value +'     '+event.target['pass'].value);

  document.getElementById("form1").reset();
}

// funcion Logout
function registro_user(event) {
  event.preventDefault();
  // Resultado en Consola: console.log(event.target['correo_registro'].value +'     '+event.target['pass_registro'].value);

  let email = event.target["correo_registro"].value;
  let password = event.target["pass_registro"].value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      location.reload();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  document.getElementById("form2").reset();
}

function logout() {
  auth
    .signOut()
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      // An error happened.
    });
}
