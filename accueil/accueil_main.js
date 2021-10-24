const productsData = [
    {
        id: 1,
        image: "../assets/images/chaussettes/pngs/singes.png",
        title: "Chaussettes de singes verts",
        price: "$9.99"
    },
    {
        id: 2,
        image: "../assets/images/chaussettes/pngs/avocat.png",
        title: "Chaussettes d'avocat",
        price: "$4.99"
    },
    {
        id: 3,
        image: "../assets/images/chaussettes/pngs/cochons.png",
        title: "Chaussettes de cochons",
        price: "$4.99"
    },
    {
        id: 4,
        image: "../assets/images/chaussettes/pngs/foot.png",
        title: "Chaussettes de foot",
        price: "$4.99"
    },
    {
        id: 5,
        image: "../assets/images/chaussettes/pngs/fromage.png",
        title: "Chaussettes fromage",
        price: "$4.99"
    },
    {
        id: 6,
        image: "../assets/images/chaussettes/pngs/tournesol.png",
        title: "Chaussettes au tournesol",
        price: "$4.99"
    }
];

function productTemplate(product) {
    return `
        <div class="product">
            <img id="img_chaussete" src="${product.image}" alt="apple watch">
            <div class="card-footer">
                <a href="#" class="h5">${product.title}</a>
                <div class="price_product">${product.price}
                    <a class="btn btn-xs btn-primary" href="#" title="Add to cart">
                        <span class="fa fa-shopping-bag mr-2"></span> Add to cart
                    </a>
                </div>
            </div>
        </div>
    `;
  }

  const nombre = productsData.length;
  const mycard = productsData.map(productTemplate).join("");
  
  document.getElementById("app").innerHTML = mycard;