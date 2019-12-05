'use strict';

var score = 0;
var username = prompt( 'Tell me your name!');
console.log('user\'s name was ' + username);


var lowerCaseUsername = username.toLowerCase();
if (lowerCaseUsername === 'blandine') {
  alert( 'welcome back' + username);
} else {
  alert('welcome to my stite ' + username + '!');
}

var myname = prompt('Do you know my name?');
console.log('user says ' + myname);
var lowerCaseMyname = myname.toLowerCase();
if ( lowerCaseMyname === 'yes') {
  alert('Great job ' + username);
} else {
  alert('Please, ask me ' + username);
  score ++;
}

var live = prompt('Do you live seattle?');
console.log('user says ' + live);
var lowerCaselive = live.toLowerCase();
if ( lowerCaselive === 'yes') {
  alert('seattle is beautitful');
} else {
  alert('Good for you ' + username + ' , seattle is hilly');
  score ++;
}

var create = prompt('Can you create a website?');
console.log('user say ' + create);
var lowerCaseCreate = live.toLowerCase();
if ( lowerCaseCreate === 'yes') {
  alert('Great ' + username );
} else {
  alert('Go to code fellows, they will teach you' );
  score ++;
}

var site = prompt('Do want to see my site?');
console.log('user says '+ site);
var lowerCasesite = site.toLowerCase();
if ( lowerCasesite === 'yes') {
  alert('Thanks ' + username);
} else {
  alert('I will show you anyway ' + username);
  score ++;
}

var comment = prompt('do you want to live a comment?');
console.log('user says ' + comment);
var lowerCaseComment = comment.toLowerCase();
if ( lowerCaseComment === 'yes') {
  alert('Be nice ' + username);
} else {
  alert('Your comment will help ' + username + ' ,Thanks');
  score ++;
}

// get help Andrew
var ageGuess = prompt('How old I am?');
var ageAnswer = 33;
for ( var i = 0; i < 4; i++) {

  if (ageGuess < ageAnswer) {
    ageGuess = prompt('too high');
  } else if ( ageGuess > ageAnswer) {
    ageAnswer = prompt('too low');
  } else {
    alert ('Correct');
    score ++;
    i = 4;
  }
}




alert ( ' You got ' + score + ' out of 6 questios!');



// var kidGuess = prompt('How many kid do I  have?');
// var kidAnswer = 2;

// if (kidGuess > kidAnswer) {
//   alert('too high');
// } if ( kidGuess < kidAnswer); {
//   alert('too low');
// }


// var agekidGuess = prompt('How old are my kids?');
// var agekidAnswer = 7;

// if (agekidGuess > agekidAnswer) {
//   alert('too high');
// } if ( agekidGuess < agekidAnswer); {
//   alert('too low');
// }


// var carGuess = prompt('How many car do I have?');
// var carAnswer = 1;

// if (carGuess > carAnswer) {
//   alert('too high');
// } if ( carGuess < carAnswer); {
//   alert('too low');
// }


// var serveGuess = prompt('How long do I serve?');
// var serveAnswer = 3;

// if (serveGuess > serveAnswer) {
//   alert('too high');
// } if ( serveGuess < serveAnswer); {
//   alert('too low');
// }
