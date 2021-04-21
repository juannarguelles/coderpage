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

Productos.push(new Producto("Colchoneta 100x50x3cm", "Material de función", 999, true, "https://http2.mlstatic.com/D_NQ_NP_645314-MLA43312231293_082020-O.webp"));
Productos.push(new Producto("Banda de suspension tipo TRX", "Material de función", 1500, true, "https://www.deportrainer.com/6602-large_default/trx-bandas-de-suspension.jpg"));
Productos.push(new Producto("Pelota Esferodinamia 65 Cm", "Material de función", 2200, false, "https://http2.mlstatic.com/D_NQ_NP_628463-MLA40186144083_122019-O.jpg"));
Productos.push(new Producto("Pelota Esferodinamia 75 Cm", "Material de función", 2500, false, "https://http2.mlstatic.com/D_NQ_NP_932207-MLA43373734069_092020-O.jpg"));
Productos.push(new Producto("Zafu", "Relleno Orgánico de Cáscara De Trigo Sarraceno", 1500, false, "https://http2.mlstatic.com/D_NQ_NP_806061-MLA43156165327_082020-O.webp"));
Productos.push(new Producto("Mancuernas 5kg el par", "Material de función", 3200, false, "https://d3ugyf2ht6aenh.cloudfront.net/stores/966/664/products/gtma2k1-a7ea0f0fef7e2f8f2915681280665573-1024-1024.jpg"));
Productos.push(new Producto("Pesas Rusas 6 kg", "Material de función", 1920, false, "https://http2.mlstatic.com/D_NQ_NP_817070-MLA43323024575_082020-O.webp"));
Productos.push(new Producto("Pesas Rusas 10 kg", "Material de función", 3200, false, "https://http2.mlstatic.com/D_NQ_NP_817070-MLA43323024575_082020-O.webp"));
Productos.push(new Producto("Pesas Rusas 14 kg", "Material de función", 4480, false, "https://http2.mlstatic.com/D_NQ_NP_817070-MLA43323024575_082020-O.webp"));


localStorage.setItem("Productos", JSON.stringify(Productos))
    


    Productos.forEach(element => {
        
        let contenedor = document.createElement("div");
        contenedor.setAttribute("class","card col-12 mb-2 col-md-4");


        let img = document.createElement("img");
        img.setAttribute("class", "imagen-producto", "alt", "...");
        img.src = `${element.img}`;
        contenedor.appendChild(img); 
        
        let div1 = document.createElement("div");
        div1.setAttribute("class","card-body text-center");
        contenedor.appendChild(div1);
        
        let h2 = document.createElement("h5");
        h2.setAttribute("class","titulo-producto");
        h2.textContent = `${element.producto}`;
        div1.appendChild(h2);
        
        let p1 = document.createElement("p");
        p1.setAttribute("class","text-center");
        p1.textContent = `${element.detalle}`;
        div1.appendChild(p1);
        
        let span = document.createElement("span");
        span.setAttribute("class","precio-producto");
        span.textContent = `$${element.precio}`;
        div1.appendChild(span);
        
        let button = document.createElement("button");
        button.setAttribute("class","agregar-carrito");
        button.textContent = "Comprar";
        div1.appendChild(button);
        
        //Selecciono el id "Productos"
        document.querySelector("#productos").appendChild(contenedor)
       
    });

