let email=document.querySelector("#email");
 let password=document.querySelector("#password");
 let submit=document.querySelector("#submit");

 let getEmail=localStorage.getItem("email")
 let getPassword=localStorage.getItem("password")

 submit.addEventListener("click",function(e) {
    e.preventDefault()
    if(email.value===""||password.value===""){
        alert("Please enter your data")
    }else{ if(getEmail===email.value&& getPassword===password.value){
            setTimeout(() => {
                window.location ="products.html"
                      }, 1500);
        }else{alert("your data is not correct")}
    }
    
 })
