//Uso de botones y guardar informacion mediante LS. 
const botonContactar=document.getElementById("botonContactar");
const eform=document.getElementById("eform");

botonContactar.addEventListener("click", ()=>{
    guardarContacto();
})
class GuardarRegistro{
    constructor(nomb,anios, email,contrasenia){
        this.nomb=nomb;
        this.anios=anios;
        this.email=email;
        this.contrasenia=contrasenia;
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
    
    //Traer informacion con fetch:
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



  

