/*
* sFunc.js
* This work is copyrighted to ScarletxZ at GitHub. 
* This work is free. You can redistribute it.
*/

function sFunc_createCookie(name,value,expires,path) {
 document.cookie = 'name=value; expires=expires, path=path';
}

function sFunc_getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function sFunc_deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function sFunc_parse(obj) {
 JSON.parse(obj);
}

function sFunc_string(obj) {
 JSON.stringify(obj);
}

function sFunc_addListener(obj,listener,capture) {
 obj.addEventListener(obj, listener, capture);
}

function sFunc_getID(obj) {
 document.getElementById(obj);
}

function sFunc_addClass(elem,newclass) {
 elem.classList.add(newclass);
}

function sFunc_append(obj) {
 document.appendChild(obj);
}
