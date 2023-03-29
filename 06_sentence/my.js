// 流程控制
// if
if (1 == 2) {
    document.write("1 == 2");
}
else if (1 == 1) {
    document.write("1 == 1");
}
else {
    document.write("都不对");
}

// switch
switch (1) {    // 表达式的值是1。
    case 6: var x = "今天是星期六";  // 表达式的值是6，冒号后面是匹配后执行的。
        break;
    case 0: var x = "今天是星期日";
        break;
    default:
        x = "期待周末";
}
console.log(x);



// for
for (var i = 0; i < 5; i++) {
    console.log(`第${i + 1}次循环`);
}
// for遍历 in
var person = ['a', 'b', 'c', 'd']
for (var i in person) {    // i得到的是索引，也就是0、1、2、3
    console.log(i)
}
// for遍历 of
var person = ['a', 'b', 'c', 'd']
for (var i of person) {    // i得到的是值，也就是a、b、c、d
    console.log(i)
}



// while
var i = 0;
while (i < 5) {  // 不能在括号里面使用var关键字声明一个变量，只能在外面声明。
    console.log(i);  // 0 1 2 3 4
    i++;
}

// do while
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

// 案例
// var max = 0;
// numberOfPeople = prompt('几个人？')
// for (let i = 0; i < numberOfPeople; i++) {
//     var fraction = prompt(`输入第${i + 1}个人的分数`)
//     max += Number(fraction)
// }
// alert('总：' + max)
// alert('平均：' + max / numberOfPeople)

//99乘法表
for (var i = 1; i < 10; i++) {
    var msg = ''
    for (var j = 1; j <= i; j++) {
        var msg = msg + `${j} × ${i} = ${i * j}\t`;
    }
    console.log(msg);
}