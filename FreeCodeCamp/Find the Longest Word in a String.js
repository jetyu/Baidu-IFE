/*
找到提供的句子中最长的单词，并计算它的长度。
函数的返回值应该是一个数字。
 */
function findLongestWord(str) {
  var array = str.split(" ");

  var result = array.sort(function(a,b){
    return b.length -a.length;
  });

  return result[0].length;
}

findLongestWord("The quick fox jumped over the lazy dog");
