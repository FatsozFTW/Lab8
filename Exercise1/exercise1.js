function verify()
{
    let first = document.getElementById("pass1").value;
    let last = document.getElementById("pass2").value;
    if(first.length < 8 || last.length < 8)
    {
        alert("One or both of the passwords are not at least 8 characters long");
    }
    else if(first != last)
    {
        alert("the passwords do not match");
    }
    else{
        alert("Validated");
    }
}