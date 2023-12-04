
// funcion registro/modificar/eliminar: ///////////////////////////////

function addProducto(event){
    
    event.preventDefault();
    console.log(event.target['nombre_producto'].value +'     '+
        event.target['descripcion_producto'].value+'     '+
        event.target['precio_producto'].value+'     '+
        document.getElementById('imagen_producto').files[0]
        );
    
    document.getElementById('form_registro').reset();
}

function cerrar_sesion(){
    auth.signOut().then(() => {
        // Sign-out successful.
        location.href='../index.html'
      }).catch((error) => {
        // An error happened.
      });
}


// Verificar que el usuario este logeado en la pagina //////////////////

window.onload=verificar_login();

function verificar_login(){
  auth.onAuthStateChanged(user=>{
    if(user){

    }else{
      location.href='../index.html';  
    }
  });
}