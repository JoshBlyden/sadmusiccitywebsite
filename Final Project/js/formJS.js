// BURGER MENU

// Selection of HTML objects
const burger = document.querySelector('.hamburgerMenu i');
const nav = document.querySelector('.linksAndCta');

// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav_active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
    console.log("works");
});




// Validation

function validateSignInForm(e){
    e.preventDefault();

    // Set up message array
    let messages = new Array;

    // Get email address and validate
    let email=document.getElementById('memberEmail').value;
    if(!ValidateEmail(email)){
        messages.push("Invalid Email");
    }

    // If no error messages show submit message
    let outputMessage = "";
    if(messages.length == 0){
        outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
    }else{
    // Else show error messages
        outputMessage = '<div class="alert alert-danger" role="alert">';
        for(let i=0;i<messages.length;i++){
            outputMessage+='<p>'+messages[i]+"</p>";
        }
        outputMessage+="</div>";
    }

    document.getElementById('errorMessages').innerHTML = outputMessage;

}

function validateNewUserForm(e){
    e.preventDefault();

     // Set up message array
     let messages = new Array;

    // Get email address and validate
    let email=document.getElementById('inputEmail').value;
    if(!ValidateEmail(email)){
        messages.push("Invalid Email");
    }

    // Get passwords and validate
    let pw1=document.getElementById('inputPassword5').value;
    let pw2=document.getElementById('inputPassword4').value;
    if(pw1.trim().length<3 || pw2.trim().length<3 || pw1 != pw2){
        messages.push("Invalid Passwords - either too short or they do not match");
    }

    // Validate Names
    let fname=document.getElementById('inputFName').value;
    if(fname.trim().length < 3){
        messages.push("Invalid First Name");
    }
    let lname=document.getElementById('inputLName').value;
    if(fname.trim().length < 3){
        messages.push("Invalid Last Name");
    }

     // If no error messages show submit message
     let outputMessage = "";
     if(messages.length == 0){
         outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
     }else{
     // Else show error messages
         outputMessage = '<div class="alert alert-danger" role="alert">';
         for(let i=0;i<messages.length;i++){
             outputMessage+='<p>'+messages[i]+"</p>";
         }
         outputMessage+="</div>";
     }
 
     document.getElementById('errorMessages').innerHTML = outputMessage;
}




function ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    return true;
  }else{
    return false;
  }
}

document.addEventListener('DOMContentLoaded', function(event) {

    jQuery('#relaxrExistingUser a').click(function (e) {
        e.preventDefault()
        jQuery(this).tab('show')
    });

    document.querySelector("#home .relaxrLoginForm").addEventListener('submit',validateSignInForm);

    document.querySelector("#profile .relaxrLoginForm").addEventListener('submit',validateNewUserForm);

});















// Thank you screen after submitting


//identify submit button
//identify the population count number

// When clicking submit- increase the pop count number
let popula = 4798
let submitButton = document.querySelector('.submitBtn');
let populationCount = document.querySelector('.popNumber');


submitButton.addEventListener('click', function(e) {
    console.log("Thisworks1");
    e.preventDefault();
    popula += 1;
populationCount.innerText = popula;
console.log("Thisworks2");

});



