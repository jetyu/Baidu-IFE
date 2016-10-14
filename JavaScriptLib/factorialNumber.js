//Factorial 阶乘函数

//方法一
function factorial (num) {
    // 如果num是一个小于0的整数，就会拒绝
    if (num < 0) {
        return -1;
    } esle if (num === 0 || num === 1) {
        // 如果num是一个0或者1，其阶乘是1
        return 1;
    } else {
        // 调用递归
        return (num * factorial (num - 1));
        /*
         * 第一部分：不会只调用一次，会有多个嵌套
         * 每次调用  num === ?      num * factorial (num - 1)
         * 1st     factorial(5)    5 * factorial(5 - 1) => factorial(4)
         * 2nd     factorial(4)    4 * factorial(4 - 1) => factorial(3)
         * 3rd     factorial(3)    3 * factorial(3 - 1) => factorial(2)
         * 4th     factorial(2)    2 * factorial(2 - 1) => factorial(1)
         * 5th     factorial(1)    1 * factorial(1- 1) => factorial(0)
         * 第二部分： 如果条件符合，数字num本身乘于1 => num * 1, 
         * 并且函数将返回总的积
         * 5th => 5 * (5 - 1) => num = 5 * 4 = 20
         * 4th => 20 * (4 - 1) => num = 20 * 3 = 60
         * 3rd => 60 * (3 - 1) => num = 60 * 2 = 120
         * 2nd => 120 * (2 - 1) => num = 120 * 1 = 120
         * 1st => 120 => num = 120
         * 将上面的过程写成一行：(5*(5-1)*(4-1)*(3-1)*(2-1))=5*4*3*2*1=120
         */
    }
}

//方法二
function factorial (num) {
    // 第一步：创建一个变量result来存储num结果
    var result = num;
    // 如果num 小于 0, 就会拒绝
    if (num < 0) {
        return -1;
    } else if (num === 0 || num === 1) {
        // 如果num = 0 或者 num = 1，factorial将返回1
        return 1;
    } else {
        // 创建一个while循环
        while (num > 1) {
            // 每次迭代num 自减1
            num--;
            result *= num;

            /*
             * 迭代次数     num  num--  result   result *= num
             * 1st          5    4       5        20 = 5 * 4
             * 2nd          4    3      20        60 = 20 * 3
             * 3rd          3    2      60        120 = 60 * 2
             * 4th          2    1      120       120 = 120 * 1
             * 5th          1    0      120
             * 结束遍历
             */
        }
    }
    // 返回factorial最终乘积
    return result;
}

//方法三
function factorial ( num ) {
    // 如果 num 小于 0，factorial将终止
    if (num < 0) {
        return -1;
    } else if (num === 0 || num === 1) {
        // 如果num = 0 或 num = 1，factorial将返回1
        return 1;
    } else {
        // 开始for 循环，每次遍历减1
        for (var i = num - 1; i >= 1; i--) {
            num *= i;

            /*
             *  遍历次数  num   i = num - 1   num *= i       i--  i>= 1?
             *  1st       5    4 = 5 - 1     20 = 5 * 4      3    yes
             *  2nd      20    3 = 4 - 1     60 = 20 * 3     2    yes
             *  3rd      60    2 = 3 - 1     120 = 60 * 2    1    yes
             *  4th     120    1 = 2 - 1     120 =  120 * 1  0    no
             *  5th     120    0             120
             * 结束for循环
             */
        }

    }
    return num;
}
