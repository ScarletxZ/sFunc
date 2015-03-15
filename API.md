# sFunc API
Here, you'll found the API of sFunc.

### Selector
sFunc uses dollar sign and dot for the selector (`$.`), based on jQuery. But remember, I'm not making a jQuery copy, as this is build with a wrapper functions.

### Debug Options
**WIP**
Debug Options will checks if there's an existing name of wrapper function in your site, so it won't crash and it will notify you, also it will block the use of the sFunc wrapper function. I'll add it in the ver 0.0.4. There's a possibility if this feature will be canceled -- as I'll use a server-side script for this from external site and it will decrease your total amount of memory. So it is recommended to use the minified version when the ver 0.0.4 is released. 

### Managing cookies
To manage cookies, there are three functions, I'll list below.

**function** `sFunc_createCookie` - create a new cookie. 
```javascript
sFunc_createCookie('foo','bar','Fri, 27 Jan 9999 12:00:00 GMT','/');
```

**function** `sFunc_getCookie` - get the cookie. Returns the value of the cookie.
```javascript
sFunc_getCookie('foo');
/* in this case, this will returns 'bar' */
```

**function** `sFunc_deleteCookie` - delete some specific cookie. 
```javascript
sFunc_deleteCookie('foo');
/* this will delete the cookie called 'foo' */
sFunc_getCookie('foo');
/* this will returns 'undefined' */
```
