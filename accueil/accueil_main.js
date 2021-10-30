/********** MODAL NEW PRODUCT **********/

let modal = document.getElementById("product-modal");
let openModal = document.getElementById("open-modal");
let closeModal = document.querySelector(".close-modal");

openModal.addEventListener('click', function() {
    modal.style.display = 'block';
})

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
})

window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
})


/********** ADD NEW PRODUCT **********/

var datasProducts = [];
var i = 0;

function productsTemplate(product) {
    return `
        <div class="product">
            <img id="img_chaussete" src="${product.image}" alt="mon image">
            <div class="card-footer">
                <a href="#" class="h5">${product.title}</a>
                <div class="price_product">${product.price}
                    <a class="btn btn-small btn-primary" href="#" title="Add to cart">
                        <span class="fa fa-shopping-bag mr-2"></span> Add to cart
                    </a>
                </div>
            </div>
        </div>
    `;
}

function addSocket() {
    var title = document.getElementById('title').value;
    var price = document.getElementById('price').value;
    var image = document.getElementById('image').value;

    var splits = image.split('fakepath\\');
    var realURLImage= "../assets/images/chaussettes/pngs/"+splits[1];

    var mesSockets = {
        id:i++,
        title:title,
        price: "$"+price,
        image:realURLImage
    };

    datasProducts.push(mesSockets);

    const mycard = datasProducts.map(productsTemplate).join("");
    document.getElementById("app").innerHTML = mycard;

    modal.style.display = 'none';

    clearInput()
}

function clearInput() {
    document.getElementById('title').value = "";
    document.getElementById('price').value = "";
    document.getElementById('image').value = "";
}