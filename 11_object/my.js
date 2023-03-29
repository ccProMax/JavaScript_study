// 对象
// 使用字面量创建对象
var person = {
    firstName: "John",   // 这些是对象的属性
    lastName: "Doe",
    age: 50,
    sayHi: function () {   // 这是对象的方法，sayHi是方法名。
        console.log("hi~");
    }
};
// 获得对象的属性：
var age = person.age;     // 方法1：对象名.属性名。
var age2 = person["age"]   // 方法2：对象名["属性名"]
// 使用对象的方法：
person.sayHi();

person["sayHi"]

// 使用new创建对象：
var person = new Object();   // 创建出一个person对象，但对象中没有任何数据。
person.firstName = "John";   // 通过赋值的方式添加属性
person.lastName = "Doe";
person.age = 50;
person.sayHi = function () {   // 添加方法
    console.log("hi~");
}


// 使用构造函数创建对象：
function Person(name, age) {  // 这是一个构造函数
    this.name = name;         // 函数内的变量指定为this的属性
    this.gae = age;
    this.seaHi = function () {  // 方法也指定为this的方法
        console.log("hi~");
    }
}
var person = new Person("Alice", 19); // 通过构造函数创建出对象。

// 遍历对象
var person = {
    name: "Alice",
    age: 25,
    seaHi: function () {
        console.log("hi~");
    }
};

for (var prop in person) {   // prop是key
    console.log(prop + ": " + person[prop]);  // 输出每个key和value
} 


// 增删查改
var person = {
    name: "Alice",
    age: 25,
    seaHi: function () {
        console.log("hi~");
    }
};
// 增
person.phone = "1888888";
// 删
delete person.phone;
// 查
console.log(person);
console.log(person.age);
// 改
person.age = 20 



