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

questions();

function myNameFun() {
  var myName = prompt('Do you know my name?');
  console.log('user says ' + myName);
  var lowerCaseMyname = myName.toLowerCase();
  if ( lowerCaseMyname === 'yes' || lowerCaseMyname === 'y') {
    alert('Great job ' + username);
  } else {
    alert('Please, ask me ' + username);
    score ++;
  }
}

function liveFun() {
  var live = prompt('Do you live seattle?');
  console.log('user says ' + live);
  var lowerCaselive = live.toLowerCase();
  if ( lowerCaselive === 'yes' || lowerCaselive === 'y') {
    alert('seattle is beautitful');
  } else {
    alert('Good for you ' + username + ' , seattle is hilly');
    score ++;
  }
}

function createFun() {
  var create = prompt('Can you create a website?');
  console.log('user say ' + create);
  var lowerCaseCreate = create.toLowerCase();
  if ( lowerCaseCreate === 'yes' || lowerCaseCreate === 'y') {
    alert('Great ' + username );
  } else {
    alert('Go to code fellows, they will teach you' );
    score ++;
  }
}

function siteFun() {
  var site = prompt('Do want to see my site?');
  console.log('user says ' + site);
  var lowerCasesite = site.toLowerCase();
  if ( lowerCasesite === 'yes' || lowerCasesite === 'y') {
    alert('Thanks ' + username);
  } else {
    alert('I will show you anyway ' + username);
    score ++;
  }
}

function commentFun() {
  var comment = prompt('do you want to live a comment?');
  console.log('user says ' + comment);
  var lowerCaseComment = comment.toLowerCase();
  if ( lowerCaseComment === 'yes' || lowerCaseComment === 'y') {
    alert('Be nice ' + username);
  } else {
    alert('Your comment will help ' + username + ' ,Thanks');
    score ++;
  }
}

function ageGuessFun() {
  // get help Andrew
  var ageGuess = parseInt(prompt('How old I am?'));
  var ageAnswer = 33;
  for ( var i = 0; i < 4; i++) {
    if (ageGuess < ageAnswer) {
      ageGuess = parseInt(prompt('too low'));
    } else if ( ageGuess > ageAnswer) {
      ageGuess = parseInt(prompt('too high'));
    } else if (ageGuess === ageAnswer) {
      alert ('Correct');
      score ++;
      i = 4;
    } else {
      ageGuess = parseInt(prompt('That\'s not a number... you jackass.'));
    }
  }
}


function scoreFun() {
  alert ( ' You got ' + score + ' out of 6 questios!');
}

function questions() {
  myNameFun();
  liveFun();
  createFun();
  siteFun();
  commentFun();
  ageGuessFun();
  scoreFun();
}


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
