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

//Atributos del HTML
const ropaLista = document.getElementById('ropaLista');
const dineroLista = document.getElementById('dineroLista');

//Botones
const alimentosBtn = document.getElementById('alimentosBtn');
const medicamentosBtn = document.getElementById('medicamentosBtn');
const infraestructuraBtn = document.getElementById('infraestructuraBtn');
const educacionBtn = document.getElementById('educacionBtn');
const ropaBtn = document.getElementById('ropaBtn');

//Otros atributos para validar que tipo de info quiero
let boton = "Educacion";
let botonropa;

//Verificamos si hay alguien logueado, si no lo mandamos a la pantalla de login
auth.onAuthStateChanged(
    (user)=>{
  
      if(user===null){
        window.location.href='login.html';
      }
  
 });

//Comandos de los botones
alimentosBtn.addEventListener('click', ()=>{
    boton = "Alimentacion";
    BotonesValidar(boton);
    console.log(boton);
});

medicamentosBtn.addEventListener('click', ()=>{
    boton = 'Medicamentos';
    BotonesValidar(boton);
    console.log(boton);
});

infraestructuraBtn.addEventListener('click', ()=>{
    boton = 'Infraestructura';
    BotonesValidar(boton);
    console.log(boton);
});

educacionBtn.addEventListener('click', ()=>{
    boton = 'Educacion';
    BotonesValidar(boton);
    console.log(boton);
})

//Cargamos todos los datos de los donaciones de cada categoria
//Donaciones de Ropa
database.ref('donaciones/ropa').on('value',
function (data){
    ropaLista.innerHTML=' ';
    data.forEach(
            donador=>{
                let valor= donador.val();
                let lista= new DonacionesComponent(valor, donador.key);
                ropaLista.appendChild(lista.renderRopa());       
    });
});

//Donaciones de Dinero
BotonesValidar = (boton)=>{
    database.ref('donaciones/dinero/'+boton).on('value',
    function (data){
        console.log(boton);
        dineroLista.innerHTML=' ';
        data.forEach(
            donador=>{
                let valor= donador.val();
                let lista= new DonacionesComponent(valor, donador.key);
                dineroLista.appendChild(lista.renderDinero());       
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