class Persona{
    constructor(nombreyApellido, usuario, edad, dni, email,telefono, telEmergencias, direccion){
        this.nombreyApellido=nombreyApellido;
        this.usuario=usuario;
        this.edad=edad;
        this.dni=dni;
        this.email=email;
        this.telefono=telefono;
        this.telEmergencias=telEmergencias;
        this.direccion=direccion;
    }
}

const alumnos= [];

const datosAlumnado= () => {
    let nombreyApellido=document.getElementById("nomApe");
    let usuario=document.getElementById("userName");
    let edad= parseInt(document.getElementById("edad"));
    let dni=parseInt(document.getElementById("DNI"));
    let email=document.getElementById("mail");
    let telefono=parseInt(document.getElementById("Telefono"));
    let telEmergencias = parseInt(document.getElementById("telEmer"));
    let direccion= parseInt(document.getElementById("dir"));


    let alumnoNuevo= new Persona (nombreyApellido, usuario, edad, dni, email,telefono, telEmergencias, direccion);
    alumnos.push(alumnoNuevo);
    localStorage.setItem("alum",JSON.stringify(alumnos));
    
   
}

class RegistroNuevo{
    constructor(datoIngreso, contrasenia){
        this.datoIngreso=datoIngreso;
        this.contraseña=contrasenia;
    }
}

const register = ()=> {
    let datoIngreso=document.getElementById("datoIngreso");
    let contrasenias=document.getElementById("numero");
    
    let local= new RegistroNuevo(datoIngreso, contrasenias);
    alumnos.push(alumnoNuevo);
    sessionStorage.setItem("alum",JSON.stringify(alumnos));
}

//EVENTOS ASOCIADOS
const botones1= document.querySelector("#botonRegistro");
console.log(botones1);
const reg=document.getElementById("datoIngreso");
const num=document.getElementById("numero");
reg.onkeydown=()=>{
    console.log(reg.value);
}
num.onkeydown =()=>{
    console.log(num.value);
}
botones1.onclick=(e)=>{
    e.preventDefault();
    console.log(botones1.value);
}

const nombreyApellido=document.getElementById("nomApe");
const usuario=document.getElementById("userName");
const edad= parseInt(document.getElementById("edad"));
const dni=parseInt(document.getElementById("DNI"));
const email=document.getElementById("mail");
const telefono=parseInt(document.getElementById("Telefono"));
const telEmergencias = parseInt(document.getElementById("telEmer"));
const direccion= parseInt(document.getElementById("dir"));

nomApe.onkeydown=()=>{
    console.log(nomApe.value);
}

nombreyApellido.addEventListener("input", ()=>{
    if (nomApe.value=="") {
        nombreyApellido.nomApe= "vacio";
        console.log("Esto no me sirve");
    } else{
        nombreyApellido.nomApe="validado"
    }
})

userName.onkeydown=()=>{
    console.log(userName.value);
}
edad.onkeydown=()=>{
    console.log(edad.value);
}
DNI.onkeydown=()=>{
    console.log(DNI.value);
}
mail.onkeydown=()=>{
    console.log(mail.value);
}
Telefono.onkeydown=()=>{
    console.log(Telefono.value);
}
telEmer.onkeydown=()=>{
    console.log(telEmer.value);
}
dir.onkeydown=()=>{
    console.log(dir.value);
}

const botones2= document.querySelector("#btnContactar");
botones2.onclick=(e)=>{
    e.preventDefault();
    console.log(botones2.value);
}


class Fichas {
    constructor(nombreApellido, nombreUsuario, edad, DNI, email, telefono, telefonoEmergencias, direccion) {
        this.nombreApellido = nombreApellido;
        this.nombreUsuario = nombreUsuario;
        this.edad = edad;
        this.DNI = DNI;
        this.email = email;
        this.telefono = telefono;
        this.telefonoEmergencias = telefonoEmergencias;
        this.direccion = direccion;

    }
}
class Actividad {
    constructor(fichaActiva, DNI, asistencia) {
        this.fichaActiva = fichaActiva;
        this.DNI = DNI;
        this.asistencia = asistencia;
    }
}



//Declaracion de array
let actividadesDelEstudio= ["Preparasión fizica","Pole Sport", "Pole Dance", "Floorwork", "Flexibilidad"];

// Recorriendo mi array
for (let i=0; i>actividadesDelEstudio.length;i++){
    console.log(actividadesDelEstudio[i]);

}


//Metodos
actividadesDelEstudio.push("Entrenamiento personalizado");
console.log(actividadesDelEstudio);
actividadesDelEstudio.shift(actividadesDelEstudio);//elimina el primer elemento.
console.log(actividadesDelEstudio);
actividadesDelEstudio.unshift("Preparación física");
console.log(actividadesDelEstudio);

//Join
let listaString = actividadesDelEstudio.join(", ");

//Descartar actividades del lugar:
console.log(actividadesDelEstudio.includes("football"));
console.log(actividadesDelEstudio.includes("Pole Sport"));

//Aplicando funciones que aceptan funciones como parámetro
function sobreCadaPersona(array, hacer){
    for (const persona of array){
        hacer (persona);
    }
}

// //Lista de nombres de alumnos:
let nombres=["Maria Ines", "Luciana Ramos","Lucia Villalba", "Maria Emilia"];
let cantidad=5;

// //Constructor 
// let alumno1= new Fichas("Candela Campagnolo","cande_",22,"candecampagnolo@hotmail.com",342503344, 342503344,"Santa Fe, Capital");
// let alumno2= new Fichas("Maria Ines Lupis","mariaI.1",40,"mariInes@hotmail.com",3450005340, 345607988,"Santa Fe, Capital");
// let alumno3= new Fichas("Luciana Ramos","luchi",32,"lu1Ramos@hotmail.com",353453453, 52523423423,"Santa Fe, Capital");
// let alumno4= new Fichas("Lucia Villalba","luciaV",25,"luciav@hotmail.com",42432534546, 5234234233,"Santa Fe, Capital");
// let alumno5= new Fichas("Maria Emilia Campos","mari",22,"mari@hotmail.com",42342546,250334525244,"Santa Fe, Capital");
//Mediante clases:
console.log(document.getElementsByClassName("indexBarra"));

//Mediante etiquetas
let textos=document.getElementsByTagName("p");
for (const texto of textos){
    console.log(texto);
}

//Mediante Query:
//Utilizo este para que me traiga toda la informacion.
console.log(document.querySelectorAll("div > input"));//el div con hijo input

let formularios=document.querySelector("form");
console.log(formularios.innerHTML);


//Definición de eventos:
const aUser={
    mostrar:true
}
console.log(aUser);
// //SIN LA "S" NO ME LO TOMA:
const btn=document.getElementById("btn");
console.log(btn);
const foto=document.getElementsByClassName("foto");
console.log(foto);

function mostrar(){
   foto[0].style.display="block";

}
function ocultar(){
  foto[0].style.display="none";
  
}
btn.onclick = () => {
    if (aUser.mostrar){
        ocultar();
        aUser.mostrar=false;
    } else {
        mostrar();
        aUser.mostrar=true;
    }
}