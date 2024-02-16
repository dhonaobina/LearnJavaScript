function mystrfun(a) 
{
    var b = 'The string that was passed to this function is: ' + a;
    return b;
}

document.getElementById("callf1").innerHTML = mystrfun('Planet Earth');

function other_mystrfun(c)
{
    var d = 'I want to learn to code and  ' + c;
    return d;
}

document.getElementById("callf2").innerHTML = other_mystrfun('I will not give up!');