if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', comenzar)
} else {
    comenzar()
}

function comenzar(){
    
    //eliminar los botones del artículo del carrito
    let eliminarBotonArtCarrito = document.getElementsByClassName('btn-danger')
    for (let i = 0; i < eliminarBotonArtCarrito.length; i++) {
        let button = eliminarBotonArtCarrito[i]
        button.addEventListener('click', eliminarArtCarrito)
    }
    
    let cantidadArticulos = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < cantidadArticulos.length; i++) {
        let input = cantidadArticulos[i]
        input.addEventListener('change', cantidadCambios)
    }

    let agregarBotonCarrito = document.getElementsByClassName('agregar-carrito')
    for (let i = 0; i < agregarBotonCarrito.length; i++) {
        let button = agregarBotonCarrito[i]
        button.addEventListener('click', agregarBoton)
    }

    document.getElementsByClassName('btn-comprar')[0].addEventListener('click', compraClick)
}

//compra pulsada

function compraClick(){
    swal('Gracias por tu compra', {icon:"success"})
    let cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    actualizarTotalCarrito()
}

//eliminar artículo del carrito

function eliminarArtCarrito(e) {
    let clickBoton = e.target
    clickBoton.parentElement.parentElement.remove()
    actualizarTotalCarrito()
}

//Cantidad de cambios

function cantidadCambios(e){
    let input = e.target
    if (isNaN(input.value) || input.value <= 0 ) {
        input.value = 1
    }
    actualizarTotalCarrito()
}

//añadir al carrito Haga clic en

function agregarBoton(e){
    let boton = e.target
    let producto =  boton.parentElement.parentElement
    let titulo = producto.getElementsByClassName('titulo-producto')[0].innerText
    let precio = producto.getElementsByClassName('precio-producto')[0].innerText
    let imagen = producto.getElementsByClassName('imagen-producto')[0].src
    agregarArticuloAlCarrito(titulo, precio, imagen)
    actualizarTotalCarrito()
}

//Añade articulo al carrito

function agregarArticuloAlCarrito(titulo, precio, imagen) {
    let carritoFila = document.createElement('div')
    carritoFila.classList.add('cart-row')

    let articuloCarrito = document.getElementsByClassName('cart-items')[0]
    
    let nombreArticuloCarrito = articuloCarrito.getElementsByClassName('cart-item-title')
    for (let i = 0; i < nombreArticuloCarrito.length; i++){
        if (nombreArticuloCarrito[i].innerText == titulo) {
            swal('El artículo ya fué agregado al carrito', {icon: 'error'})
            return
        }
    }
    let contenidoCarrito = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imagen}">
            <span class="cart-item-title">${titulo}</span>
        </div>
        <span class="cart-price cart-column">${precio}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">X</button>
        </div>`
    carritoFila.innerHTML = contenidoCarrito

    articuloCarrito.append(carritoFila)
    carritoFila.getElementsByClassName('btn-danger')[0].addEventListener('click', eliminarArtCarrito)
    carritoFila.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', cantidadCambios)
} 

//Actualizar el total del carrito
function actualizarTotalCarrito(){
    let contenedorArticulos = document.getElementsByClassName('cart-items')[0]
    let filaArticulos = contenedorArticulos.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < filaArticulos.length; i++){
        let filaArticulo = filaArticulos[i]
        let precioArticulo = filaArticulo.getElementsByClassName('cart-price')[0]
        let cantidadArticulos = filaArticulo.getElementsByClassName('cart-quantity-input')[0]
        let precio = parseFloat(precioArticulo.innerText.replace('$', ''))
        let cantidad = cantidadArticulos.value
        total = total + (precio * cantidad)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

