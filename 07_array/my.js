// 数组
// 常规方式:
var myCars = new Array();
myCars[0] = "Saab";
myCars[1] = "Volvo";
myCars[2] = "BMW";

//简洁方式:
var myCars = new Array("Saab", "Volvo", "BMW");

//字面量方式:
var myCars = ["Saab", "Volvo", "BMW"];


// 访问数组
var myCars = ["Saab", "Volvo", "BMW"];
var name = myCars[0];  // 获得数组索引为0的元素
myCars[0] = "Opel";   // 修改数组索引为0的元素
console.log(myCars[1]);
myCars.length = 10;
console.log(myCars[5]);


console.log('————————————————————————————————————————————————————————');
// 数组的方法和属性
var myCars = ["Saab", "Volvo", "BMW"];
var x = myCars.length             // myCars 中元素的数量(长度)  3
var myCars = ["Saab", "Volvo", "BMW"];
var y = myCars.indexOf("Volvo")   // "Volvo" 值的索引  1
var myCars = ["Saab", "Volvo", "BMW"];
var s1 = myCars.join('|');        // 分割  Saab|Volvo|BMW
var myCars = ["Saab", "Volvo", "BMW"];
myCars.push('pink')               // 追加  ['Saab', 'Volvo', 'BMW', 'pink']
var myCars = ["Saab", "Volvo", "BMW"];
myCars.pop();                     // 删除最后一个元素   ['Saab', 'Volvo']
var myCars = ["Saab", "Volvo", "BMW"];
myCars.reverse();                 // 反转  ['BMW', 'Volvo', 'Saab']
var myCars = ["Saab", "Volvo", "BMW"];
myCars.shift();                   // 删除第一个元素  ["Volvo", "BMW"] 

var myCars = ["Saab", "Volvo", "BMW"];
myCars.unshift("KFC")   // 在开头添加元素  ['KFC', 'Saab', 'Volvo', 'BMW']

var myCars = ["Saab", "Volvo", "BMW"];
var newCars = myCars.slice(0, 2)   //提取出索引0-2的元素，包括0，不包括2  ['Saab', 'Volvo'] 
var newCars2 = myCars.slice(0, myCars.length)  //复制一个数组


var strCars = ["Saab", "Volvo", "BMW"];
strCars.sort();   // 排序，默认按字母顺序升序（A-Z）。  ['BMW', 'Saab', 'Volvo']
var numCars = [40, 100, 1, 5, 25, 10];
numCars.sort(function (a, b) { return a - b });  // 按照数字升序，参数是一个函数。a-b表示升序，b-a表示降序   [1, 5, 10, 25, 40, 100]
// console.log(strCars);
// console.log(numCars);
// sort可以接收一个可选的函数。这个函数有两个形参，a 和 b 分别表示要比较的两个元素。
// sort会调用函数，传数组中的元素进去，并更具返回值判断怎么排序。
// 如果返回的值<0，则a会排在b的前面。
// 如果返回的值>0，则b会排在a的前面。
// 如果返回的值=0，则位置不变。
// 这里是a-b，
// 如果a小，那么返回值<0，小a排在前面。
// 如果b小，那么返回值>0，小b排在前面。所以小的总会排在前面
// 如果是b-a，
// 如果a大，那么返回值<0，大a排在前面。
// 如果b大，那么返回值>0，大b排在前面。所以大的总会排在前面



// var myCars = ["Saab", "Volvo", "BMW"];
// myCars.splice(0, 0, "USB", "KFC")  // 从索引0开始，删除0个元素，再插入"USB","KFC"，可以插入很多个  ['USB', 'KFC', 'Saab', 'Volvo', 'BMW']
// console.log(myCars);


// var a1 = ["Saab", "Volvo", "BMW"];
// var a2 = [1, 2, 3]
// var a3 = ["KFC", "SUV"]
// var newCars = a1.concat(a2, a3)  // 合并三个数组  ['Saab', 'Volvo', 'BMW', 1, 2, 3, 'KFC', 'SUV']

var myCars = ["Saab", "Volvo", "BMW"];
var str = myCars.toString();   //转换为字符串  Saab,Volvo,BMW

console.log(str);

var arr = [6, 2, 2, 3, 3, 4];
var uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr); // [6, 2, 3, 4]


var arr = [5, 2, 1, 6, 7, 9, 4, 3, 0]
for (var i = 0; i < arr.length - 1; i++) {   // 外层循环每次将最小的值放在前面
    for (var j = i + 1; j < arr.length; j++) {   // 里层循环将所有的数都比较一边
        if (arr[i] > arr[j]) {
            var x = arr[i];   // 把较大的数保存下来
            arr[i] = arr[j];  // 把较小的数放在前面（arr[i]是前面）
            arr[j] = x;       // 把保存下来的大数放在后面（arr[j]是后面）
        }
    }
}
console.log(arr);


// filter方法
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
var result = words.filter(word => word.length > 6);   // 把长度大于6的元素提取出来，放到一个新的数组中。
console.log(result);   // ["exuberant", "destruction", "present"]  

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
var result2 = result2 = words.filter(word => word.includes("e"));   // 把字符串中出现了e的单词找出来。
var result2 = result2 = words.filter(word => word.indexOf("e") > -1);   // 把字符串中出现了e的单词找出来。
console.log(result2);   // ['elite', 'exuberant', 'destruction', 'present']


var b1 = Boolean('')        // false  ''、0、NaN、null undefined
var b2 = Boolean(0)         // false
var b3 = Boolean(NaN)       // false
var b4 = Boolean(null)      // false
var b5 = Boolean(undefined) // false
var b6 = Boolean('ABC')     // true
var b7 = Boolean(-1)       // true
var str = 'javascript';
console.log(str.includes("z"));   // false