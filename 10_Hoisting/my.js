// 预解析
console.log(x);
var x = 1;
// 实际上上面的代码会被解析成以下顺序：
var x;
console.log(x);
x = 1;
// 因此，最终输出的是undefined

// 案例
var num = 10;
fun();
function fun() {
    console.log(num);   // undefined
    var num = 20;
}


// 预解析后的顺序——————————————————————

var num;

function fun() {
    var num;
    console.log(num);
    num = 20;
}

num = 10;
fun();

// 案例2
f1();
console.log(c);   // 9
console.log(b);   // 9
console.log(a);   // 报错

function f1() {
    var a = b = c = 9;  // a是局部变量，b和c是全局变量
    console.log(a);  // 9
    console.log(b);  // 9
    console.log(c);  // 9
}

// 
function f1() {
    var a;
    a = b = c = 9;  // a是局部变量，b和c是全局变量
    console.log(a);  // 9
    console.log(b);  // 9
    console.log(c);  // 9
}
f1();
console.log(c);   // 9
console.log(b);   // 9
console.log(a);   // 报错