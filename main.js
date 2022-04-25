


// numero.addEventListener("submit", e=>{
//     e.preventDefault();

//     if (numero.nodeValue.length<8){
//         alert("Contraseña demasiado corta. Vuelve a intentar");
//     }
// })


//SI SE COMPRA EL SERVICIO X CANTIDAD DE MESES SE APLICAN DESCUENTOS. 
// let precioGeneral=4800;
// let promo1=0.5;
// let promo2=0.10;
// let promo3=0.20;
// let promo4=0.30;

// let botonA1=document.getElementById("botonA");

// // botonA1.onclick=(e)=>{
// //    e.preventDefault();
// //    console.log(botonA1);
// //    localStorage.setItem("boton1",JSON.stringify(botonA1));

// // }

// botonA1.addEventListener("click",(e)=>{
//     e.preventDefault(),
//     console.log(botonA1),
//     localStorage.setItem("boton1",JSON.stringify(botonA1))
// })
// let botonA2=document.getElementById("botonA1");
// botonA2.onclick=(e)=>{
//     e.preventDefault();
//     localStorage.setItem("boton2",JSON.stringify(botonA2));
 
// }
// let botonA3=document.getElementById("botonA2");
// botonA3.onclick=(e)=>{
//     e.preventDefault();
//     localStorage.setItem("boton3",JSON.stringify(botonA3));
 
// }
// let botonA4=document.getElementById("botonA3");
// botonA4.onclick=(e)=>{
//     e.preventDefault();
//     localStorage.setItem("boton4",JSON.stringify(botonA4));
 
// }
// function elegirPromo(boton){
//     let preciofinal;
//     switch (boton){
//         case botonA1: 
//         precioconDesc=precioGeneral-(precioGeneral*promo1);
//         break;

//         case botonA2: 
//         precioconDesc=precioGeneral-(precioGeneral*promo2);
//         break;
       
//         case botonA3: 
//         precioconDesc=precioGeneral-(precioGeneral*promo3);
//         break;

//         case botonA4: 
//         precioconDesc=precioGeneral-(precioGeneral*promo4);
//         break;
//     }
//     return preciofinal;
// }




// // //EVENTOS ASOCIADOS
// const botones1= document.querySelector("#botonRegistro");
// console.log(botones1);
// const reg=document.getElementById("datoIngreso");
// const num=document.getElementById("numero");
// reg.onkeydown=()=>{
//     console.log(reg.value);
// }
// num.onkeydown =()=>{
//     console.log(num.value);
// }
// botones1.onclick=(e)=>{
//     e.preventDefault();
//     console.log(botones1.value);
// }

// const nombreyApellido=document.getElementById("nomApe");
// const usuario=document.getElementById("userName");
// const edad= parseInt(document.getElementById("edad"));
// const dni=parseInt(document.getElementById("DNI"));
// const email=document.getElementById("mail");
// const telefono=parseInt(document.getElementById("Telefono"));
// const direccion= parseInt(document.getElementById("dir"));

// nomApe.onkeydown=()=>{
//     console.log(nomApe.value);
// }

// nombreyApellido.addEventListener("input", ()=>{
//     if (nomApe.value=="") {
//         nombreyApellido.nomApe= "vacio";
//         console.log("Esto no me sirve");
//     } else{
//         nombreyApellido.nomApe="validado"
//     }
// })

// userName.onkeydown=()=>{
//     console.log(userName.value);
// }
// edad.onkeydown=(e)=>{
//     e.preventDefault();
//     console.log(edad.value);
// }
// DNI.onkeydown=()=>{
//     console.log(DNI.value);
// }
// mail.onkeydown=()=>{
//     console.log(mail.value);
// }
// Telefono.onkeydown=()=>{
//     console.log(Telefono.value);
// }

// dir.onkeydown=()=>{
//     console.log(dir.value);
// }

// let boton2= document.getElementById("btnContactar");
// boton2.onclick=(e)=>{
//     e.preventDefault();
//     console.log(boton2.value);
// }

// class Actividad {
//     constructor(fichaActiva, DNI, asistencia) {
//         this.fichaActiva = fichaActiva;
//         this.DNI = DNI;
//         this.asistencia = asistencia;
//     }
// }



// //Declaracion de array
// let actividadesDelEstudio= ["Preparasión fizica","Pole Sport", "Pole Dance", "Floorwork", "Flexibilidad"];

// // Recorriendo mi array
// for (let i=0; i>actividadesDelEstudio.length;i++){
//     console.log(actividadesDelEstudio[i]);

// }


// //Metodos
// actividadesDelEstudio.push("Entrenamiento personalizado");
// console.log(actividadesDelEstudio);
// actividadesDelEstudio.shift(actividadesDelEstudio);//elimina el primer elemento.
// console.log(actividadesDelEstudio);
// actividadesDelEstudio.unshift("Preparación física");
// console.log(actividadesDelEstudio);

// //Join
// let listaString = actividadesDelEstudio.join(", ");

// //Descartar actividades del lugar:
// console.log(actividadesDelEstudio.includes("football"));
// console.log(actividadesDelEstudio.includes("Pole Sport"));

// //Aplicando funciones que aceptan funciones como parámetro
// function sobreCadaPersona(array, hacer){
//     for (const persona of array){
//         hacer (persona);
//     }
// }

// // //Lista de nombres de alumnos:
// let nombres=["Maria Ines", "Luciana Ramos","Lucia Villalba", "Maria Emilia"];
// let cantidad=5;

// // //Constructor 
// // let alumno1= new Fichas("Candela Campagnolo","cande_",22,"candecampagnolo@hotmail.com",342503344, 342503344,"Santa Fe, Capital");
// // let alumno2= new Fichas("Maria Ines Lupis","mariaI.1",40,"mariInes@hotmail.com",3450005340, 345607988,"Santa Fe, Capital");
// // let alumno3= new Fichas("Luciana Ramos","luchi",32,"lu1Ramos@hotmail.com",353453453, 52523423423,"Santa Fe, Capital");
// // let alumno4= new Fichas("Lucia Villalba","luciaV",25,"luciav@hotmail.com",42432534546, 5234234233,"Santa Fe, Capital");
// // let alumno5= new Fichas("Maria Emilia Campos","mari",22,"mari@hotmail.com",42342546,250334525244,"Santa Fe, Capital");


// let formularios=document.querySelector("form");
// console.log(formularios.innerHTML);






 