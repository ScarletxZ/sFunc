# sFunc API
Here, you'll found the API of sFunc.

### Managing cookies
To manage cookies, there are three functions, I'll list below.

** function ** `sFunc_createCookie` - create a new cookie. 
```javascript
sFunc_createCookie('foo','bar','Fri, 27 Jan 9999 12:00:00 GMT','/');
```

** function ** `sFunc_getCookie` - get the cookie. Returns the value of the cookie.
```javascript
sFunc_getCookie('foo');
/* in this case, this will returns 'bar' */
```

** function ** `sFunc_deleteCookie` - delete some specific cookie. 
```javascript
sFunc_deleteCookie('foo');
/* this will delete the cookie called 'foo' */
sFunc_getCookie('foo');
/* this will returns 'undefined' */
```
