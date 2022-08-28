let cartItemsLength = document.getElementById('cart-items-length');
let cartItemIds = [];

function addToCart(id){
    //console.log(id);
    cartItemIds.push(id);
    cartItemsLength.innerText=cartItemIds.length;
    let cartItem= globalProducts.filter((product)=> product.id == id)[0];
    //console.log(cartItem[0].title);
    createItemsInCart(cartItem);
} 