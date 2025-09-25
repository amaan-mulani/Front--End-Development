function validateForm()
{
    //Name Validation.
    let name=document.getElementById("fname").value.trim();
    let namePattern=/^[A-Za-z]+$/;
    if(name==="" || name!==namePattern)
    {
        alert("Please enter a valid name");
        return false;
    }

    //Password Validation.
    let password=document.getElementById("fpassword").value;
    if(password.length<6)
    {
        alert("Password should be atleast 6 characters long");
        return false;
    }

    //Email Validation.
    let email=document.getElementById("femail").value;
    let emailPattern=/^[^ ]+@[^ ]+\[a-z]{2,3}$/;
    if(email==="" || email!==emailPattern)
    {
        alert("Please enter a valid email");
        return false;
    }

    return true;
}