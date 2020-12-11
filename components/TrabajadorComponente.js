class TrabajadorComponente{

    constructor(trabajador, key){
        this.trabajador=trabajador;
        this.key=key;
    }


    render=()=>{
        
        let component=document.createElement('div');
        component.className='listaTrabajadores';
        
        let infoCont=document.createElement('div');
        infoCont.innerHTML=(this.trabajador.nombre+"<br>"+ "<br>"+ this.trabajador.categoria);
        infoCont.className='infoCont';

        let imagen = document.createElement('img');
        imagen.className='imagenClass';

        if(this.trabajador.nombre==='Camila Hurtado'){
            imagen.src="img/señora.png"; 
            imagen.style="width:200px";
        }else{
            imagen.src="img/noImage.png";
            imagen.style="width:100px";
        }


        if(this.trabajador.nombre==='Mauricio Reyes'){
            imagen.src="img/señor.png"; 
            imagen.style="width:200px";
        }

        if(this.trabajador.nombre==='Alvaro Jose Manzano'){
            imagen.src="img/señor2.png"; 
            imagen.style="width:200px";
        }
        
        if(this.trabajador.nombre==='Jesus Andres Hidalgo'){
            imagen.src="img/señor3.png"; 
            imagen.style="width:200px";
        }

        if(this.trabajador.nombre==='Mariana Gonzales'){
            imagen.src="img/señora2.png"; 
            imagen.style="width:200px";
        }
    
    
        component.appendChild(imagen);
        component.appendChild(infoCont);
  
        return component;
    }
   
}