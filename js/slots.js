'use strict';

function play_round(){
    var first = Math.floor(Math.random() * 10);
    var second = Math.floor(Math.random() * 10);
    var third = Math.floor(Math.random() * 10);

    var dcoins = 0;
    var multiplier = parseInt(document.getElementById('multiplier').value);
    var message = '';

    // If all numbers match...
    if(first === second
      && second === third){
        // ...give player twice as many coins as the numbers that matched.
        dcoins = first * 2 * multiplier;
        message = 'Three Match! +' + dcoins + ' coins!';

    // If first number matches either of the other two numbers...
    }else if(first === second
      || first === third){
        // ...give player as many coins as the first number.
        dcoins = first * multiplier;
        message = 'Two Match. +' + dcoins + ' coins.';


    // If the second and third numbers match...
    }else if(second === third){
        // ...give player as many coins as second number.
        dcoins = second * multiplier;
        message = 'Two Match. +' + dcoins + ' coins.';

    // If no numbers match...
    }else{
        // ...take away two coins from player.
        dcoins = -2 * multiplier;
        message = 'No Match... ' + dcoins + ' coins...';
    }

    coins += dcoins;
    document.getElementById('coins').innerHTML = coins;
    document.getElementById('number-first').innerHTML = first;
    document.getElementById('number-second').innerHTML = second;
    document.getElementById('number-third').innerHTML = third;
    document.getElementById('result').innerHTML = message;
}

function reset(){
    if(!window.confirm('Reset coins?')){
        return;
    }

    coins = 100;
    document.getElementById('coins').innerHTML = coins;
    document.getElementById('number-first').innerHTML = '';
    document.getElementById('number-second').innerHTML = '';
    document.getElementById('number-third').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}

var coins = 100;

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    // S: play a round.
    if(key === 83){
        play_round();
    }
};

window.onload = function(e){
    document.getElementById('coins').innerHTML = coins;
    document.getElementById('multiplier').value = 1;
};
