/*
* sFunc.js
* This work is copyrighted to ScarletxZ at GitHub. 
* This work is free. You can redistribute it.
*/

function $.createCookie(name,value,expires,path) {
 today = new Date();
 expire = new Date();
 expire.setTime(today.getTime() + 3600000*24*expires);
 document.cookie = name+"="+escape(value)+ ";expires="+expire.toGMTString()+";path="path;
}

function $.getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function $.dumpCookie(name) {
  $.createCookie(name,"",-1);
}

function $.parse(obj) {
 JSON.parse(obj);
}

function $.stringify(obj) {
 JSON.stringify(obj);
}

function $.addListener(obj,listener,capture) {
 obj.addEventListener(obj, listener, capture);
}

function $(obj) {
 document.getElementById(obj);
}

function $.addClass(elem,newclass) {
 elem.classList.add(newclass);
}

function $.append(obj) {
 document.appendChild(obj);
}
