const productsParentDiv = document.getElementById('products');
const createProductDiv = (productData) =>{
    const colDiv = document.createElement('div');
    const productDiv = document.createElement('div');
    const productImage = document.createElement('img');
    const productBody = document.createElement('div');
    const productHeader = document.createElement('div');
    const productTitle = document.createElement('h6');
    const productPrice = document.createElement('h5');
    const productDescription = document.createElement('p');
    const ratingStar1 = document.createElement('span');
    const ratingStar2 = document.createElement('span');
    const ratingStar3 = document.createElement('span');
    const ratingStar4 = document.createElement('span');
    const ratingStar5 = document.createElement('span');
    const ratingCount = document.createElement('span');
    const cardButtonOuter = document.createElement('div');
    const addToCartButton = document.createElement('a');
    const buyButton = document.createElement('a');

    colDiv.classList = "col-md-3";
    productDiv.classList= "card product";
    productImage.classList="card-img-top";
    productBody.classList="card-body";
    productHeader.classList="product-header";
    productTitle.classList="card-title";
    productPrice.classList="card-title product-price";
    productDescription.classList="card-text";
    ratingStar1.classList="fa fa-star checked";
    ratingStar2.classList="fa fa-star checked";
    ratingStar3.classList="fa fa-star checked";
    ratingStar4.classList="fa fa-star checked";
    ratingStar5.classList="fa fa-star checked";
    ratingCount.classList="rating-count";
    cardButtonOuter.classList="btn-outer";
    addToCartButton.classList="btn btn-primary add-to-cart-btn";
    buyButton.classList="btn btn-primary buy-btn";

    productImage.src=productData.image;
    productImage.alt="product-img";
    productTitle.innerText=`${productData.title.slice(0,20)}...`;
    productPrice.innerText=`$${productData.price}`;
    productDescription.innerText=`${productData.description.slice(0,50)}...`;
    ratingCount.innerText=`${productData.rating.count}`;
    addToCartButton.innerHTML = '<i class="fa fa-cart-plus" aria-hidden="true"></i>'
    buyButton.innerText="Buy now";

    colDiv.id=`product-${productData.id}`;

    colDiv.appendChild(productDiv);
    productDiv.appendChild(productImage);
    productDiv.appendChild(productBody);
    productBody.appendChild(productHeader);
    productHeader.appendChild(productTitle);
    productHeader.appendChild(productPrice);
    productBody.appendChild(productDescription);
    
    //productBody.appendChild(ratingCount);
    productBody.appendChild(cardButtonOuter);
    cardButtonOuter.appendChild(addToCartButton);
    cardButtonOuter.appendChild(buyButton);

    const ratingStars = Math.ceil(productData.rating.rate);
	  ratingStars >= 1 && productBody.appendChild(ratingStar1);
	  ratingStars >= 2 && productBody.appendChild(ratingStar2);
	  ratingStars >= 3 && productBody.appendChild(ratingStar3);
	  ratingStars >= 4 && productBody.appendChild(ratingStar4);
	  ratingStars >= 5 && productBody.appendChild(ratingStar5);
	  productBody.appendChild(ratingCount);

    addToCartButton.addEventListener('click',function(){
      addToCart(productData.id)
      this.innerHTML='<i class="fa fa-check-circle" aria-hidden="true"></i>';
      this.classList.add('disabled');
    });

    productsParentDiv.appendChild(colDiv);
}



/*

<div class="col-md-3">
                <div class="card product">
                    <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <div class="product-header">
                        <h5 class="card-title">Card title</h5>
                        <h4 class="card-title product-price">$30</h4>
                      </div>
                      <p class="card-text">Some quick example text to build...</p>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span>(102)</span>
                      <div class="btn-outer">
                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <a href="#" class="btn btn-primary">Buy now</a>
                      </div>
                    </div>
                </div>
</div>

*/