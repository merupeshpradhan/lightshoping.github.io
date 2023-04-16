function store(){

    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Password = document.getElementById('password').value;
    var Cnfpassword = document.getElementById('cnfpassword').value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(Name.length == 0){
        alert('Please fill Name');
    }
    else if(Email.length == 0){
       alert('Please fill Email');

    }
    else if(Password.length == 0){
        alert('Please Enter Your Password');
 
     }
    else if(Cnfpassword.length == 0){
        alert('Please Enter Conform password');
 
     }else if(Password.length < 8){
        alert('Password must bbe Max of 8');

    }else if(!Password.match(numbers)){
        alert('please add 1 number');

    }else if(!Password.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!Password.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', Name);
        localStorage.setItem('email', Email);
        localStorage.setItem('password', Password);
        alert('Your account has been created');
        window.location.href = "login.html";
    }
}


//checking Registration
function check(){
    var Name = localStorage.getItem('name');
    var Email = localStorage.getItem('email');
    var pw = localStorage.getItem('password');


    var Name = document.getElementById('name');
    var Email = document.getElementById('email');
    var pw = document.getElementById('password');
    if(Name.value == Name && Email.value == Email &&  pw == password){
        alert('You successfully registered ');
    }else{
        alert(' Registertion Faild');
    }
}
//Login
function Login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    var Email = localStorage.getItem('email');
    var Password = localStorage.getItem('password');
    if(email== Email &&  password == Password)
    {
        alert('Login Successfully ');
    }else{
        alert(' Login Faild');
    }
}
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle()
{
    if(    MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px";
    }
    else
    {
        MenuItems.style.maxHeight = "0px";
    }
}