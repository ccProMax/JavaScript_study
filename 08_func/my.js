// 函数
function myFunction(x, y) {
    return x * y;
}
console.log(myFunction(3, 4))   //12
console.log(myFunction(1, 2, 3));


// arguments
function sum() {  // 定义函数没有形参，但函数默认由一个arguments，它是个伪数组，保存了所有实参。
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(1, 2, 3)); // 输出 6
console.log(sum(4, 5, 6, 7)); // 输出 22

// 案例
function reverse(arr) {
    var newArr = []
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i];
    }
    return newArr;
}
var arr1 = reverse([1, 3, 4, 6, 9]);
console.log(arr1);

// 函数表达式。
var greet = function (name) {   // 它是以变量形式定义的。它可以像其他变量一样被传递。
    console.log("Hello " + name + "!");
}
greet("John"); // 输出 "Hello John!"

function greet2(name) {
    console.log("Hello " + name + "!");
}
var x = greet2
x("cc")