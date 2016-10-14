//手机号验证
var validate = function(num) {
    var exp = /^1[3-9]\d{9}$/;
    return exp.test(num);
};
