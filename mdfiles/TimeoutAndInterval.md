setTimeout & setInterval
====

Node.js中操作暫停的兩個簡單且常用的function：setTimeout(), setInterval()...

# setTimeout

setTimeout()的操作為暫停第二個欄位的毫秒數之後，再執行第一個欄位的function內容:

```
setTimeout(function(){
  console.log('Hello');
}, 1000);
```

# setInterval

而setInterval則是以區間的方式，每隔第二個欄位的毫秒數之後，再執行第一個欄位的function內容：

```
var i = 0;
setInterval(function(){
  console.log('count: %s', i);
  i++;
}, 1000);
```