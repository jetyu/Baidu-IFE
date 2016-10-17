/*
方法1：
1.先split()成数组。
2.将数组中的元素全部小写化。（toLowerCase()）
3.使用replace(),toUpperCase()方法将每一项首字母大写化，之后join()就可以了。
 */

function titleCase(str) {
    var array=str.toLowerCase().split(" ");

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase()
    }

}

titleCase("I'm a little tea pot");
