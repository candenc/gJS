//Variables:
const botonIniciar= document.querySelector('.sign-in-btn');
const botonRegistro= document.querySelector('.sign-up-btn');
const inicio= document.querySelector('.sign-in');
const registro= document.querySelector('.sign-up');

const signupbutton=document.querySelector("#signupbutton");
const signinbutton=document.querySelector("#signinbutton");


//Llamado de botones:
//Oscilar entre iniciar sesion/registrarse:
document.addEventListener ('click', (e) => {
    //¿Quién origina el llamado? 
    if( e.target ==botonIniciar || e.target==botonRegistro){
        //Tras la detección, .toggle() mostrará u ocultará los elementos con id ‘target’.
        inicio.classList.toggle("active");
        registro.classList.toggle("active");
    }

})

signupbutton.addEventListener("click",() => {
    GuardarRegistroClientes();
})


class GuardarRegClientes{
    constructor(nombreC,emailC,edadC, contraC){
        this.nombreC=nombreC;
        this.emailC=emailC;
        this.edadC=edadC;
        this.contraC=contraC;
    }
}

//Array donde guardamos registros
let registros=[];


const GuardarRegistroClientes = () => {
   
    let nombreC =document.getElementById("nombreC").value;
    let emailC =document.getElementById("emailC").value;
    let edadC =document.getElementById("edadC").value;
    let contraC =document.getElementById("contraC").value;

    //A fin de generar nuevos ingresos:
    let nuevoregistro= new GuardarRegClientes(nombreC, emailC, edadC,contraC);
    registros.push(nuevoregistro);
           
    localStorage.setItem("signupbutton", JSON.stringify(signupbutton));
        
    if( localStorage.getItem("listaUsuarios") !=null){
        registros=JSON.localStorage.getItem("listaUsuarios");
        registros.push(nuevoregistro);
        localStorage.setItem("listaUsuarios", JSON.stringify(registros));}
        else   {

        registros.push(nuevoregistro);
        localStorage.setItem("listaUsuarios",JSON.stringify(registros));
    }
    registros.push(nuevoregistro);
    return nuevoregistro;
    
    
};



  

