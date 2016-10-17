//翻转字符串,字符串翻转

//形式1
function reverseString(str) {
  //1.将字符串转换为字符串数组
  var array=str.split("");
  //2.使用数组的reverse方法翻转数组顺序
  array.reverse();
  //3.将翻转的字符串数组再转化为字符串
  str = array.join("");
  //4.返回翻转后的字符串
  return str;
}

reverseString("HelloWord");

//形式2
function reverseString(str) {
  //1.将字符串转换为字符串数组
  var array=str.split("").reverse().join("");
  return str;
}

reverseString("HelloWord");
