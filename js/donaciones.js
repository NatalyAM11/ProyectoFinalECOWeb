//Database
const database= firebase.database();
const auth=firebase.auth();

//Barra global
const RegistroT= document.getElementById('RegistroT');
const TRegistrados= document.getElementById('TRegistrados');
const Solicitudes= document.getElementById('Solicitudes');
const UsuariosApp=document.getElementById('UsuariosApp');
const Donaciones=document.getElementById('Donaciones');
const DonacionesRegistrados=document.getElementById('DonacionesRegistrados');

//Atributos

//Verificamos si hay alguien logueado, si no lo mandamos a la pantalla de login
auth.onAuthStateChanged(
    (user)=>{
  
      if(user===null){
        window.location.href='login.html';
      }
  
 });

//Cargamos todos los datos de los donaciones de cada categoria
//Donaciones de Dinero
let dineroCantidadd;
const dineroTotalCantidad = document.getElementById('dineroTotalCantidad');
    database.ref("donacionesAceptadas/dinero").on("value",function(data){
        dineroCantidadd = 0;
        data.forEach(function(cantidadDatabase){
                    let value = cantidadDatabase.val();
                    dineroCantidadd = dineroCantidadd + value.dinero;
                    dineroTotalCantidad.innerHTML = dineroCantidadd;
        })
    });

var separarPalabras;
const ropaCantidad = document.getElementById('ropaCantidad');
database.ref("donacionesAceptadas/ropa").on("value",function(data){
        dineroCantidadd = 0;
        data.forEach(function(cantidadDatabase){
                    let value = cantidadDatabase.val();
                    separarPalabras = value.inforopa.split(":");
                    dineroCantidadd = dineroCantidadd + parseInt(separarPalabras[1]);
                    ropaCantidad.innerHTML = dineroCantidadd;
        })
    });


//Pasa a la pantalla de registro de trabajadores
RegistroT.addEventListener('click', ()=>{

    window.location.href='index.html';
});


//Pasa a la pantalla donde estan las solicitudes de los usuarios
Solicitudes.addEventListener('click', ()=>{

    window.location.href='solicitudes.html';
});

//Pasa a la pantalla donde estan todos los trabajadores registrados
TRegistrados.addEventListener('click', ()=>{

    window.location.href='TRegistrados.html';
});

//Pasa a la pantalla donde estan todos los usuarios registrados en la app
UsuariosApp.addEventListener('click', ()=>{

    window.location.href='usuariosApp.html';
});

//Pasa a la pantalla donde estan donaciones
Donaciones.addEventListener('click', ()=>{

    window.location.href='donaciones.html';
});

//Pasa a la pantalla donde estan donaciones registrados
DonacionesRegistrados.addEventListener('click', ()=>{

    window.location.href='donacionesRegistrados.html';
});

//Cerrar sesion
bCerrarSesion.addEventListener('click', ()=>{

    auth.signOut().then(
        ()=>{
            window.location.href='login.html';
        }
    ).catch(
        (error)=>{
            alert(error.message);
        }
    );

});