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
