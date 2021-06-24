const emailVal = document.getElementById("email");
const preText = document.querySelector(".preText");

const validateIcon = document.querySelector(`.validateIcons`)
console.log("here", validateIcon)

//event listeners and keyup//
emailVal.addEventListener("keyup", (e)=>{
    const isValidEmail = emailVal.checkValidity()

    if(isValidEmail){
        preText.textContent = "Correct!"
        preText.style.color = "green"
        preText.style.paddingLeft = "7%"
        preText.style.paddingTop = "1%"
        preText.style.fontWeight = "600"
        validateIcon.innerHTML = "<i class='fas fa-check-circle fa-2x'></i>";
        console.log( validateIcon.innerHTML)
        validateIcon.style.color="green";
        validateIcon.style.top = "45%";
        validateIcon.style.left = "70%";

    }else{
        preText.textContent = "Please provide a valid email!"
        preText.style.color = "hsl(0, 36%, 70%)"
        preText.style.paddingLeft = "7%"
        preText.style.paddingTop = "1%"
        preText.style.fontWeight = "600"
        validateIcon.innerHTML = "<img src='images/icon-error.svg'>";
        validateIcon.style.color="red";
    }
})
