'use strict';
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
}

var live = prompt('Do you live seattle?');
console.log('user says ' + live);
var lowerCaselive = live.toLowerCase();
if ( lowerCaselive === 'yes') {
  alert('seattle is beautitful');
} else {
  alert('Good for you ' + username + ' , seattle is hilly');
}

var create = prompt('Can you create a website?');
console.log('user say ' + create);
var lowerCaseCreate = live.toLowerCase();
if ( lowerCaseCreate === 'yes') {
  alert('Great ' + username );
} else {
  alert('Go to code fellows, they will teach you' );
}

var site = prompt('Do want to see my site?');
console.log('user says '+ site);
var lowerCasesite = site.toLowerCase();
if ( lowerCasesite === 'yes') {
  alert('Thanks ' + username);
} else {
  alert('I will show you anyway ' + username);
}

var comment = prompt('do you want to live a comment?');
console.log('user says ' + comment);
var lowerCaseComment = comment.toLowerCase();
if ( lowerCaseComment === 'yes') {
  alert('Be nice ' + username);
} else {
  alert('Your comment will help ' + username + ' ,Thanks');
}

