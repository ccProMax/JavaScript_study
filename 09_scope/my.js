// 作用域
//局部作用域

var wai1 = "KFC";   // 函数外、使用var声明 ：全局变量
wai2 = "USB";       // 函数外、不使用var声明 ：全局变量
function myFunction() {
    var nei1 = "Volvo";   // 函数内、使用var声明 ：局部变量
    nei2 = "SUV";         // 函数内、不适用var声明 ：全局变量
}
myFunction();
console.log(nei2);