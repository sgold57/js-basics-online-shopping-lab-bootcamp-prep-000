var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor((Math.random() * 100) + 1)
 var newItem = {"itemName": item, "itemPrice": itemPrice}
 cart.unshift(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var cartString = "In your cart, you have "
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  if (cart.length === 1) {
    cartString = cartString + `${cart[0].itemName} at $${cart[0].itemPrice}.`
    return cartString
  }
  else {
    for (let i = 0; i < cart.length; i++) {
      if (i === 0) {
        cartString = cartString + `${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      else if (i === (cart.length - 1)) {
        cartString = cartString + `, and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else {
        cartString = cartString + `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
  }
  return cartString
  }
}

function total() {
  var cartTotal = 0
  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
 return cartTotal
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (item === (cart[i].itemName)) {
      cart.splice(i, 1)
      return cart
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  // write your code here
}
