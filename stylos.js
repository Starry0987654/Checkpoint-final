document.addEventListener('click', function(event) {  
  if (event.target.classList.contains('plus-btn')) {  
    updateQuantity(event.target, 1);  
  } else if (event.target.classList.contains('minus-btn')) {  
    updateQuantity(event.target, -1);  
  }  
});  

function updateQuantity(button, value) {  
  const item = button.closest('.item');  
  const quantityElement = item.querySelector('.quantity');  
  let quantity = parseInt(quantityElement.textContent) + value;  
  
  if (quantity > 0) {  
    quantityElement.textContent = quantity;  
    updateTotalPrice();  
  }  
}  

function updateTotalPrice() {  
  const quantities = document.querySelectorAll('.quantity');  
  let totalPrice = 0;  
  
  quantities.forEach(function(quantity) {  
    totalPrice += parseInt(quantity.textContent);  
  });  
  
  document.getElementById('total-price').textContent = `$${totalPrice}`;  
}