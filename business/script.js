let cart = [];

let currentProduct = "";
let currentPrice = 0;


// CART

function addToCart(name,price){

cart.push({name,price});

updateCart();

}

function addToCartModal(){

addToCart(currentProduct,currentPrice);

closeProduct();

}

function updateCart(){

document.getElementById("cart-count").innerText = cart.length;

let items = document.getElementById("cartItems");

let total = 0;

items.innerHTML="";

cart.forEach(item=>{

items.innerHTML += item.name+" - $"+item.price+"<br>";

total += item.price;

});

document.getElementById("cartTotal").innerText = total;

}



// CART SIDEBAR

function openCart(){

document.getElementById("cartSidebar").classList.add("open");

}

function closeCart(){

document.getElementById("cartSidebar").classList.remove("open");

}



// PRODUCT MODAL

function openProduct(name,price){

currentProduct = name;

currentPrice = parseInt(price.replace("$",""));

document.getElementById("modalName").innerText = name;

document.getElementById("modalPrice").innerText = price;

document.getElementById("productModal").style.display="flex";

}

function closeProduct(){

document.getElementById("productModal").style.display="none";

}



// LOGIN MODAL

function openLogin(){

document.getElementById("loginModal").style.display="flex";

}

function closeLogin(){

document.getElementById("loginModal").style.display="none";

}



// LOGIN SYSTEM

function signup(){

let user = document.getElementById("signupUser").value;

let pass = document.getElementById("signupPass").value;

localStorage.setItem("user",user);

localStorage.setItem("pass",pass);

alert("Registered!");

}

function login(){

let user = document.getElementById("loginUser").value;

let pass = document.getElementById("loginPass").value;

if(user === localStorage.getItem("user") && pass === localStorage.getItem("pass")){

alert("Login Successful");

closeLogin();

}else{

alert("Wrong login");

}

}



// DARK MODE

function toggleDarkMode(){

document.body.classList.toggle("dark");

}