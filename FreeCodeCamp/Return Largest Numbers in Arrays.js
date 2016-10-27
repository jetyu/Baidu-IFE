/*
右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。

提示：你可以用for循环来迭代数组，并通过arr[i]的方式来访问数组的每个元素。
 */
function largestOfFour(arr) {
    // You can do this!
    var result = []; //定义空数组，来存储新的数组
    for (var i = 0; i < arr.length; i++) { //遍历数组
        var largestNumber = 0; //找出数组中最大的元素
        for (var j = 0; j < arr[i].length; j++) {
            if (largestNumber < arr[i][j]) {
                largestNumber = arr[i][j];
            }
        }
        result[i] = largestNumber;
    }
    return result;
}
largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
