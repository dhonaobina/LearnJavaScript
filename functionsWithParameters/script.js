/*callf1*/
function mystrfun(a) 
{
    var b = 'The string that was passed to this function is: ' + a;
    return b;
}

/*callf2*/
function other_mystrfun(c)
{
    var d = 'I want to learn to code and  ' + c;
    return d;
}

/*callf3*/
function mycalc (num1, num2) 
{
    var val = num1 + ` multiplied by `+ num2 + `  is: ` + num1*num2;
    return val;
}

document.getElementById("callf1").innerHTML = mystrfun('Planet Earth');
document.getElementById("callf2").innerHTML = other_mystrfun('I will not give up!');
document.getElementById("callf3").innerHTML = mycalc(32,54);
