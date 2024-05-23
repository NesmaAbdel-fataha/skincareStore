 let firstname=document.querySelector("#firstname");
 let lasttname=document.querySelector("#lastname");
 let email=document.querySelector("#email");
 let password=document.querySelector("#password");
 let submit=document.querySelector("#submit");
 

 submit.addEventListener("click",function(e){
    e.preventDefault()
    if(firstname.value ==="" ||lasttname.value ===""||email.value ===""||password.value ===""){
    alert("Please enter your data")
    }else{
        localStorage.setItem("firstname",firstname.value)
        localStorage.setItem("lastname",lastname.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
setTimeout(() => {
    window.location="login3.html"
}, 1500);
    }
    }
    )


