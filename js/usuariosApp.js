//auth
const database= firebase.database();
const auth=firebase.auth();

//Barra global
const RegistroT= document.getElementById('RegistroT');
const TRegistrados= document.getElementById('TRegistrados');
const Solicitudes= document.getElementById('Solicitudes');
const Donaciones= document.getElementById('Donaciones');

const bCerrarSesion= document.getElementById('bCerrarSesion');

const listaTodosUsuarios= document.getElementById('listaTodosUsuarios');


//Cargamos todos los datos de los usuarios registrados

//Trabajadores de limpieza
database.ref('users/').on('value',
function (data){
 
    listaTodosUsuarios.innerHTML=' ';

    data.forEach(
        usuario=>{

            let valor= usuario.val();
            let lista= new UsuariosComponente(valor, usuario.key);
            listaTodosUsuarios.appendChild(lista.render());
             
        });
});


//Verificamos si hay alguien logueado, si no lo mandamos a la pantalla de login
auth.onAuthStateChanged(
    (user)=>{
  
      if(user===null){
        window.location.href='login.html';
      }
  
 });


//Pasa a la pantalla de registro de trabajadores
RegistroT.addEventListener('click', ()=>{

    window.location.href='index.html';
});

//Pasa a la pantalla donde estan las solicitudes de los usuarios
Solicitudes.addEventListener('click', ()=>{

    window.location.href='solicitudes.html';
});

//Pasa a la pantalla donde estan las donaciones de los usuarios
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
