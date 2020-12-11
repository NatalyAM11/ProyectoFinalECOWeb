class SolicitudAceptada{

    constructor(solicitud, key,usuarioKey){
        this.solicitud=solicitud;
        this.key=key;
        this.usuarioKey=usuarioKey;
    }



    render=()=>{

 
         let component=document.createElement('div');
         component.className='listaSolicitudesAceptadas';

         let estadoCont= document.createElement('div');
         estadoCont.className='estado';
         
         let infoCont=document.createElement('div');
         infoCont.innerHTML=(this.solicitud.nombreTrabajador+"<br>"+ "<br>"+
         'Dirección: '+this.solicitud.direccion+"<br>"+ 
         'Hora: '+this.solicitud.horaLlegada+"<br>"+ 
         'Solicitado por: '+this.solicitud.nombreUsuario
        );
         infoCont.className='infoCont';

         let botonTermino= document.createElement('button');
         botonTermino.innerHTML=('Termino');
         botonTermino.className='botonTermino';
        
         let imagen = document.createElement('img');
            imagen.className='imagen';

            
     
             if(this.solicitud.nombreTrabajador==='Camila Hurtado'){
                imagen.src="img/señora.png";
                imagen.style="width:200px";
             }else{
                imagen.src="img/noImage.png";
                imagen.style="width:150px";
             }
       
             if(this.solicitud.nombreTrabajador==='Mauricio Reyes'){
                imagen.src="img/señor.png"; 
                imagen.style="width:200px";
            }
       
            if(this.solicitud.nombreTrabajador==='Alvaro Jose Manzano'){
                imagen.src="img/señor2.png"; 
                imagen.style="width:200px";
            }
            
            if(this.solicitud.nombreTrabajador==='Jesus Andres Hidalgo'){
                imagen.src="img/señor3.png"; 
                imagen.style="width:200px";
            }

           
        //Si le da en "Termino" la solicitud es enviada a la rama "registro" donde se guardan todas
        //las solicitudes que el usuario ha realizado

        botonTermino.addEventListener('click',()=>{
              
               //Despues de que su estado pase a disponible se cambia la solicitud a la rama "registro"
               database.ref('solicitudes/'+ this.usuarioKey+ '/'+'registro/'+this.key).set(this.solicitud).then(

                //Despues de pasarla a la rama "registro" la eliminamos de la rama "aceptada"
                ()=>{
                 database.ref('solicitudes/'+ this.usuarioKey+ '/'+'aceptada/'+this.key).set(null);

         });

        });


        component.appendChild(imagen);
        component.appendChild(infoCont);
        component.appendChild(botonTermino);
    
         return component;

     }
}