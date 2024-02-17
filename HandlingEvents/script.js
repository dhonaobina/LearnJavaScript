

function setColor(id) 
{
    var color = '#ffff80';
    var element = document.getElementById(id);
    element.style.backgroundColor = color;
};


function removeColor(id)
{
    var color1 = "";
    var element = document.getElementById(id);
    element.style.backgroundColor = color1;
}


function displayValue(msgid)
{
    var element = document.getElementById(msgid);
    document.getElementById("txtinput").innerHTML = document.getElementById("txtinput").innerHTML + ' ' + element.value; 
}