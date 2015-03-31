/* 
* stealer.js
* this will prevent JS stealer from stealing your JS.
* Required : sFunc.js, this is an addon / plugin for sFunc. 
* You can't make this work without sFunc; because there's some unique objects inside it, such as $.appendChild etc.
*/

function stealer() {
  win = $.getLocation();
  tit = document.title;
  if(!win) {
    document.body.innerHTML('<p>Do not steal from ' + tit);
  }
}
