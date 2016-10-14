//对象和字符串的转换

var obj = {a: 'aaa', b: 'bbb'};
var objStr = JSON.stringify(obj);    // "{"a":"aaa","b":"bbb"}"
var newObj = JSON.parse(objStr);     // {a: "aaa", b: "bbb"}
