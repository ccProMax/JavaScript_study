// 内置对象
console.log(Math.random() * (10 - 1) + 1);
var a1 = Math.floor(Math.random() * (10 - 1)) + 1  //??????
console.log(a1);

// date
var d1 = new Date();
console.log(d1);
var birthday = new Date(1995, 11, 17);
console.log(birthday);
console.log(d1.getFullYear());

// 案例
var d1 = new Date('2023-03-24T16:00:00');
var d2 = new Date();
var cha = d1.getTime() - d2.getTime();
var date = new Date(cha);
console.log(date);
var h1 = date.getHours();
var m1 = date.getMinutes();
var s1 = date.getSeconds();
console.log(h1, m1, s1)

// 数组
var arr = [];
var obj = {};
var str = "";
var t1 = arr instanceof Array   // true
var t2 = obj instanceof String  // false
var t3 = str instanceof String  // true
console.log(t3);
Array.isArray([1, 2, 3]);  // true


// 字符串
var str = 'JavaScript';
var index = str.indexOf("S", 0);    //0表示从索引为0开始查找，0是可选的。返回的是4。
console.log(index);

var str = 'JavaScript';
var char1 = str.charAt(4);   // 通过索引找出字符。
var char2 = str.charCodeAt(4);  // 通过索引找出字符的ASCII码
var char3 = str[4]  // 通过索引直接找。


// 案例
var str1 = 'asf;jczjx;gasdfasnf;leqewj alasd dxcgvs'
var obj1 = {};
for (const index of str1) {
    if (obj1[index]) {
        obj1[index] += 1
    } else {
        obj1[index] = 1
    }
}
var arr = Object.entries(obj1);
console.log(arr);
arr.sort((a, b) => b[1] - a[1]);   // 给arr进行排序，调用sort方法，传入一个函数，该函数返回 a[1] - b[1]
console.log(arr[0]);

// 字符串方法
var str1 = "hello";
var str2 = "world";
var str3 = str1.concat(str2)    // 将str1和str2拼接起来，可以拼接多个。

var str1 = "aaaaabbbb";
var str2 = str1.replace("b", "c")     //aaaaacbbb
var str3 = str1.replaceAll("b", "c")  //aaaaacccc
console.log(str3)

var str1 = "hello,world";
var str2 = str1.split(',');   // 以逗号分割，返回数组['hello', 'world']
console.log(str2); 