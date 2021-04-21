    const Productos01 = JSON.parse(localStorage.getItem("Productos"))

    const Oferta = Productos01.filter(Producto => Producto.oferta == true);

    Oferta.forEach(element => {
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

        document.querySelector("#oferta").appendChild(contenedor)
    });
    