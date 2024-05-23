let allProducts = document.querySelector("#products")
let title = document.querySelector("#title")
let price = document.querySelector("#price")
let category = document.querySelector("#category")
//////////////////////
let header = document.querySelector("#header")
let btnAdd = document.querySelector("#btnAdd")
let login = document.querySelector("#login")
let register = document.querySelector("#register")
let icon = document.querySelector("#icon")
let textUser = document.querySelector("#textUser")
///////////////////
let searchSection = document.querySelector("#searchSection")
let searchOption = document.querySelector("#searchOption")
let searchByName = document.querySelector("#SearchByName")
let searchByCategory = document.querySelector("#SearchByCategory")
let searchText = document.querySelector("#searchText")


let dataPro = [];

    var products = [
        {
        id:1,
        title:"hair Straightener",
        price: "350$",
        category: "hair care",
        imageUrl: "img/1.jpg"

    },
    {
        id:2,
        title: "vitamin C serum",
        price: "80$",
        category: "skin-care",
        imageUrl: "img/2.jpg"

    },
    {
        id:3,
        title: "cerave cleanser",
        price: "300$",
        category: "skin-care",
        imageUrl: "img/n3.jpg"

    },
    {
        id:4,
        title: "body lotion",
        price: "250$",
        category: "body care",
        imageUrl: "img/n4.jpg"

    },
    {
        id:5,
        title: "mascara",
        price: "100$",
        category: "make-up",
        imageUrl: "img/n5.jpg"

    },
    {
        id:6,
        title: "curling iron curls",
        price: "500$",
        category: " hair care",
        imageUrl: "img/n6.jpg"

    },
    {
        id:7,
        title: "french Manicure",
        price: "60$",
        category: "make-up",
        imageUrl: "img/n7.jpg"

    },
    {
        id:8,
        title: "shampoo Dove",
        price: "100$",
        category: "hair care",
        imageUrl: "img/n8.jpg"

    },
    {
        id:9,
        title: "scarf",
        price: "150$",
        category: "clothes",
        imageUrl: "img/n9.jpg"

    },
    {
        id:10,
        title: "lenses",
        price: "180$",
        category: "makeup",
        imageUrl: "img/n10.png"

    },
    {
        id:11,
        title: "blow dryer",
        price: "400$",
        category: "hair care",
        imageUrl: "img/n11.jpg"

    },
    {
        id:12,
        title: "foundation",
        price: "200$",
        category: "makeup",
        imageUrl: "img/n12.jpg"

    }
   
   
    ]

    function drowData() {
        var proBox = products.map((item)=>{
    
    return `<div class="card border border-danger col-sm-12 col-md-6 col-lg-3  mt-5" style="width: 18rem;">
    <div class="card-body cardContent">
    <img src="${item.imageUrl}" class="card-img-top" alt="...">
      <h6 class="card-title" id="title">title: ${item.title}</h6>
      <h6 class="card-text" id="price">price: ${item.price}</h6>
      <h6 id="category">category: ${item.category}</h6>
      <button onclick="press()" class="btnAdd mb-3" id="btnAdd" onclick="addtocart()">Add to cart</button>
      <i onclick="press()" class="bi bi-heart-fill favorite-icon " id="icon"></i>
    </div>
    </div>
    `
    })
    
    allProducts.innerHTML = proBox.join("");
      }
      drowData()
  ////////////
 

        function press() {
            window.location = "login3.html"
          }
//////////////////////////////////
//SEARCH
let searchMood = "name" ;
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
             <h6 class="card-text" id="price">price:  ${item.price}</h6>
             <h6 id="category">category: ${item.category}</h6>
             <button onclick="press()" class="btnAdd mb-3" id="btnAdd">Add to cart</button>
             <i onclick="press()" class="bi bi-heart-fill favorite-icon heart" id="icon"></i>
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
             <button onclick="press()" class="btnAdd mb-3" id="btnAdd">Add to cart</button>
             <i onclick="press()" class="bi bi-heart-fill favorite-icon heart" id="icon"></i>
           </div>
           </div>`
        }
       
               }) 
}

allProducts.innerHTML = proBox.join("");

}


 ///////////

  
 