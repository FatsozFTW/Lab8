function change() {
    let BorderRed = document.getElementById("changeRed").value;
    let BorderGreen = document.getElementById("changeGreen").value;
    let BorderBlue = document.getElementById("changeBlue").value;
    let BorderWidth = document.getElementById("changeWidth").value;
    let BRed = document.getElementById("BchangeRed").value;
    let BGreen = document.getElementById("BchangeGreen").value;
    let BBlue = document.getElementById("BchangeBlue").value;

    if(BorderWidth <0 || BorderRed.length!=2 || BorderGreen.length != 2 || BorderBlue.length != 2 || BRed.length != 2 || BGreen.length != 2 || BBlue.length != 2)
    {
        alert("Invalid input");
    }
    else {
        let changep = document.getElementById("changergb");
        changep.style.borderWidth = BorderWidth+"px";
        changep.style.borderColor = "#"+BorderRed+BorderGreen+BorderBlue;
        changep.style.backgroundColor = "#"+BRed+BGreen+BBlue;
    }
}
