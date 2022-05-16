//Variables:
const botonIniciar= document.querySelector('.sign-in-btn');
const botonRegistro= document.querySelector('.sign-up-btn');
const inicio= document.querySelector('.sign-in');
const registro= document.querySelector('.sign-up');

//Llamado de botones:
document.addEventListener ('click', (e) => {
    //¿Quién origina el llamado? 
    if( e.target ==botonIniciar || e.target==botonRegistro){
        //Tras la detección, .toggle() mostrará u ocultará los elementos con id ‘target’.
        inicio.classList.toggle("active");
        registro.classList.toggle("active");
    }

})

class GuardarRegistro{
    constructor(nomb, email,contrasenia){
        this.nomb=nomb;
        this.email=email;
        this.contrasenia=contrasenia;
    }
}


// INICIAR SESION
class GuardarInicio{
    constructor(identificarmail,contrasenia){
        this.identificarmail=identificarmail;
        this.contrasenia=contrasenia;
  
    }
}

// let iniciarSesion=[];
// const guardarInicio=()=>{
//     formularioInicio.addEventListener("submit",function(e){
//         e.preventDefault();
//     let identificarmail=document.getElementById("datoIngreso").value;
//     let contrasenia=document.getElementById("numero").value;
  

//     fetch("prueba.txt")
//     .then(result=> console.log(result))
//     .catch(error=>console.log(error))
// })
// }
// botonInicio.addEventListener("click", ()=>{
//     guardarInicio();
// })

