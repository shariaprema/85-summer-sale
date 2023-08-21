
var total = 0; 

function handleClickBtn(target){
const selectedItemsContainer = document.getElementById('selected-items');
const itemName = target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
const li = document.createElement('li');
li.innerText = itemName;
selectedItemsContainer.appendChild(li);


// step2

const priceString = target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];
const price = parseFloat(priceString);

total = total + price; 

const totalPrice = document.getElementById('total-price')

totalPrice.innerText = total;



// Step-3
const totalAmountString = document.getElementById('total-amount');
const totalAmount = parseFloat(totalAmountString)
// totalAmount.innerText =
console.log(totalAmount.innerText)







//STEP-4
document.addEventListener("DOMContentLoaded", function() {

const calculateButton = document.getElementById("btn-apply");

calculateButton.addEventListener("click", function(){

    const totalPrice = document.getElementById('total-price')

    const couponInput = document.getElementById('coupon-input');
    const discountInfo = document.getElementById('discount-info');
    const TotalPrice = document.getElementById('total-price');


})






})


}

// step-5

document.getElementById('btn-apply').addEventListener('click', function(){

    const couponInput = document.getElementById('coupon-input');
    const coupon = couponInput.value;
    couponInput.value = '';


    if(coupon === 'SELL200'){

    }

    else{
        alert('invalid coupon code!!!')
    }
    
})










































// // step3

// function calculateDiscountedPrice(totalPrice) {
//     if (totalPrice >= 200) {
//       // Apply a 20% discount
//       const discount = totalPrice * 0.2;
//       const discountedPrice = totalPrice - discount;
//       return discountedPrice;
//     } else {
//       return totalPrice; // No discount applied
//     }
//   }
  
//   // Test the function
//   const totalPrice = 250; // Change this value to test different scenarios
//   const discountedPrice = calculateDiscountedPrice(totalPrice);
//   console.log(`Total Price: $${totalPrice}`);
//   console.log(`Discounted Price: $${discountedPrice}`);
  
  






  
  
  
  