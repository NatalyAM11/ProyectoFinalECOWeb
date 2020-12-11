class UsuariosComponente{

    constructor(usuarios, key){
        this.usuarios=usuarios;
        this.key=key;
    }


    render=()=>{
        
        let component=document.createElement('div');
        component.className='listaUsuarios';
        
        let infoCont=document.createElement('div');
        infoCont.innerHTML=(this.usuarios.nombre+"<br>"+this.usuarios.correo);
        infoCont.className='infoCont';

        let imagen = document.createElement('img');
        imagen.className='imagenClass';
        imagen.src="img/noImage.png";
        imagen.style="width:80px";

        component.appendChild(imagen);
        component.appendChild(infoCont);
  
        return component;
    }
   
}