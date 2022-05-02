class GuardarRegistro{
    constructor(nomb, anios, email,escribir){
        this.nomb=nomb;
        this.anios=anios;
        this.email=email;
        this.escribir=escribir;
    }
}

let arrayContacto=[];


const guardarContacto = () => {
   
    let nomb =document.getElementById("nomb").value;
    let anios =document.getElementById("age").value;
    let email =document.getElementById("email").value;
    let escribir =document.getElementById("escribir").value;

    let nuevoContacto= new GuardarRegistro(nomb, anios, email,escribir);
    arrayContacto.push(nuevoContacto);
           
    localStorage.setItem("botonContactar",JSON.stringify(botonContactar));

    if( localStorage.getItem("contactoss") !=null){
        arrayContacto=JSON.localStorage.getItem("contactoss");
        arrayContacto.push(nuevoContacto);
        localStorage.setItem("contactoss", JSON.stringify(arrayContacto));}
        else   {

        arrayContacto.push(nuevoContacto);
        localStorage.setItem("contactoss",JSON.stringify(arrayContacto));
    }
    arrayContacto.push(nuevoContacto);
    return nuevoContacto;
    
};


const botonContactar=document.getElementById("botonContactar");
botonContactar.addEventListener("click", ()=>{
    guardarContacto();
})
  


// INICIAR SESION
class GuardarInicio{
    constructor(identificarmail,contrasenia,botonInicio){
        this.identificarmail=identificarmail;
        this.contrasenia=contrasenia;
  
    }
}

let inicio=[];
const guardarInicio=()=>{
    formularioInicio.addEventListener("submit",function(e){
        e.preventDefault();
    let identificarmail=document.getElementById("datoIngreso").value;
    let contrasenia=document.getElementById("numero").value;
  
})
}
const botonInicio=document.getElementById("botonInicio");
botonInicio.addEventListener("click", ()=>{
    guardarInicio();
})


//SUSCRIBIRSE
const eform=document.getElementById("eform");
console.log("eform");
eform.addEventListener("submit", function(e){
    //verificacion:
    e.preventDefault();
    let mail=document.getElementById("mailSus").value;
    const botonSus=document.getElementById("botonSus");
    
    
    botonSus.onclick=()=>{
        let suscribirse= {
            mail:mail.value
        }
    }

})



// SI SE COMPRA EL SERVICIO X CANTIDAD DE MESES SE APLICAN DESCUENTOS. 
let precioGeneral=4800;
let promo1=0.5;
let promo2=0.10;
let promo3=0.20;
let promo4=0.30;

let botonA1=document.getElementById("botonA");
botonA1.addEventListener("click",(e)=>{
    e.preventDefault(),
    sessionStorage.setItem("boton1",JSON.stringify(botonA1)),
    console.log(botonA1)
   
})

let botonA2=document.getElementById("botonA1");
botonA2.onclick=(e)=>{
    e.preventDefault();
    sessionStorage.setItem("boton2",JSON.stringify(botonA2));
 
}

let botonA3=document.getElementById("botonA2");
botonA3.onclick=(e)=>{
    e.preventDefault();
    sessionStorage.setItem("boton3",JSON.stringify(botonA3));
 
}


//Para comprar promos, certificaciones, etc:
//Comprar promociones o talleres.
const carritoCompras=[];

const carrito=document.getElementById("carrito");

carrito.onclick=(e)=>{
    e.preventDefault();
    localStorage.setItem("carrito",JSON.stringify(carrito));

}
if (carrito.lenght===0 && console.log("El carrito está vacío"));

let estadoCompras=JSON.parse(localStorage.getItem("carrito"));

if (estadoCompras){
    carrito=estadoCompras
}else{
    carritoCompras;
}

const botonPase=document.getElementById("botonPase");

botonPase.onclick=(e)=> {
    e.preventDefault();
    swal("¡Bienvenidos!");
}
