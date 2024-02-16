function mystrfun(a) 
{
    var b = 'The string that was passed to this function is: ' + a;
    return b;
}

document.getElementById("callf1").innerHTML = mystrfun('Planet Earth');