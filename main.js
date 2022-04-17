// function datos(){
//     let nombre= prompt("Ingrese su nombre y apellido");
//     let apellido= prompt("Ingrese su nombre y apellido");
//     let DNI= parseInt(prompt("Ingresar DNI"));
//     alert ("Bienvenida/o " + nombre + apellido);    


// }
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
let alumnos= [];

const datos=()=> {
    let nombreyApellido=document.getElementById("nomApe");
    let usuario=document.getElementById("userName");
    let edad= parseInt(document.getElementById("edad"));
    let dni=parseInt(document.getElementById("DNI"));
    let email=document.getElementById("mail");
    let telefono=parseInt(document.getElementById("Telefono"));
    let telEmergencias = parseInt(document.getElementById("telEmer"));
    let direccion= parseInt(document.getElementById("dir"));


    let alumnoNuevo= new Persona (nombreyApellido, usuario, edad, dni, email,telefono, telEmergencias, direccion)
    alumnos.push(alumnoNuevo);
}

class RegistroNuevo{
    constructor(datoIngreso, contraseña){
        this.datoIngreso=datoIngreso;
        this.contraseña=contraseña;
    }
}

const register = ()=> {
    let datoIngreso=document.getElementById("datoIngreso");
    let contraseñas=document.getElementById("numero");
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


// function cuota(){
//     let dia = parseInt(prompt("Ingrese dia"));
        
//     if (1<=dia && dia<=14) {
//         alert ("Estás a término");
//     }else if (15<dia  && dia<=31){
//         alert ("Ups! Excediste la fecha límite. Se abonará la cuota con un recargo del 15%");
//     }else{
//         alert("No está dentro del calendario");
//     }
// }

// function consultar(){
//     let dia=parseInt(prompt("Ingrese dia"));
   

//     if (1<=dia && dia<=15){
//         alert ("Estás a término. Usted debe abonar $2300");
//     } else if (15<dia  && dia<31){
//         let cuentaVencida=2300+(2300*0.15);
//         alert (`Ups! Excediste la fecha límite. Usted debe abonar ${cuentaVencida}`);   
//     } else{
//         alert("No está dentro del calendario");
//     }
// }


// function bienvenida(){
//     alert("¡BIENVENIDA/O! ¿Eres alumno?");
//     let inscripto=prompt("Validar si o no");
    
//     while (inscripto != "salir"){
//         switch (inscripto){
//             case "si":
//                 datos();
//             break;
    
//             case "no":
//             alert ("¡Te esperamos!");
//             break;
    
//             default:
//             alert("Ups! Vuelve a intentar o sigue explorando.");
//             break
//         }
//     }
// }


// function opcionesIniciales(){
//     let entrada= prompt("Ingresar opcion.");
//     while (entrada != "Fin"){
//        switch (entrada){
//            case "1"://Saber si se está dentro de la fecha límite
//            cuota();
//            break;
    
//             case "2":
//             consultar();//Saber cuánto debo abonar una vez aplicado el porcentaje extra.
//             break;
    
//             case "3": //Anotarse
//             datos();
//             alert ("¡No te olvides reservar un horario!");
//             break;
    
//             default:
//             alert("Quizás deberías consultar con nuestra secretaria");
//             break
//         }
//     }
    
// }


// //Detalles del alumno en objeto
// let fichaAlumno={
    
// nombreApellido:"Candela Campagnolo",
// nombreUsuario: "cande_",
// edad:22,
// DNI:42423304,
// email:"candecampagnolo@hotmail.com",
// telefono: 342503344,
// telefonoEmergencias: 342503344,
// direccion: "Santa Fe, Capital",
// }

// //Actividad e inactividad
// let asistenciaAlumno={
//     fichaActiva: false,
//     DNI:42423304,
//     asistencia: true,
// }
// //la ficha permaneció inactiva unos meses, pero el alumno volvió
// asistenciaAlumno.fichaActiva=true;

// //constructor puedo agregar tooooooodos los alumnos


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

//Constructor 
let alumno1= new Fichas("Candela Campagnolo","cande_",22,"candecampagnolo@hotmail.com",342503344, 342503344,"Santa Fe, Capital");
let alumno2= new Fichas("Maria Ines Lupis","mariaI.1",40,"mariInes@hotmail.com",3450005340, 345607988,"Santa Fe, Capital");
let alumno3= new Fichas("Luciana Ramos","luchi",32,"lu1Ramos@hotmail.com",353453453, 52523423423,"Santa Fe, Capital");
let alumno4= new Fichas("Lucia Villalba","luciaV",25,"luciav@hotmail.com",42432534546, 5234234233,"Santa Fe, Capital");
let alumno5= new Fichas("Maria Emilia Campos","mari",22,"mari@hotmail.com",42342546,250334525244,"Santa Fe, Capital");


// //Llama a la funcion creada en clases anteriores.
// //LO COMENTO PORQUE ME MOLESTA EL CARTELITO.
// // sobreCadaPersona(nombres,crearFicha);  
// sobreCadaPersona(actividadesDelEstudio, console.log);

// let listaActividadesPrecio = [
//     {act:"Pole Sport", precio:1800},
//     {act: "Pole Exotic", precio: 1800},
//     {act: "Acrobacia", precio: 2100},
//     {act: "Preparacion", precio: 2100},
//     {act: "Flexibilidad", precio: 2100}
// ];

// listaActividadesPrecio.forEach(actividad=>{
//     console.log(`El valor de ${actividad. act} es ${actividad. precio}`);
// });

// //Busqueda y transformacion:
// let buscar = prompt("Inserte lo que desea buscar:");
// let busqueda = listaActividadesPrecio. find(persona=> {
//     return persona.actividad == buscar;
// })
// console.log(busqueda);

// //Filtros:
// let buscarActividades = listaActividadesPrecio.filter (act=> act.precio>1800);
// console.log (buscarActividades);

// //Some:
// //No existe esta actividad en la lista
// console.log(listaActividadesPrecio.some(actividad => actividad.act == "futbol"));


// //Transformacion:
// //Interés por atraso en el pago:
// let listaNueva = listaActividadesPrecio.map(actividad=> {
//     return {
//         nombre:actividad.nombre,
//         precio:actividad.precio * 0.15,
//     }
// });
    
// console.log(listaNueva);

console.log(new Date(2022,4,11));

//Acceder al DOM:
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

// //Definición de eventos:
// const aJugador={
//     mostrar:true
// }
// //SIN LA "S" NO ME LO TOMA:
// const btn=document.getElementsByClassName("btn");
// console.log(btn);
// const foto=document.getElementsByClassName("foto");
// console.log(foto);

// btn.onclick = () => {
//     if(aJugador.mostrar){
//        foto.style.display="block";
//         mostrar=false;
//     } else {
//         foto.style.display="none";
//         mostrar=true;
//     }
// }



