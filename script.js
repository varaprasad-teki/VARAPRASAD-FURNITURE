const products = [

    {
        id: 1,
        name: "Royal Wooden Double Cot",
        category: "bed",
        description: "Premium wooden double cot for modern bedrooms.",
        price: 24999,
        icon: "🛏️"
    },

    {
        id: 2,
        name: "Classic Wooden Mancham",
        category: "bed",
        description: "Strong and elegant traditional wooden cot.",
        price: 21999,
        icon: "🛏️"
    },

    {
        id: 3,
        name: "Luxury Triple Cot",
        category: "bed",
        description: "Spacious triple cot with premium wooden finish.",
        price: 32999,
        icon: "🛏️"
    },

    {
        id: 4,
        name: "Modern Dining Table",
        category: "dining",
        description: "Premium 6-seater wooden dining table.",
        price: 18999,
        icon: "🍽️"
    },

    {
        id: 5,
        name: "Premium Dining Set",
        category: "dining",
        description: "Beautiful wooden dining table with chairs.",
        price: 28999,
        icon: "🍽️"
    },

    {
        id: 6,
        name: "Classic Dressing Table",
        category: "dressing",
        description: "Elegant wooden dressing table with mirror.",
        price: 14999,
        icon: "🪞"
    },

    {
        id: 7,
        name: "Luxury Dressing Unit",
        category: "dressing",
        description: "Large wooden dressing unit with storage.",
        price: 21999,
        icon: "🪞"
    },

    {
        id: 8,
        name: "Handcrafted Wooden Chair",
        category: "other",
        description: "Strong handcrafted wooden chair.",
        price: 5999,
        icon: "🪑"
    }

];


let cart = [];


/* DISPLAY PRODUCTS */

function displayProducts(category = "all") {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    let filteredProducts;

    if (category === "all") {

        filteredProducts = products;

    } else {

        filteredProducts =
            products.filter(
                product =>
                    product.category === category
            );
    }


    filteredProducts.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">
                ${product.icon}
            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="price">
                    ₹${product.price.toLocaleString("en-IN")}
                </div>

                <div class="product-buttons">

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>

                    <button
                        class="buy-now"
                        onclick="buyNow(${product.id})">
                        Buy Now
                    </button>

                </div>

            </div>
        `;


        grid.appendChild(card);

    });

}


/* CATEGORY FILTER */

function showCategory(category) {

    displayProducts(category);

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ADD CART */

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );

    cart.push(product);

    updateCart();

    alert(
        product.name +
        " added to your cart!"
    );

}


/* UPDATE CART */

function updateCart() {

    document
        .getElementById("cartCount")
        .textContent = cart.length;


    const cartItems =
        document.getElementById("cartItems");


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;


        const div =
            document.createElement("div");


        div.className = "cart-item";


        div.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <br>

                ₹${item.price.toLocaleString("en-IN")}

            </div>

            <button
                class="remove"
                onclick="removeFromCart(${index})">
                Remove
            </button>

        `;


        cartItems.appendChild(div);

    });


    document
        .getElementById("cartTotal")
        .textContent =
        total.toLocaleString("en-IN");

}


/* REMOVE */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


/* OPEN CART */

function openCart() {

    document
        .getElementById("cartModal")
        .style.display = "flex";

    updateCart();

}


/* CLOSE CART */

function closeCart() {

    document
        .getElementById("cartModal")
        .style.display = "none";

}


/* BUY NOW */

function buyNow(id) {

    const product =
        products.find(
            item => item.id === id
        );


    const message =
        "Hello WoodCraft Furniture!%0A%0A" +

        "I am interested in:%0A" +

        product.name +

        "%0APrice: ₹" +

        product.price.toLocaleString("en-IN");


    window.open(

        "https://wa.me/919876543210?text=" +
        message,

        "_blank"

    );

}


/* CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    let message =
        "Hello WoodCraft Furniture!%0A%0A" +
        "I want to order:%0A%0A";


    let total = 0;


    cart.forEach((item, index) => {

        message +=
            (index + 1) +
            ". " +
            item.name +
            " - ₹" +
            item.price.toLocaleString("en-IN") +
            "%0A";

        total += item.price;

    });


    message +=
        "%0ATotal: ₹" +
        total.toLocaleString("en-IN");


    window.open(

        "https://wa.me/919876543210?text=" +
        message,

        "_blank"

    );

}


/* CONTACT FORM */

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you! Your enquiry has been received."
    );

    event.target.reset();

}


/* LOAD PRODUCTS */

displayProducts();
