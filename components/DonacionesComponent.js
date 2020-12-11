class DonacionesComponent{

    constructor(donador, key){
        this.donador=donador;
        this.key=key;
    }

    renderRopa=()=>{
        //component div
        let component=document.createElement('div');
        component.className='listaDonadores';

        //Imagen de la ropa
        let imagen = document.createElement('img');
        imagen.className='imagenClass';
        imagen.src="img/donarRopa.png";
        imagen.style="width:200px"; 

        //Los textos que salen al lado del imagen de la ropa
        let donanteInfo=document.createElement('div');
        donanteInfo.innerHTML=('Donante: ' + this.donador.nombre + '<br>'+'<br>' +
            'Dirección: '+ this.donador.direccion + '<br>'+'<br>' +
            'Fecha: ' + this.donador.fechaderecogida
            );

        //let donanteHora=document.createElement('div');
        //donanteHora.innerHTML=this.donante.horaderecogida;

        //Los botones
        let botonRecoger=document.createElement('button');
        botonRecoger.innerHTML = 'Recoger';
        botonRecoger.className = 'recogerBtn';

        let botonCerrar=document.createElement('button');
        botonCerrar.innerHTML = 'Rechazar';
        botonCerrar.className = 'rechazarBtn';

        //Para imprimir todos los componentes que cree
        component.appendChild(imagen);
        component.appendChild(donanteInfo);
        
        component.appendChild(botonCerrar);
        component.appendChild(botonRecoger);

        //Aplicar los metodos de los botones
        //Metodo de rechazar del botonCerrar
        botonRecoger.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('donacionesAceptadas/ropa/'+this.donador.id).set({
                id: this.donador.id,
                idusuario: this.donador.idusuario,
                cantidad: 1,
                inforopa: this.donador.inforopa,
                estado: 'recibido'
            }
            );
            database.ref('donaciones/ropa/'+this.donador.id).set(null);
        });

        //Metodo de rechazar del botonCerrar
        botonCerrar.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('donaciones/ropa/'+this.donador.id).set(null);
        });
        
        return component;
    }

    renderDinero=()=>{
        //component div
        let component=document.createElement('div');
        component.className='listaDonadores';

        //Imagen de donación
        let imagen = document.createElement('img');
        imagen.className='imagenClass';
        imagen.src="img/donarDinero.png";
        imagen.style="width:200px"; 

        //Los textos que salen al lado del imagen de la ropa
        let donanteInfo=document.createElement('p');
        donanteInfo.innerHTML=('Donante: ' + this.donador.nombre + '<br><br>'+
        'Fecha de transacción: ' + this.donador.fecha + '<br><br>'+
        'Hora: ' + this.donador.hora);
        //'Fecha de transacción: ' + "10/12/2020"+ '<br><br>');

        //Los botones
        let botonRecoger=document.createElement('button');
        botonRecoger.innerHTML = 'Recoger';
        botonRecoger.className = 'recogerBtn';

        let botonCerrar=document.createElement('button');
        botonCerrar.innerHTML = 'Rechazar';
        botonCerrar.className = 'rechazarBtn';

        //Para imprimir todos los componentes que cree
        component.appendChild(imagen);
        component.appendChild(donanteInfo);
        
        component.appendChild(botonCerrar);
        component.appendChild(botonRecoger);

        //Aplicar los metodos de los botones
        //Metodo de rechazar del botonCerrar
        botonRecoger.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('donacionesAceptadas/dinero/'+this.donador.id).set({
                id: this.donador.id,
                idusuario: this.donador.idusuario,
                dinero: this.donador.cantidad,
                estado: 'recibido'
            }
            );
            database.ref('donaciones/dinero/'+this.donador.tipo+'/'+this.donador.id).set(null);
        });

        //Metodo de rechazar del botonCerrar
        botonCerrar.addEventListener('click', ()=>{
            const database = firebase.database();
            database.ref('donaciones/dinero/'+this.donador.tipo+'/'+this.donador.id).set(null);
        });
        
        return component;
    }
}