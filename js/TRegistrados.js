//auth
const database= firebase.database();
const auth=firebase.auth();

//Barra global
const RegistroT= document.getElementById('RegistroT');
const Solicitudes= document.getElementById('Solicitudes');
const Donaciones= document.getElementById('Donaciones');
const UsuariosApp=document.getElementById('UsuariosApp');


const reparacionCont= document.getElementById('reparacionCont');
const limpiezaCont= document.getElementById('limpiezaCont');
const exterioresCont= document.getElementById('exterioresCont');
const oficiosVariosCont= document.getElementById('oficiosVariosCont');

const bCerrarSesion= document.getElementById('bCerrarSesion');


//Verificamos si hay alguien logueado, si no lo mandamos a la pantalla de login
auth.onAuthStateChanged(
    (user)=>{
  
      if(user===null){
        window.location.href='login.html';
      }
  
 });
 

//Cargamos todos los datos de los trabajadores de cada categoria

//Trabajadores de limpieza
database.ref('trabajadores/'+'limpieza').on('value',
function (data){
 
    limpiezaCont.innerHTML=' ';

    data.forEach(
        trabajador=>{

            let valor= trabajador.val();
            let lista= new TrabajadorComponente(valor, trabajador.key);
            limpiezaCont.appendChild(lista.render());
             
        });
});


//Trabajadores de reparación
database.ref('trabajadores/'+'reparacion').on('value',
function (data){
 
    reparacionCont.innerHTML=' ';

    data.forEach(
        trabajador=>{

            let valor= trabajador.val();
            let lista= new TrabajadorComponente(valor, trabajador.key);
            reparacionCont.appendChild(lista.render());
             
        });
});

//Trabajadores de exteriores
database.ref('trabajadores/'+'exteriores').on('value',
function (data){
 
    exterioresCont.innerHTML=' ';

    data.forEach(
        trabajador=>{

            let valor= trabajador.val();
            let lista= new TrabajadorComponente(valor, trabajador.key);
            exterioresCont.appendChild(lista.render());
             
        });
});

//Trabajadores de oficios varios
database.ref('trabajadores/'+'oficiosVarios').on('value',
function (data){
 
    oficiosVariosCont.innerHTML=' ';

    data.forEach(
        trabajador=>{

            let valor= trabajador.val();
            let lista= new TrabajadorComponente(valor, trabajador.key);
            oficiosVariosCont.appendChild(lista.render());
             
        });
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
