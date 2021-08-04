function  submitFun()
{
    var user = "";
    var age = 0;
    var email="";
    var pass="";
    var cpass="";
    user = document.getElementById('user').value;
    email = document.getElementById('email').value;
    ages = document.getElementById('age').value;
    pass = document.getElementById('pass').value;
    cpass = document.getElementById('cpass').value;
    var n = pass.localeCompare(cpass);
    //console.log(age);
    //  console.log(typeof(age));

    age = parseInt(ages);

    if(user.length<=8)
    {
        window.alert("Please Enter USername which is greater than 8 characters");
        document.getElementById('user').classList.add("wrong");
    }
    else if(age<=0 || age>=100)
    {
        window.alert("Please Enter a valid age"); 
        document.getElementById('age').classList,add("wrong");
    }
    else if(email.length<=6)
    {
        window.alert("Please Enter a Valid Email");
        document.getElementById('email').classList.add("wrong")
    }
    else if(pass.length<8)
    {
        window.alert("Please Enter a Stronger Password");
        document.getElementById('pass').classList.add("wrong")
    }
    else if(n!=0)
    {
        window.alert("Password and Confirm Password Does Not match");
        document.getElementById('cpass').classList.add("wrong");
    }
    else
    {
        window.alert("You are Good to GO!!");
    document.getElementById('user').classList.remove("wrong");
    document.getElementById('cpass').classList.remove("wrong");
    document.getElementById('pass').classList.remove("wrong");
    document.getElementById('email').classList.remove("wrong");
    document.getElementById('age').classList.remove("wrong");

    }
    console.log(user);
}


//Start Function which changes background aftr 5 secs

function changeBGColor()
{
    console.log("Etered in the function");
    document.body.style.backgroundColor = "#577590";
}
var id = 0;
function changeDec(stringID)
{
    id += 1;
    if(id%3==0)
    {
        document.getElementById(stringID).style.fontWeight = "bold";
    }
    else if(id%3==1)
    {
        document.getElementById(stringID).style.textDecoration = "underline";
    }
    else
    {
        document.getElementById(stringID).style.fontStyle = "italic";
    }
}
