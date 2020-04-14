if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready()
}

function ready(){
  var  removeCartItemBtn = document.getElementsByClassName('cart-btn')
  for (var i = 0; i < removeCartItemBtn.length; i++){
    var button = removeCartItemBtn[i]
    button.addEventListener('click', removeCartItem)
  }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
    }

    var addToCartBtn = document.getElementsByClassName('shop-btn')
    for (var i = 0; i < addToCartBtn.length; i++){
      var button = addToCartBtn[i]
      button.addEventListener('click', addToCartClicked)
    }


   document.getElementsByClassName('purch-btn')[0].addEventListener('click', purchaseClicked)

  
}


function purchaseClicked(){
 var input1 = document.getElementsByClassName('cart-total-amount')[0].innerText
  console.log(input1)
  if ((input1 == "$0.00" )|| (input1 == "$0" )){
     alert ('Cart is Empty. Please Add Items first to Purchase')
   }else{
     alert ('Thank You for your purchases and your Total Amount is ' +input1)
     var cartItems = document.getElementsByClassName('cart-items')[0]
     while(cartItems.hasChildNodes()){
       cartItems.removeChild(cartItems.firstChild)
     }
     updateCartTotal()
  }
 }




function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartTotal()
}

function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function addToCartClicked(event){
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imgSrc = shopItem.getElementsByClassName('shop-item-img')[0].src
  addItemToCart(title,price,imgSrc)
  updateCartTotal()
}

function addItemToCart(title,price,imgSrc){
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for(var i = 0; i < cartItemNames.length; i++){
    if (cartItemNames[i].innerText == title){
      alert("This Item is already added in the cart")
      return
    }
  }

  var cartRowContents = `
      <div class="cart-item cart-column">
        <img src="${imgSrc}" class="cart-item cart-img" alt="">
        <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
        <input type="number" class="cart-quantity-input" name=""value="1" onkeydown="if(event.key==='.'){event.preventDefault();}"  oninput="event.target.value = event.target.value.replace(/[^0-9]*/g,'');">
        <button type="button"class="btn cart-btn" name="button">Remove</button>
      </div>`
      cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('cart-btn')[0].addEventListener('click',removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
}


function updateCartTotal(){
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0

  for (var i = 0; i < cartRows.length ; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('$',''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-amount')[0].innerText = '$' + total
}
