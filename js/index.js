//auth
const database= firebase.database();
const auth=firebase.auth();

//Barra global
const TRegistrados= document.getElementById('TRegistrados');
const Solicitudes= document.getElementById('Solicitudes');
const Donaciones= document.getElementById('Donaciones');
const UsuariosApp=document.getElementById('UsuariosApp');

//datos trabajador
const nombreT= document.getElementById('nombreT');
const telefonoT= document.getElementById('telefonoT');
const categoriaT= document.getElementById('categoriaT');
const cedulaT= document.getElementById('cedulaT');
const direccionT= document.getElementById('direccionT');

const bAgregar= document.getElementById('bAgregar');
const listaTodosTrabajadores= document.getElementById('listaTodosTrabajadores');

//categorias trabajo
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


//metodo para agregar un nuevo trabajador
bAgregar.addEventListener('click', ()=>{

    let referencia;
    let id;
    let esta=false;

    if(nombreT.value== '' || telefonoT.value== ''|| categoriaT.value== ''|| cedulaT.value== ''|| direccionT.value== ''){
        alert('Debe llenar todos los datos');
        return;
    }


//llamamos los datos de todos los trabajadores en todas las categorias para verificar si ya estan registrados
//Trabajadores de limpieza
database.ref('trabajadores/'+'limpieza').on('value',
function (data){
    data.forEach(
        trabajador=>{
            let valor= trabajador.val();
            if(valor.cedula===cedulaT.value){
                esta=true;
            }          
        });
});
console.log(esta);
//Trabajadores de reparación
database.ref('trabajadores/'+'reparacion').on('value',
function (data){
    data.forEach(
        trabajador=>{
            let valor= trabajador.val();           
            if(valor.cedula===cedulaT.value){
                esta=true;
            }                 
        });
});

//Trabajadores de exteriores
database.ref('trabajadores/'+'exteriores').on('value',
function (data){
    data.forEach(
        trabajador=>{
            let valor= trabajador.val();          
            if(valor.cedula===cedulaT.value){
                esta=true;
            }       
        });
});

//Trabajadores de oficios varios
database.ref('trabajadores/'+'oficiosVarios').on('value',
function (data){
    data.forEach(
        trabajador=>{
            let valor= trabajador.val();          
            if(valor.cedula===cedulaT.value){
                esta=true;
            }              
        });
});

    
    //Validamos la categoria del trabajador para enviarlo a su respectiva rama
    if(categoriaT.value=='reparacion' || categoriaT.value=='reparación' || 
        categoriaT.value=='Reparacion' || categoriaT.value=='Reparación'){
        referencia= database.ref('trabajadores/'+'reparacion').push();
    }

    if(categoriaT.value=='limpieza' || categoriaT.value=='Limpieza'){
        referencia= database.ref('trabajadores/'+'limpieza').push();
    }

    if(categoriaT.value=='exteriores' || categoriaT.value=='Exteriores'){
        referencia= database.ref('trabajadores/'+'exteriores').push();
    }

    if(categoriaT.value=='oficios varios' || categoriaT.value=='Oficios varios'){
        referencia= database.ref('trabajadores/'+'oficiosVarios').push();
    }

    //Verificamos de que si introduce una categoria de trabajo que no existe, no lo deja registrar al trabajador
     if(categoriaT.value!='oficios varios' && categoriaT.value!='Oficios varios' && 
     categoriaT.value=='Reparacion' && categoriaT.value=='Reparación' &&
        categoriaT.value!='reparacion' && categoriaT.value!='reparación' &&
            categoriaT.value!='limpieza' && categoriaT.value!='Limpieza' &&
                categoriaT.value!='exteriores' && categoriaT.value!='Exteriores'){

                    alert('La categoria que introdujo no existe');
                    
    }



    //id del nuevo trabajador
    id=referencia.key;

    //creamos el objeto trabajador
    objetoTrabajador={
        nombre:nombreT.value,
        telefono:telefonoT.value,
        categoria:categoriaT.value,
        cedula:cedulaT.value,
        direccion:direccionT.value,
        id:id,
        estado:"disponible",
        cobro:5000
    }
console.log(esta);

    //Lo enviamos a firebase si el usuario no esta registrado
    if(esta===false){
        referencia.set(objetoTrabajador);
        alert('Trabajador registrado correctamente');
        esta=false;
    }

    //Si ya esta registrado, no deja hacer el registro
    if(esta===true){
        alert('Este trabajador ya esta registrado'); 
        esta=false;
        return;
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
