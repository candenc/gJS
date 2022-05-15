//Defino variables:



//1. Le doy apertura  y cierre al carrito
//2.Agregar elementos
//3.Calcular total
//4.Borrar elementos
//5. Modificar la cantidad de elementos en el icono del carrito
//6. Finalizar compra

//1. Definicion de variables:
const cart = document.querySelector("#cart");
const cartModal = document.querySelector(".cart-modal-overlay");
const cerrarCarrito=document.querySelector("#close-btn");
const addToCart=document.getElementsByClassName("add-to-cart");
const productRows = document.getElementsByClassName("product-row");

//Para abrir y cerrar:


//1.Apertura del carrito: agrega y saca la clase "open". Haciendo click, agrego evento.
cart.addEventListener("click", ()=> {
    //Recupero variable. 
    //Busco la clase especificamente: open.
    cartModal.classList.add("open");
})

//2. Cerrar: 
cerrarCarrito.addEventListener("click", ()=>{
    cartModal.classList.remove("open");
})

//Cuando abro fuera del carrito, se cierra:
cartModal.addEventListener("click", (e)=> {
    //Si el target al que hicimos click, contiene la clase: 
    if ( e.target.classList.contains("cart-modal-overlay")) {
        //Entonces retira la clase
        cartModal.classList.remove("open");
    }
})



//3.Agregar elementos al carrito: a cada boton se le aplica una funcion que se fija qué ID tiene.
//Asignarle a cada boton, su funcion:

for (let i=0; i< addToCart.length;i++){
    let boton=addToCart[i];
    console.log(boton);
    boton.addEventListener("click", agregarCarrito)
}
function agregarCarrito(e) {
    let boton = e.target;
    //Para seleccionar algo específico voy al "padre":
    let cartItem = boton.parentElement;

    //Lo que se visualiza en el carrito:
    let prodId= cartItem.getAttribute("id");
    let prodName=cartItem.querySelector("h3").innerText;
    let price=cartItem.querySelector(".product-price").innerText;
    let imageSrc=cartItem.getElementsByClassName("product-image").src;

    agregarElementos(prodId,prodName,price,imageSrc);
}

function agregarElementos(prodId,prodName,price,imageSrc){
    let productRow= document.createElement("div");
    let productRows=document.querySelector(".product-rows");
    
//     //Para modificar cantidad: ¿Está presente o no?
//     //Array de contenido:
    let arrayProductos=document.getElementsByClassName("product-row");
//     //Busco dentro del array
    for (let i=0; i<arrayProductos.length;i++){
        if(arrayProductos[i].getAttribute("id")==prodId){
            alert("Ya existe en el carrito");
            return;//salir
        }
    }
    //HTML en el carrito
    let cartRowItem = 
    `<div class="product-row" id="${prodId}>
       <h3> ${prodName} </h3>
       <span class="cart-price"> ${price} </span>
       <input class="product-quantity" type="number" value="1">
       <button class="remove-btn"> Borrar </button>
    </div>`

    productRow.innerHTML = cartRowItem;
    productRows.append(productRow);
    // El input y el boton requieren de eventos:
    productRow.querySelector(".remove-btn").addEventListener("click", removeItem);
    //Cantidad:
    productRow.querySelector(".product-quantity").addEventListener("change", cambiarCantidad);
    updatePrice();
   
}
//4.Eliminar elementos: 
function removeItem(e) {
    //Es necesario encontrar el elemento específico al que deseo eliminar.
    btnClicked=e.target;
    //Buscamps el "boton abuelo"
    btnClicked.parentElement.parentElement.remove();
    updatePrice();
}

//Cambiar cantidades:
function cambiarCantidad(e){
    let cantidad = e.target.value;
    if (isNaN(cantidad) || cantidad<=0){
        cantidad=1;
    }
    updatePrice();
}

//Actualizar totales. Cálculos.
function updatePrice() {
    let total=0;
    for (const producto of productRows){
        //Debo eliminar signo $ (replace): cambio un valor por otro. Me trae como informacion un "texto", debo transformar a numero mediante parse.
        let price=parseFloat(producto.querySelector(".cart-price").innerText.replace("$",""));
        let cantidad= producto.querySelector("product-quantity").value;
        total += price*cantidad;
    }
    //Agregar al carrito y hacerlo visible al usuario
    document.querySelector(".total-price").innerText=$ + total;
    //Conteo en carrito
    document.querySelector(".cart-quantity").textContent=productRows.length;
}


