'use strict';

var score = 0;
var username = prompt( 'Tell me your name!');



var lowerCaseUsername = username.toLowerCase();
if (lowerCaseUsername === 'blandine') {
  alert( 'welcome back' + username);
} else {
  alert('welcome to my stite ' + username + '!');
}

questions();

function myNameFun() {
  var myName = prompt('Do you know my name?');

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


