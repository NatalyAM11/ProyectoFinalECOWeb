class SolicitudEnEspera{

    constructor(solicitud, key,usuarioKey){
        this.solicitud=solicitud;
        this.key=key;
        this.usuarioKey=usuarioKey;
    }


    render=()=>{

         let component=document.createElement('div');
         component.className='listaSolicitudesEspera';
         
         let infoCont=document.createElement('div');
         infoCont.innerHTML=(this.solicitud.nombreTrabajador+"<br>"+ "<br>"+
         'Dirección: '+this.solicitud.direccion+"<br>"+ 
         'Hora: '+this.solicitud.horaLlegada+"<br>"+ 
         'Solicitado por: '+this.solicitud.nombreUsuario
        );
        
         infoCont.className='infoCont';

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

      

         //Botones
         let botonAceptarE= document.createElement('button');
         botonAceptarE.innerHTML=('Aceptar');
         botonAceptarE.className='botonAceptarE';

         let botonRechazarE= document.createElement('button');
         botonRechazarE.innerHTML=('Rechazar');
         botonRechazarE.className='botonRechazarE';

     
         botonAceptarE.addEventListener('click',()=>{
    
                //Pasa a la rama "aceptada"
                database.ref('solicitudes/'+this.usuarioKey+ '/'+'aceptada/'+this.key).set(this.solicitud).then(

                    //Entonces la eliminamos de la rama "EnEspera"
                    ()=>{
                     database.ref('solicitudes/'+this.usuarioKey+ '/'+'EnEspera/'+this.key).set(null);

                    });

            });
    



        //Si le da en "rechazar" la solicitud se envia a la rama "rechazada"
        botonRechazarE.addEventListener('click',()=>{
            database.ref('solicitudes/'+this.usuarioKey+ '/'+'rechazada/'+this.key).set(this.solicitud).then(

                //Entonces la eliminamos de la rama "aceptada"
                ()=>{
                 database.ref('solicitudes/'+this.usuarioKey+ '/'+'EnEspera/'+this.key).set(null);

                });
        });

        
         component.appendChild(imagen);
         component.appendChild(infoCont);
         component.appendChild(botonRechazarE);
         component.appendChild(botonAceptarE);
         
         return component;
     }

}