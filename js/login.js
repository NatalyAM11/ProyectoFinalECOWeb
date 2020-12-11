const database= firebase.database();
const auth=firebase.auth();

const correo= document.getElementById('correo');
const contraseña= document.getElementById('contraseña');
const bLogin= document.getElementById('bLogin');

let fondo;



//Verificamos si ya hizo alguien ya hizo login, para enviarlo al index
auth.onAuthStateChanged(
    (user)=>{
  
      if(user!==null){
        window.location.href='index.html';
      }
  
 });


    //Login
    bLogin.addEventListener('click', ()=>{

    //Si los datos no son los de la fundacion da error
      if(correo.value!='profuerza00@gmail.com' || contraseña.value!='ecosistemas00'){
        alert('Los datos que ingreso son incorrectos')
        return;
      }
    

      
    auth.signInWithEmailAndPassword(correo.value, contraseña.value).then(
  
      (data)=>{
          window.location.href='index.html';
      }
  
     //Si los datos no son correctos, muestra un alert
     ).catch(
      (error)=>{
          alert('Los datos que ingreso son incorrectos');
          console.log(error)
         }
        );
  
        });