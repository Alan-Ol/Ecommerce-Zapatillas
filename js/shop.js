
//renderizamos los productos 
function renderizarProductos() {

    console.log(productosJSON)
    for (const prod of productosJSON) {
        document.querySelector("#milista").innerHTML+=(`
        <div class="box">
            <img src="${prod.foto}" alt="">
            <h2>${prod.nombre}</h2>
            <span>$${prod.precio}</span>
            <a class='bx bxs-cart-add' id='btn${prod.id}' id="btnCompra"></a>
        </div>
        `);
    }


    
    //EVENTOS
    for (const prod of productosJSON) {
         //Evento para cada boton
         document.querySelector(`#btn${prod.id}`).onclick= function() {
            agregarACarrito(prod);
        };
    }
    console.log(prod)
}


//llamada asincronica al json
async function obtenerJSON() {
    const URLJSON="./js/products.json"
    const resp=await fetch("./js/products.json")
    const data= await resp.json()
    productosJSON = data;
    renderizarProductos();
}

obtenerJSON()
