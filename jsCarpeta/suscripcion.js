//SUSCRIBIRSE
//Ultimo recuadro donde simplemente agregamos nuestro mail, accediendo a recibir informacion. 
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