function datos(){
    let nombre= prompt("Ingrese su nombre y apellido");
    let apellido= prompt("Ingrese su nombre y apellido");
    let DNI= parseInt(prompt("Ingresar DNI"));
    alert ("Bienvenida/o " + nombre + apellido);    
}

function cuota(){
    let dia = parseInt(prompt("Ingrese dia"));
    
    if (1<=dia && dia<=14) {
        alert ("Estás a término");
    }else if (15<dia  && dia<=31){
        alert ("Ups! Excediste la fecha límite. Se abonará la cuota con un recargo del 15%");
    }else{
        alert("No está dentro del calendario");
    }
}

function consultar(){
    let dia=parseInt(prompt("Ingrese dia"));
   

    if (1<=dia && dia<=15){
        alert ("Estás a término. Usted debe abonar $2300");
    } else if (15<dia  && dia<31){
        let cuentaVencida=2300+(2300*0.15);
        alert (`Ups! Excediste la fecha límite. Usted debe abonar ${cuentaVencida}`);   
    } else{
        alert("No está dentro del calendario");
    }
}


function bienvenida(){
    alert("¡BIENVENIDA/O! ¿Eres alumno?");
    let inscripto=prompt("Validar si o no");
    
    while (inscripto != "salir"){
        switch (inscripto){
            case "si":
                datos();
            break;
    
            case "no":
            alert ("¡Te esperamos!");
            break;
    
            default:
            alert("Ups! Vuelve a intentar o sigue explorando.");
            break
        }
    }
}


function opcionesIniciales(){
    let entrada= prompt("Ingresar opcion.");
    while (entrada != "Fin"){
       switch (entrada){
           case "1"://Saber si se está dentro de la fecha límite
           cuota();
           break;
    
            case "2":
            consultar();//Saber cuánto debo abonar una vez aplicado el porcentaje extra.
            break;
    
            case "3": //Anotarse
            datos();
            alert ("¡No te olvides reservar un horario!");
            break;
    
            default:
            alert("Quizás deberías consultar con nuestra secretaria");
            break
        }
    }
    
}


//Detalles del alumno en objeto
let fichaAlumno={
    
nombreApellido:"Candela Campagnolo",
nombreUsuario: "cande_",
edad:22,
DNI:42423304,
email:"candecampagnolo@hotmail.com",
telefono: 342503344,
telefonoEmergencias: 342503344,
direccion: "Santa Fe, Capital",
}

//Actividad e inactividad
let asistenciaAlumno={
    fichaActiva: false,
    DNI:42423304,
    asistencia: true,
}
//la ficha permaneció inactiva unos meses, pero el alumno volvió
asistenciaAlumno.fichaActiva=true;

//constructor puedo agregar tooooooodos los alumnos

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

let alumno1= new Fichas("Candela Campagnolo","cande_",22,"candecampagnolo@hotmail.com",342503344, 342503344,"Santa Fe, Capital");

const crearFicha=()=> {
    let nombreApellido=prompt("¿Cual es tu nombre?");
    let nombreUsuario=prompt("¿Cual es tu nombre de usuario?");
    let edad=parseInt("¿Cual es tu edad?") ;
    let DNI=parseInt("¿Cual es tu DNI?");
    let email=prompt("¿Cual es tu direccion de email?");
    let telefono=parseInt(prompt("¿Cual es tu telefono?")) ;
    let telefonoEmergencias=parseInt(prompt("¿Cual es tu telefono de emergencias?"));
    let direccion= parseInt(prompt("¿Cual es tu direccion de email?")) ;
}
