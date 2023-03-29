// 声明变量，使用关键字var。
var age;   // 声明一个命为age的变量。如果不赋值，它的值会是undefined。
age = 18;  // 给变量赋值。
var myname = 'cc';  // 声明并赋值，也可以说是初始化。
// 同时声明多个变量：
var x,y,z = 1;  // 三个变量都为1。
var i = 10,
    j = 20,
    k = 30;  // 这种语法可以同时声明多个变量。你也可以写在一行。
// 重新声明一个已有的变量：
var carname="Volvo";
var carname;  // 此时变量值还是Volvo，不会被重置，也不会报错。