// 运算符
// • x = y++: 先将 y 赋值给 x，再对 y 进行自增运算。
// • x = ++y: 先将 y 进行自增运算，再将 y 赋值给 x 。
// • x = y--: 先将 y 赋值给 x，再对 y 进行自减运算。
// x = --y: 先将 y 进行自减运算，再将 y 赋值给 x 。

var s1 = "hello" + " " + "world"   // hello world
var s2 = "hello" + 123             // hello123   字符串与数字相加，返回字符串
var s3 = "100" + 21                // 10021      只要是字符串参与+运算符，返回的都是字符串。
var s4 = "cc" + undefined          // ccundefined

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

// 小数运算
var n1 = 0.1 + 0.2    // 0.30000000000000004

console.log(n1);


// 三目运算符
age = 10
var voteable = (age < 18) ? "年龄太小" : "年龄已达到";
console.log(voteable);

// 短路运算
var d1 = 1 && 'abc';   // abc  因为第一个条件为真，所以返回了第二个条件。
var d2 = 'x' || fale;  // x    一样的道理，第一个为真直接就返回了，第二个fale是个未定义的变量，但它根本就不会去执行，所以也不会报错。

console.log(d1);
console.log(d2);

false
true
false
true