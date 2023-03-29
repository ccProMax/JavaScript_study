// 数字常用内置方法
// toFixed()方法：四舍五入，保留n位小数。
// 示例代码：
var num = 3.14159;
var fixedNum = num.toFixed(2); // 3.14
console.log(fixedNum);

// parseInt()方法：将字符串转换为整数。
// 示例代码：
var str = "123";
var num = parseInt(str); // 123
console.log(num);

// parseFloat()方法：将字符串转换为浮点数。
// 示例代码：
var str = "3.14";
var num = parseFloat(str); // 3.14

// Number()方法：将字符串转换为数字。
// 示例代码：
var str = "123";
var num = Number(str); // 123

// Math.round()方法：将数字四舍五入到最接近的整数。
// 示例代码：
var num = 3.5;
var roundNum = Math.round(num); // 4

// Math.abs()方法：返回数字的绝对值。
// 示例代码：
var num = -3;
var absNum = Math.abs(num); // 3

// toExponential() - 将数字转换为指数表示法的字符串形式。
// toPrecision() - 将数字转换为定点或指数表示法的字符串形式，具体取决于指定的数字位数。
// isNaN() - 检查一个值是否是NaN。
// isFinite() - 检查一个值是否是有限的数字。
// Math.ceil() - 向上取整。
// Math.floor() - 向下取整。
/////////////////////////////////
// toExponential(): 将数字转换为指数表示法的字符串形式。
var num = 3.14159;
var exponentialNum = num.toExponential(2); // 3.14e+0
console.log(exponentialNum);
// toPrecision(): 将数字转换为定点或指数表示法的字符串形式，具体取决于指定的数字位数。
var num = 3.14159;
var precisionNum = num.toPrecision(3); // 3.14
console.log(precisionNum);
// isNaN(): 检查一个值是否是NaN。
var num = "hello";
console.log(isNaN(num)); // true
// isFinite(): 检查一个值是否是有限的数字。
var num = Infinity;
console.log(isFinite(num)); // false
// Math.ceil(): 向上取整。
var num = 3.14159;
console.log(Math.ceil(num)); // 4
// Math.floor(): 向下取整。
var num = 3.14159;
console.log(Math.floor(num)); // 3


/////////////////////////////////////////////////

// Math.max(): 返回一组数中的最大值。
console.log(Math.max(1, 2, 3, 4, 5)); // 5
// Math.min(): 返回一组数中的最小值。
console.log(Math.min(1, 2, 3, 4, 5)); // 1
// Math.pow(): 返回一个数的指定次幂。
console.log(Math.pow(2, 3)); // 8
// Math.sqrt(): 返回一个数的平方根。
console.log(Math.sqrt(16)); // 4
// Math.random(): 返回一个介于 0 到 1 之间的随机数。
console.log(Math.random()); // 0.1234567890...
// Math.PI: 返回圆周率。
console.log(Math.PI); // 3.141592653589793


// 随机数
// 0-10 不包含10
// 获得随机数后*10，然后向下取整，这样就是0-10不包含10的随机数
var res = Math.floor(Math.random() * 10)
console.log(res);

// 10-30中有20个数，从10开始就+10
var res = Math.floor(Math.random() * 20) + 10
console.log(res);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
console.error("error");

