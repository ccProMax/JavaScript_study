// JavaScript是动态类型语言，它的变量类型可以随时变化，像python一样。
var x;               // x 为 undefined
var x = 5;           // 现在 x 为数字
var x = "John";      // 现在 x 为字符串
var x = 123;
console.log(x);

// 查看一个变量的类型
typeof "John"                // 返回 string
console.log(typeof typeof 1231)   // 可以发现，使用typeof返回的类型的类型是str类型。
typeof 3.14                  // 返回 number
typeof false                  // 返回 boolean
typeof [1, 2, 3, 4]             // 返回 object
typeof { name: 'John', age: 34 } // 返回 object
typeof null;           //返回 object
console.log(typeof null);

// 在JavaScript中只有一种数字类型，它可以带小数也可以不带小数
var x1 = 32.00;  // 32，小数会被去掉。
var x2 = 32.01;   // 32.01，小数不会被去掉
// 科学计数法
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123
// 不同进制（赋值给变量的字面量可以是不同进制的，赋值完后变量默认会以十进制展示）
var y1 = 100;      // 十进制
var y2 = 0144;     // 8进制（前面加个0）
var y3 = 0x64;     // 16进制（前面加个0x）
var y4 = 0b1010;   // 2进制（前面加个0b）
// 数字类型的属性
var max = Number.MAX_VALUE;  // 获得数字型的最大值  1.7976931348623157e+308
var min = Number.MIN_VALUE;  // 获得数字型的最小值  5e-324
// 数值中的三个特殊值（Infinity、-Infinity、NaN）
console.log(typeof Infinity, typeof -Infinity, typeof NaN);   // number，他们都是数字类型。
console.log(Number.MAX_VALUE * 2)   //Infinity，因为超过了数字类型能表示的最大值，就用无穷大来表示
console.log(Number.MAX_VALUE * -2)  //-Infinity，超过最小值，就以无穷小表示 
console.log(Number('abc'));         // NaN，因为'abc'无法转换为数字类型。所以返回NaN。 

// 数字类型的函数
//判断是否为非数字。
var b1 = isNaN(123)    // false，不是 非数字类型
var b2 = isNaN('aaa')  // true，是 非数字类型，因为它不能转化为数字
var b3 = isNaN('123')  // false，因为它能够转换为数字，所以不是非数字。
console.log(b1, b2);

//--------------------------------------------------------------
// 字符串类型
var s1 = '可以使用单引号';
var s2 = "也可以使用双引号";
var s3 = '也可"这样"包含';
// 占位符
var myname = 'cc';
var age = 18;
var str = `My name is ${myname} and I am ${age} years old.`
// 格式化输出
var str = `
  This is a
  multi-line
  string.
`;
console.log(str);
// 字符串属性
var s1 = '名字5个字';
var n1 = s1.length   // 得到s1这个字符串的长度。
// 字符串拼接
var str1 = 'Hello';
var str2 = 'World';
var result = str1 + ' ' + str2;  // 方法1，直接用+号拼接。（数值相加，字符相连）
var result = `${str1} ${str2}`;  // 方法2.使用``符号+${}占位符来实现拼接。

// 弹窗
// alert('这是一个弹窗')  // 打开网页会弹出一个弹窗，
// var result = prompt('请输入内容')  // 打开网页就会有一个弹窗，让你输入内容，输入完点击确定，内容就会被保存在result中。

console.log('------------------------------------------------------');
// 布尔型
var b1 = true;    // ture，转换为number是1
var b2 = false;   // false，转换为number是0


// Undefined 和 Null
var n;
console.log(n);          // undefined
console.log(n + 'cc')    // undefinedcc，注意：转换为字符串是undefined
console.log(n + 1);      // NaN，加上未定义的值就是'非数字'
var n2 = null;
console.log(n2 + 'cc');  // nullcc，注意：转换为字符串是null
console.log(n2 + 1);     // 1，加上空值还是1，这是和undefined不同的一点。


// 声明变量类型
var carname = new String;   // 声明一个变量时，可以声明为string类型
var x = new Number;
var y = new Boolean;
var cars = new Array;
var person = new Object;