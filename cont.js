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

    fetch("prueba2.txt")
    .then(response=>response.text())
    .catch(error=>console.log(error))
    
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
  

    fetch("prueba.txt")
    .then(result=> console.log(result))
    .catch(error=>console.log(error))
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
    
    
    botonSus.addEventListener=()=>{
        let suscribirse= {
            mail:mail.value
        }
    }
})