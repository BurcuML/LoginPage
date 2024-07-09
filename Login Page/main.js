const signUpbtn = document.getElementById("sign-up")
const signInbtn = document.getElementById("sign-in")
const container = document.getElementById("container")

signUpbtn.addEventListener("click", function(){
    container.classList.add("active");
})

signInbtn.addEventListener("click", function(){
    container.classList.remove("active");
})