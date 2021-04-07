class Producto {
    constructor(id, producto, detalle, precio, stock, oferta, img) {
        this.id        = id;
        this.producto  = producto;
        this.detalle   = detalle;
        this.precio    = precio;
        this.stock     = stock;
        this.oferta    = oferta;
        this.img       = img;
    }
}

const Productos = [];

Productos.push(new Producto(01, "Colchoneta 100x50x3cm", "Material de función", 999, 1, true, "https://http2.mlstatic.com/D_NQ_NP_645314-MLA43312231293_082020-O.webp"));
Productos.push(new Producto(02, "Banda de suspension tipo TRX", "Material de función", 1500, 1, true, "https://www.deportrainer.com/6602-large_default/trx-bandas-de-suspension.jpg"));
Productos.push(new Producto(03, "Pelota Esferodinamia 65 Cm", "Material de función", 2200, 1, false, "https://http2.mlstatic.com/D_NQ_NP_628463-MLA40186144083_122019-O.jpg"));
Productos.push(new Producto(04, "Pelota Esferodinamia 75 Cm", "Material de función", 2500, 1, false, "https://http2.mlstatic.com/D_NQ_NP_932207-MLA43373734069_092020-O.jpg"));
Productos.push(new Producto(05, "Zafu", "Relleno Orgánico de Cáscara De Trigo Sarraceno", 1500, 1, false, "https://http2.mlstatic.com/D_NQ_NP_806061-MLA43156165327_082020-O.webp"));
Productos.push(new Producto(06, "Mancuernas 5kg el par", "Material de función", 3200, 1, false, "https://d3ugyf2ht6aenh.cloudfront.net/stores/966/664/products/gtma2k1-a7ea0f0fef7e2f8f2915681280665573-1024-1024.jpg"));
Productos.push(new Producto(07, "Pesas Rusas 6 kg", "Material de función", 1920, 1, false, "https://http2.mlstatic.com/D_NQ_NP_817070-MLA43323024575_082020-O.webp"));
Productos.push(new Producto(08, "Pesas Rusas 10 kg", "Material de función", 3200, 1, false, "https://http2.mlstatic.com/D_NQ_NP_817070-MLA43323024575_082020-O.webp"));
Productos.push(new Producto(09, "Pesas Rusas 14 kg", "Material de función", 4480, 1, false, "https://http2.mlstatic.com/D_NQ_NP_817070-MLA43323024575_082020-O.webp"));


console.log(Productos);


localStorage.setItem("Productos", JSON.stringify(Productos))
    


    Productos.forEach(element => {
        
        let contenedor = document.createElement("div");
        contenedor.setAttribute("class","card col-12 mb-2 col-md-4");


        let img = document.createElement("img");
        img.setAttribute("class", "hidden", "alt", "...");
        img.src = `${element.img}`;
        contenedor.appendChild(img); 
        
        let div1 = document.createElement("div");
        div1.setAttribute("class","card-body text-center");
        contenedor.appendChild(div1);
        
        let h2 = document.createElement("h5");
        h2.setAttribute("class","text-center");
        h2.textContent = `${element.producto}`;
        div1.appendChild(h2);

        
        let p1 = document.createElement("p");
        p1.setAttribute("class","text-center");
        p1.textContent = `${element.detalle}`;
        div1.appendChild(p1);
        
        let p2 = document.createElement("p");
        p2.setAttribute("class","text-center");
        p2.textContent = `$${element.precio}.`;
        div1.appendChild(p2);
        
        let button = document.createElement("button");
        button.textContent = "Comprar";
        div1.appendChild(button);
        
        //Selecciono el id "Productos"
        document.querySelector("#productos").appendChild(contenedor)
       
    });

