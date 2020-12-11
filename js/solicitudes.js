//auth
const database= firebase.database();
const auth=firebase.auth();

//Barra global
const TRegistrados= document.getElementById('TRegistrados');
const RegistroT= document.getElementById('RegistroT');
const Donaciones= document.getElementById('Donaciones');
const UsuariosApp=document.getElementById('UsuariosApp');

const SoliAceptadas=document.getElementById('SoliAceptadas');
const SoliEnEspera=document.getElementById('SoliEnEspera');

const bCerrarSesion= document.getElementById('bCerrarSesion');

let usuarioKey;


//Verificamos si hay alguien logueado, si no lo mandamos a la pantalla de login
auth.onAuthStateChanged(
    (user)=>{
  
      if(user===null){
        window.location.href='login.html';
      }
  
 });


//Este metodo nos permite entrar a la rama de los usuarios para ver sus solicitudes
database.ref('solicitudes/').on('value',
function (data){

    SoliEnEspera.innerHTML=' ';

    data.forEach(
        solicitud=>{
        usuarioKey=solicitud.key;    

        });

    //Estos metodos piden el id del usuario para identificar sus solicitudes, despues estas
    //van a sus respectivos componentes
        busquedaSolicitudesEspera(usuarioKey);   
        busquedaSolicitudesAceptadas(usuarioKey);
});


//Solicitudes de los usuarios en la rama "EnEspera"
busquedaSolicitudesEspera=(ukey)=>{

 database.ref('solicitudes/'+ ukey+ '/'+'EnEspera').on('value',
 function (data){

 SoliEnEspera.innerHTML=' ';

  data.forEach(
  solicitud2=>{

      let valor2= solicitud2.val();

      //lo metemos en el componenete de solicitudes en espera
         let lista= new SolicitudEnEspera(valor2, solicitud2.key,usuarioKey);
         SoliEnEspera.appendChild(lista.render());
  
        });
    });
}



//Solicitudes de los usuarios en la rama "aceptada"
busquedaSolicitudesAceptadas=(uKey)=>{
  
         database.ref('solicitudes/'+ uKey+ '/'+'aceptada').on('value',
         function (data){

         SoliAceptadas.innerHTML=' ';

          data.forEach(
          solicitud3=>{

              let valor3= solicitud3.val();
          
            //lo metemos en el componenete de solicitudes aceptadas 
                 let lista2= new SolicitudAceptada(valor3, solicitud3.key,usuarioKey);
                 SoliAceptadas.appendChild(lista2.render());
          
     });
     });
         
}



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
