'use script';

function displaymessage() {
    return 'The code in the function is executed.';
}

function calc() {
    return '5 multiplied 4 times is ' + 5*4;
}

document.getElementById('callf1').innerHTML = displaymessage();
document.getElementById('callf2').innerHTML = calc();

