//数组排序

var arr = [1, 5, 6, 3];    //数字数组
arr.sort(function(a, b) {
    return a - b;   //从小到大排
    return b - a;   //从大到小排
    return Math.random() - 0.5;   //数组洗牌
});

var arr = [{   //对象数组
    num: 1,
    text: 'num1'
}, {
    num: 5,
    text: 'num2'
}, {
    num: 6,
    text: 'num3'
}, {
    num: 3,
    text: 'num4'
}];
arr.sort(function(a, b) {
    return a.num - b.num;   //从小到大排
    return b.num - a.num;   //从大到小排
});
