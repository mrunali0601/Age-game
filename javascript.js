function ageindays() {
    var birthyear = prompt("What year you were born...?");
    var ageinday = (2021 - birthyear) * 365;
    var h1  = document.createElement('h1');
    var textAnswer = document.createTextNode("Your are " + ageinday + " days old.");
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);

}
function reset()
{
    document.getElementById('ageindays').remove();
    
}