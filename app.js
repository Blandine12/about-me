'use strict';
var username = prompt( 'Tell me your name!');
console.log('user\'s name was ' + username);


var lowerCaseUsername = username.toLowerCase();
if( lowerCaseUsername === 'blandine') {
  alert( 'welcome back' + username);
}else{
  alert('welcome to my stite ' + username + '!');
}

var myname = prompt('Do you know my name?');
console.log('user says' + myname);
var lowerCasemyname = myname.toLowerCase();
if( lowerCasemyname === 'yes') {
  alert('Great job ' + username);
}else{
  alert('Ask me ' + username);
}

var live = prompt('Do you live seattle?');
console.log('user says');
var lowerCaselive = live.toLowerCase();
if( lowerCaselive === 'yes') {
  alert('seattle is beautitful');
}else{
  alert('You will miss life in Washington ' + username);
}

var site = prompt('Do want to see my site?');
console.log('user says');
var lowerCasesite = site.toLowerCase();
if( lowerCasesite === 'yes') {
  alert('Thanks ' + username);
}else{
  alert('I will show you anyway ' + username);
}

var comment = prompt('do you want to live a comment?');
console.log('user says');
var lowerCasecomment = comment.toLowerCase();
if( lowerCasecomment === 'yes') {
  alert('Be nice ' + username);
}else{
  alert('Your comment will help ' + username);
}

var live = prompt('Do you live seattle?');
console.log('user say');
var lowerCaselive = live.toLowerCase();
if( lowerCaselive === 'yes') {
  alert('seattle is beautitful');
}else{
  alert('You will miss life in Washington ' + username);
}