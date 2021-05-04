class Producto {
    constructor(producto, detalle, precio, oferta, img) {
        this.producto  = producto;
        this.detalle   = detalle;
        this.precio    = precio;
        this.oferta    = oferta;
        this.img       = img;
    }
}

const Productos = [];

Productos.push(new Producto("Colchoneta 100x50x3cm", "Relleno espuma y Lona Bagum", 999, true, "image/colchoneta.png"));
Productos.push(new Producto("TRX", "Material de nylon", 1500, true, "image/trx.png"));
Productos.push(new Producto("Esfera 65cm", "Material latex", 2200, false, "image/esfera65.png"));
Productos.push(new Producto("Esfera 75cm", "Material latex", 2500, false, "image/esfera75.png"));
Productos.push(new Producto("Zafu", "Relleno Orgánico de Cáscara De Trigo Sarraceno", 1500, false, "image/zafu.png"));
Productos.push(new Producto("Mancuerna 5kg", "Material de función", 3200, false, "image/mancuerna.png"));
Productos.push(new Producto("Pesas Rusas 6kg", "Material de función", 1920, false, "image/rusa.png"));
Productos.push(new Producto("Pesas Rusas 10kg", "Material de función", 3200, false, "image/rusa.png"));
Productos.push(new Producto("Pesas Rusas 14kg", "Material de función", 4480, false, "image/rusa.png"));


localStorage.setItem("Productos", JSON.stringify(Productos))
    

Productos.forEach(element => {
        
    let contenedor = document.createElement("div");
    contenedor.setAttribute("class","card col-12 mb-2 col-md-4");


    let img = document.createElement("img");
    img.setAttribute("class", "imagen-producto", "alt", "...");
    img.src = `${element.img}`;
    contenedor.appendChild(img); 
        
    let div1 = document.createElement("div");
    div1.setAttribute("class","card-body");
    contenedor.appendChild(div1);
        
    let h2 = document.createElement("h5");
    h2.setAttribute("class","titulo-producto");
    h2.textContent = `${element.producto}`;
    div1.appendChild(h2);
        
    let p1 = document.createElement("p");
    p1.setAttribute("class","");
    p1.textContent = `${element.detalle}`;
    div1.appendChild(p1);
        
    let span = document.createElement("span");
    span.setAttribute("class","precio-producto");
    span.textContent = `$${element.precio}`;
    div1.appendChild(span);
        
    let button = document.createElement("button");
    button.setAttribute("class","agregar-carrito");
    button.textContent = "Agregar";
    div1.appendChild(button);
        
    //Selecciono el id "Productos"
    document.querySelector("#productos").appendChild(contenedor)
       
});

