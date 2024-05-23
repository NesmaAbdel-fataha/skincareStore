let allProducts = document.querySelector("#products")
let title = document.querySelector("#title")
let price = document.querySelector("#price")
let category = document.querySelector("#category")
//////////////////////
let header = document.querySelector("#header")
let btnAdd = document.querySelector(".btnAdd")
let login = document.querySelector("#login")
let register = document.querySelector("#register")
let icon = document.querySelector("#icon")
///////////////////
let searchSection = document.querySelector("#searchSection")
let searchOption = document.querySelector("#searchOption")
let searchByName = document.querySelector("#SearchByName")
let searchByCategory = document.querySelector("#SearchByCategory")
let searchText = document.querySelector("#searchText")

var cartproductDiv= document.getElementById("cartProduct")
var dropdown= document.getElementById("dropdown")
var down= document.getElementById("down")
var select = document.querySelector(".select-menu")
let toggle = document.querySelector(".toggle")
var iconCart= document.getElementById("iconCart")
var lengthCart= document.getElementById("lengthCart")
/////////////44////////
var decrementButton = document.getElementById('decrement');
 var incrementButton = document.getElementById('increment');
 var countDisplay = document.getElementById('countDisplay');
    




let dataPro = [];
var products = [
    {
    id:1,
    title:"hair Straightener",
    price: "350$",
    category: "hair care",
    imageUrl: "img/1.jpg",
    count:1

},
{
    id:2,
    title: "vitamin C serum",
    price: "80$",
    category: "skin-care",
    imageUrl: "img/2.jpg",
    count:1
},
{
    id:3,
    title: "cerave cleanser",
    price: "300$",
    category: "skin-care",
    imageUrl: "img/n3.jpg",
    count:1
},
{
    id:4,
    title: "body lotion",
    price: "250$",
    category: "body care",
    imageUrl: "img/n4.jpg",
    count:1
},
{
    id:5,
    title: "mascara",
    price: "100$",
    category: "make-up",
    imageUrl: "img/n5.jpg",
    count:1

},
{
    id:6,
    title: "curling iron curls",
    price: "500$",
    category: " hair care",
    imageUrl: "img/n6.jpg",
    count:1

},
{
    id:7,
    title: "french Manicure",
    price: "60$",
    category: "make-up",
    imageUrl: "img/n7.jpg",
    count:1
},
{
    id:8,
    title: "shampoo Dove",
    price: "100$",
    category: "hair care",
    imageUrl: "img/n8.jpg",
    count:1
},
{
    id:9,
    title: "scarf",
    price: "150$",
    category: "clothes",
    imageUrl: "img/n9.jpg",
    count:1
},
{
    id:10,
    title: "lenses",
    price: "180$",
    category: "makeup",
    imageUrl: "img/n10.png",
    count:1

},
{
    id:11,
    title: "blow dryer",
    price: "400$",
    category: "hair care",
    imageUrl: "img/n11.jpg",
    count:1

},
{
    id:12,
    title: "foundation",
    price: "200$",
    category: "makeup",
    imageUrl: "img/n12.jpg",
    count:1

}
]
//<span onclick="addtocart(${item.id})"; class="toggle"><button type="button"  class="btnAdd">Add to cart</button></span>

function drowData() {
  var proBox = products.map((item)=>{
    console.log("eee",item)
return `<div class="card border border-danger col-sm-12 col-md-6 col-lg-3 mt-5 " style="width: 18rem;">
<div class="card-body cardContent">
<img src="${item.imageUrl}" class="card-img-top" alt="...">
<h6 class="card-title" id="title">titel: ${item.title}</h6>
<h6 class="card-text" id="price">price: ${item.price}</h6>
<h6 id="category">category: ${item.category}</h6>
<button onclick="addtocart(${item.id})"; id="add-to-cart-button"  style="background-color: red; color: white; padding: 18px;border: 0;border-radius: 5px;">Add to Cart</button>

<i style="color: ${item.liked == true? "red" : "" }" onclick="addtoFavourite(${item.id})"  class="bi bi-heart-fill  favorite-icon" id="icon"></i>


</div>
</div>
`
})
//addtocart(${item.id})
allProducts.innerHTML = proBox.join("");
}
drowData()

let favoriteIcon = document.querySelectorAll(".favorite-icon")






var favouriteItem=[]
function addtoFavourite(id){
  
  dropdown.style.display = "block";
  down.style.rotate = "180deg"
 //let uniqeProducts= getUniqeArr(dataPro, "id")

  let choosenitem = products.find((item)=>item.id === id)
   choosenitem.liked = true;
  favouriteItem =[...favouriteItem,choosenitem]
  let uniqeProducts= getUniqeArr(favouriteItem, "id")
  localStorage.setItem("productsfavourite",JSON.stringify(uniqeProducts))


  


products.map(item =>{ 
  if(item.id === choosenitem.id){
item.liked = true
}

})
localStorage.setItem("products" , JSON.stringify(products))
drowData(products)


}




  //////////////////////////////////////////////////////////////////////
 let buttons = document.querySelectorAll('#add-to-cart-button');

function toggleCartButton(button) {
  if (button.textContent === 'Add to Cart') {
    
  
    button.textContent = 'Delete from Cart';
    button.style.backgroundColor = 'black';
    button.style.color = 'white'
   
  } else {
    button.textContent = 'Add to Cart';
    button.style.backgroundColor = 'red';

   // button.addEventListener('click', toggleCartButton);
  }
}

// Add the initial "Add to Cart" functionality

buttons.forEach(button => {
  button.addEventListener('click', () => {
    toggleCartButton(button);
    console.log('Adding item to cart...');
  });
});


//////////////////////////////////////////////////////////////////


//let allItems =[]
function addtocart(id){
  dropdown.style.display = "block";
  down.style.rotate = "180deg"
  
  let choosenitem = products.find((item)=>item.id === id)
  console.log(choosenitem)
let item = dataPro.some(i => i.id === choosenitem.id)
if(item){
addedItem=dataPro.map(p=>{
  if(p.id===choosenitem.id)p.count+=1;
  return p;
})
}else{
  dataPro.push(choosenitem)
//console.log("a",allItems)
}
cartproductDiv.innerHTML = "";
dataPro.forEach(item =>{
cartproductDiv.innerHTML +=`<p style="display: inline-block; background-color:#aaa;color:black;">${item.title}${item.count} </p>
<button style="outline: none;background-color: transparent;color: red;border: none;" id="increment">+</button>
<span id="countDisplay"></span> 
<button style="outline: none;background-color: transparent;color: red;border: none;" id="decrement">-</button>
`})
//${item.title}${item.count}
var cartProductLength=document.querySelectorAll("#cartProduct p")
//console.log(cartProductLength)
lengthCart.style.display = "block"
 var total=lengthCart.innerHTML = cartProductLength.length
//let uniqeProducts= getUniqeArr(dataPro, "id")
// dataPro =[...dataPro,choosenitem]
 localStorage.setItem("product",JSON.stringify(dataPro))}
 if(localStorage.product !=null){
  dataPro=JSON.parse(localStorage.product)
}else{dataPro=[];}

function getUniqeArr(arr,filtertype){
let uniqe= arr.map((item) => item[filtertype]).map((item,i,final )=> final.indexOf(item)===i&&i)
.filter((item) => arr[item]).map(item => arr[item])

return(uniqe)
}


 select.addEventListener("click",clickicon)
function clickicon(){
  dropdown.style.display = "none";
  down.style.rotate = "360deg"
  
 }

///////////////////////////////

 var textUser = document.querySelector("#textUser")

 if (localStorage.getItem('firstname')) {
       
  
  
var text=  textUser.innerHTML = "welcome"+"  "+localStorage.getItem("firstname")
console.log(text)

//dataPro.push(products)
  //console.log(dataPro)
  
}else{
 
  
}


  //SEARCH
var searchMood = "name" ;
function getSearchMood(value){
  console.log(value)
  if(value=="Search By Name"){
    searchMood = "name"
    searchText.placeholder = "search by name"
  }else{
    searchMood ="category"
    searchText.placeholder = "search by category"
  }
}
//search data
function SearchData(value){
if(searchMood=="name"){
    var proBox = products.map((item)=>{
        if(item.title.includes(value)) {
           return `<div class="card border border-danger col-sm-12 col-md-6 col-lg-3  mt-5" style="width: 18rem;">
           <div class="card-body cardContent">
           <img src="${item.imageUrl}" class="card-img-top" alt="...">
             <h6 class="card-title" id="title">title: ${item.title}</h6>
             <h6 class="card-text" id="price">price: ${item.price}</h6>
             <h6 id="category">category: ${item.category}</h6>
             <button  class="btnAdd mb-3" id="btnAdd">Add to cart</button>
             <i onclick="addtoFavourite(${item.id})"  class="bi bi-heart-fill  favorite-icon heart" id="icon" ></i>
             </div>
           </div>`
        }
       
               })
}else{
    var proBox = products.map((item)=>{
        if(item.category.includes(value)) {
           return `<div class="card border border-danger col-sm-12 col-md-6 col-lg-3  mt-5" style="width: 18rem;">
           <div class="card-body cardContent">
           <img src="${item.imageUrl}" class="card-img-top" alt="...">
           <h6 class="card-title" id="title">title: ${item.title}</h6>
             <h6 class="card-text" id="price">price: ${item.price}</h6>
             <h6 id="category">category: ${item.category}</h6>
             <button  class="btnAdd mb-3" id="btnAdd">Add to cart</button>
             <i onclick="addtoFavourite(${item.id})"  class="bi bi-heart-fill  favorite-icon heart" id="icon" ></i>
             </div>
           </div>`
        }
       
               }) 
}

allProducts.innerHTML = proBox.join("");

}


   


