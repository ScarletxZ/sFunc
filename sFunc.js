/*
* sFunc.js
* This work is copyrighted to ScarletxZ at GitHub. 
* This work is free. You can redistribute it.
*/

var defaults = {
 enable:true //set to false to disable sFunc
}

if(defaults.enable === false) {
 if(sFunc) {
  return false;
 }
}

var sFunc = {
 createCookie: function(name,value,expires,path) {
  today = new Date();
  expire = new Date();
  expire.setTime(today.getTime() + 3600000*24*expires);
  document.cookie = name+"="+escape(value)+ ";expires="+expire.toGMTString+";path="path;
 },
 getCookie: function(name) {
  value = "; " + document.cookie;
  parts = value.split("; " + name + "=");
  if(parts.length == 2) return parts.pop().split(";").shift();
 },
 dumpCookie: function(name) {
  sFunc.createCookie(name,"",-1);
 },
 parseJSON: function(obj) {
  JSON.parse(obj);
 },
 stringJSON: function(obj) {
  JSON.stringify(obj);
 },
 addListener: function(obj,listener,capture) {
  obj.addEventListener(obj, listener, capture);
 },
 addClass: function(elem,newclass) {
  elem.classList.add(newclass);
 },
 append: function(obj) {
  document.appendChild(obj);
 }
};
