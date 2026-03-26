

//  scripting 

let cartTotal = 0;

const promoMessage = document.getElementById("promoMessage");
const promoBar = document.getElementById("promoBar");

const addButtons = document.querySelectorAll(".addBtn");

function updatePromoBar(){

if(cartTotal < 100){

let diff = 100 - cartTotal;

promoMessage.innerText =
`😃You are $${diff} away from Free Shipping...!`;

}

else{

promoMessage.innerText =
"🥳Congratulations! You've unlocked Free Shipping...!🎉";

}

}

updatePromoBar();

addButtons.forEach(btn => {

btn.addEventListener("click", function(){

let price = Number(this.getAttribute("data-price"));

cartTotal += price;

updatePromoBar();

});

});

document.getElementById("clearCart").addEventListener("click", () => {

cartTotal = 0;

updatePromoBar();

});

document.getElementById("closeBar").addEventListener("click", () => {

promoBar.style.display = "none";

localStorage.setItem("promoClosed","true");

});

if(localStorage.getItem("promoClosed") === "true"){

promoBar.style.display = "none";

}