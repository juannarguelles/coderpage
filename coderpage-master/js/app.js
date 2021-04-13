/* Selecciono todos los productos */
const todosLosProductos = document.querySelector('#productos');


/*Variable global*/
const carrito = [];

/* Creamos evento escucha */ 
todosLosProductos.addEventListener('click', agregarProducto);

function agregarProducto(e){
    
    e.preventDefault()

     if(e.target.classList.contains('agregar-carrito')){
        /*parentElement subo 2 niveles hasta la clase padre "card"*/
        const miProducto = e.target.parentElement.parentElement;
        /*Paso el card a la funcion para obtener los datos*/
        datosCard(miProducto); 
    };
};

 function datosCard(card){

    const articulo = {
        producto: card.querySelector('h5').textContent,
        detalle: card.querySelector('p').textContent,
        precio: card.querySelector('span').textContent,
        img: card.querySelector('img').getAttribute('src'),
    }; 
     
    carrito.push(articulo);

    actualizarCarrito(); 
};


function actualizarCarrito(){
    const carritoHTML = document.querySelector('#section-carrito')

    carrito.forEach(articulo => {

       const {producto, detalle, precio, img} = articulo;

       const span = document.createElement('span');
       span.innerHTML =`
            <span class="cart-image cart-header cart-column">
                <img src="${img}">
            </span>
            <span class="cart-item cart-header cart-column">
                ${producto}
            </span>
            <span class="cart-price cart-header cart-column">
                ${detalle}
            </span>
            <span class="cart-quantity cart-header cart-column">
                ${precio}
            </span>
       `
       carritoHTML.appendChild(span);  
    });
};
