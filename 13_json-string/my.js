// json字符串
var str = '{"name": "cc", "age": 18}'   // 注意，key必须也加上引号。
var obj = JSON.parse(str)   // 使用JSON自带的parse方法即可解析，如果解析不了会报错。
console.log(obj);   //这时候就变成对象了 {name: 'cc', age: 18}

var obj = { name: 'cc', age: 18 }   // 就是正常的json字符串
var str = JSON.stringify(obj)
console.log(str);   // 就会转换为JSON格式。

document.write('<h1>Hello, world!</h1>');
console.log('Hello, world!');
// if (confirm('Are you sure?')) {
//     // 用户点击了 OK 按钮
// } else {
//     // 用户点击了 Cancel 按钮
// }
'这是第一行\
这是第二行\
这是第三行'

var arr = ["aaa", "bbb", "ccc"]
var arr2 = arr.map(item => `<li>${item}</li>`)   // item是arr数组的元素，返回值是新数据的元素。
console.log(arr2);  // ['<li>aaa</li>', '<li>bbb</li>', '<li>ccc</li>']