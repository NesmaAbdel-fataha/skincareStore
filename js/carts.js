let allProducts = document.querySelector("#products")

function drowProduct(Cartproducts = []) {
  let products = JSON.parse(localStorage.getItem("product")) || Cartproducts;

    var proBox = products.map((item)=>{
        return `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.imageUrl}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
            <h6 class="card-title" id="title" style="padding: 10px;"> Product : ${item.title}</h6>
            <h6 id="category" style="padding: 10px;">Category : ${item.category}</h6>
            <h6 class="card-text" id="price" style="padding: 10px;">Price : ${item.price}</h6>
            <h6 class="card-text"  style="padding: 10px;">count : ${item.count}</h6>
            <button onclick="removeFromCart(${item.id})"; id="add-to-cart-button"  style="background-color: red; color: white; padding: 18px;border: 0;border-radius: 5px;">Remove</button>

            </div>
          </div>
        </div>
      </div>`

})
allProducts.innerHTML = proBox.join("");


  }
  drowProduct()
function removeFromCart(id){
  console.log(id)
  let deletedItem = localStorage.getItem("product")
  if(deletedItem){
    let items = JSON.parse(deletedItem);
let filteredItems =  items.filter((item) => item.id !== id)
    localStorage.setItem('product', JSON.stringify(filteredItems))
    drowProduct(filteredItems)
  }
}



//////////////////////////////////////              

//favourite
 
let AllProducts = document.querySelector("#productsFavourite")


function drowProductfav(Cartfav = []) {
  let productsFav = JSON.parse(localStorage.getItem("productsfavourite")) || Cartfav;

 var vafBox = productsFav.map((item)=>{
    return ` <div class="card" style="width: 10rem;">
    <img src="${item.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
    <i style="color: ${item.liked == true? "red" : "" }" onclick="addtoFavourite(${item.id})"  class="bi bi-heart-fill  favorite-icon" id="icon"></i>
    
<h6>${item.title}</h6>
<h6>${item.category}</h6>

    </div>
  </div>
`
    

})
AllProducts.innerHTML = vafBox.join("");
  }
  drowProductfav()
 /*
function removeFromCart(id){
  console.log(id)
  let deletedItem = localStorage.getItem("productsfavourite")
  if(deletedItem){
    let items = JSON.parse(deletedItem);
let filteredItems =  items.filter((item) => item.id !== id)
    localStorage.setItem('products favourite', JSON.stringify(filteredItems))
    drowProduct(filteredItems)
  }
}
*/


































 /*
<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${item.imageUrl}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
            <h6 class="card-title" id="title" style="padding: 10px;"> Product : ${item.title}</h6>
            <h6 id="category" style="padding: 10px;">Category : ${item.category}</h6>
            <h6 class="card-text" id="price" style="padding: 10px;">Price : ${item.price}</h6>
            <h6 class="card-text" id="price" style="padding: 10px;">count : ${item.count}</h6>

            <button  id="add-to-cart-button"  style="background-color: red; color: white; padding: 18px;border: 0;border-radius: 5px;">Remove</button>

            </div>
          </div>
        </div>
      </div>
 -----------------------------------------------------------------
 <div class="card border border-danger col-sm-12 col-md-6 col-lg-3  mt-5" style="width: 18rem;">
        <div class="card-body cardContent">
        <img src="${item.imageUrl}" class="card-img-top" alt="...">
          <h6 class="card-title" id="title">${item.title}</h6>
          <h6 class="card-text" id="price">${item.price}</h6>
          <h6 id="category">${item.category}</h6>
          <button onclick="removeFromCart(${item.id})"; id="add-to-cart-button"  style="background-color: red; color: white; padding: 18px;border: 0;border-radius: 5px;">Remove From Cart</button>
        
        </div>
        </div> */
        