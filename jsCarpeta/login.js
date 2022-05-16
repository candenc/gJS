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
//
function listaDeUsuarios() {
    const listaUsuarios=JSON. parse(localStorage.getItem("ListaUsuariosLs"));
//Registros previos
    if (listaUsuarios==null){
        listaUsuarios= [
            //ID, nombre y apellido, email, contraseña, fecha de nacimiento, rol
            ["1", "Candela Campagnolo","candecampagnolo@outlook.com", "candela123", "25-09-99", "administrador"],
            ["2", "Maria Turchetti","mari@outlook.com", "mariaT", "05-07-95","usuario"],
            ["3", "Maria Turchetti","mari@outlook.com", "mariaT", "05-07-95","empleado"]
        ]
        
    }
    return listaUsuarios;
}
//Recibir valores:
function validarUsuario(correo,contrassenia){
    let listaUsuarios = listaDeUsuarios();
   //Variable booleana que me permite reccorrer la lista de acceso y validar:
    let acceso=false; //si encuentra similitud, cambia a true

    for (let i=0; i<listaUsuarios.length;i++){
        //Recorro matriz
        //Si el correo es igual a lo que hay en la lista de usuarios en posicion i.
        //En posicion 3 está el correo y el posicion 4 está la contraseña:
        if(correo==listaUsuarios[i][3] && contrassenia==listaUsuarios[i][4]){
            acceso=true;
            sessionStorage.setItem("activo",listaUsuarios[i][1]+"  "+ listaUsuarios[i][2]);
            //Definiendo funcion: 
            sessionStorage.setItem("rollUsuario", listaUsuarios[i][6]);
            
        }

        }
        return acceso;
 }


// // INICIAR SESION
// class GuardarInicio{
//     constructor(identificarmail,contrasenia){
//         this.identificarmail=identificarmail;
//         this.contrasenia=contrasenia;
  
//     }
// }

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

