let userIfno = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logout = document.querySelector("#logout");
let productDom = document.querySelector(".products");
let username = localStorage.getItem("username")

events()

function events(){
    logout.addEventListener("click",clearLocalStorage)
    getLocalStorage()
}


// control localstorage

function getLocalStorage(){
    if(username) {
         links.remove();
         userIfno.style.display = "flex"
         userDom.innerHTML = username;
    }
}


// clear localstorage
function clearLocalStorage (){
    localStorage.clear()
    setTimeout(()=>{
        window.location = "register.html"
    },1000)
}


// products

const products = [
    {id:1, title: "Nausnik", imgUrl: "./images/1.avif",desc: "Lorem ipsum dolor sit amet consectetur ..."},
    {id:2, title: "Saat", imgUrl: "./images/2.avif",desc: "Lorem ipsum dolor sit amet consectetur ..."},
    {id:3, title: "Eynek", imgUrl: "./images/3.avif",desc: "Lorem ipsum dolor sit amet consectetur ..."},
    {id:4, title: "Ayaqqabi", imgUrl: "./images/4.avif",desc: "Lorem ipsum dolor sit amet consectetur ..."},
    {id:5, title: "Pamada", imgUrl: "./images/5.avif",desc: "Lorem ipsum dolor sit amet consectetur ..."},
    {id:6, title: "Sprot ayaqqabisi", imgUrl: "./images/6.avif",desc: "Lorem ipsum dolor sit amet consectetur ..."},
]

function productUI (){
   let renderedProduct =  products.map((product)=>{
        return `
        <div class="product_item">
                    <div class="product_item_img_container">
                        <img src=${product.imgUrl} alt="Eynek">
                    </div>

                    <div class="product_item_desc">
                        <h2>${product.title}</h2>
                        <p>${product.desc}</p>
                    </div>

                    <div class="product_item_action">
                        <button class="add_to_cart">add to cart</button>
                        <i class="favorite far fa-heart"></i>
                    </div>
              </div>
        `
    });

    productDom.innerHTML = renderedProduct;
}

productUI();
