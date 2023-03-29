// 类型转换
// number2string
var n1 = 123;
var s1 = String(n1);      // 使用String函数转换
var s2 = n1.toString();   // 使用数字自带方法toString转换
var s3 = n1 + '';         // 使用+运算符拼接转换
console.log(s1);
console.log(s2);
console.log(s3);

// string2number
var n1 = Number('123.123');      // 123.123  使用Number函数转换（只要是数字都能转）
var n2 = parseInt('123.923')     // 123  使用parseInt函数转换（只能转换为整型,小数点后数据丢失）
var n3 = parseInt('123px')       // 123  这种方法还可以去掉后面的字符（字符写前面的不行）
var n4 = parseFloat('123.123')   // 123.123  使用parseFloat转换，（只能转换为浮点型）
var n5 = '123.123' - 0           // 123.123  使用运算符-来转换
var n6 = '123.123' * 1           // 123.123  使用运算符*来转换
var n7 = '123.123' / 1           // 123.123  使用运算符/来转换
var n8 = 'abc' - 0               // NaN  因为不是数字

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);


// 案例
// var num1 = prompt('1num')
// var num2 = prompt('2num')
// alert(Number(num1) + Number(num2))

// 转换为布尔型
console.log('————————————————————————————————————————————————————————————————');
var b1 = Boolean('')        // false
var b2 = Boolean(0)         // false
var b3 = Boolean(NaN)       // false
var b4 = Boolean(null)      // false
var b5 = Boolean(undefined) // false
var b6 = Boolean('ABC')     // true
var b7 = Boolean(123)       // true

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);
console.log(b6);
console.log(b7);

