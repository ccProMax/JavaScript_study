// 获取年、月、日、小时、分钟、秒等信息
var now = new Date();  //这是一个时间对象，直接输出是Mon Mar 27 2023 13:55:32 GMT+0800 (中国标准时间)
// 这个时间对象有非常多的方法：
var year = now.getFullYear(); // 获取当前年份
var month = now.getMonth() + 1; // 获取当前月份（注意要加 1，因为月份从 0 开始）
var day = now.getDate(); // 获取当前日期
var hour = now.getHours(); // 获取当前小时数
var minute = now.getMinutes(); // 获取当前分钟数
var second = now.getSeconds(); // 获取当前秒数
var Millisecond = now.getMilliseconds()  // 获取当前毫秒数。
var time = now.getTime()  // 获得时间戳
console.log(time);
// 格式化日期为字符串，如 "2022-03-29 14:30:00"
function padZero(num) {   // 这个函数是为了在小于10的时候在前面补上0，这样更好看。
    return num < 10 ? "0" + num : num;
}
var strNow = year + "-" + padZero(month) + "-" + padZero(day) + " " + padZero(hour) + ":" + padZero(minute) + ":" + padZero(second);
console.log(strNow);


// 计算两个日期之间的时间差
function timeDifferenct(current, target) {  // 传入两个时间对象。返回一个时间差对象
    var sub = target - current  // 对象相减就可以得到相差的时间戳。
    var daysDiff = Math.floor(sub / (1000 * 60 * 60 * 24));  // 计算天数差，向下取整
    var hourDiff = Math.floor(sub / (1000 * 60 * 60) % 24);
    var minuteDiff = Math.floor(sub / (1000 * 60) % 60);
    var secondDiff = Math.floor(sub / 1000 % 60);
    var millisecond = sub % 1000
    return { "day": daysDiff, "hour": hourDiff, "minute": minuteDiff, "second": secondDiff, "millisecond": millisecond }
}
// 计算现在与4月1日的时间差
function timeDifferencenow() {
    var now = new Date();
    var futureDate = new Date(2023, 3, 1); // 2023 年 4 月 1 日，注意是3，月份从0开始。
    obj = timeDifferenct(now, futureDate)
    box.innerHTML = `距离 2023 年 4 月 1 日还有${obj.day}天${obj["hour"]}小时${obj["minute"]}分钟${obj["second"]}秒${obj["millisecond"]}毫秒`;
}
setInterval(timeDifferencenow, 1000)  // 每1000毫秒执行一次函数。
timeDifferencenow()



// 比较两个日期的先后顺序
var date1 = new Date(2022, 3, 1);
var date2 = new Date(2022, 2, 28);
if (date1 > date2) {
    console.log("date1 在 date2 之后");
} else if (date1 < date2) {
    console.log("date1 在 date2 之前");
} else {
    console.log("date1 和 date2 相等");
}


// 转换为 Unix 时间戳
var now = new Date();
var unixTimestamp = Math.floor(now.getTime() / 1000); // 将毫秒数除以 1000 取整，得到 Unix 时间戳
console.log("当前时间的 Unix 时间戳为：" + unixTimestamp);
// 设置日期的年、月、日、小时、分钟、秒等信息
var now = new Date();
now.setFullYear(2023); // 设置年份为 2023
now.setMonth(2); // 设置月份为 3（注意月份从 0 开始）
now.setDate(1); // 设置日期为 1
now.setHours(12); // 设置小时数为 12
now.setMinutes(30); // 设置分钟数为 30
now.setSeconds(0); // 设置秒数为 0
now.setTime(1679984035764)  // 直接设置时间戳
console.log(now);


var date0 = new Date()   // 什么参数都不传就是当前时间。
var date1 = new Date(1000)   // 只传一个参数会被识别为时间戳。1970年1月1日08:00:01
var date2 = new Date(2023, 9, 1, 10, 10, 10)  // 传多个参数会被识别为年月日时分秒。2023年10月1日10点10分10秒。
var date3 = new Date("2023-10-1 10:10:10")  // 传这个格式的字符串也行，2023年10月1日10点10分10秒。
var date4 = new Date("2023/10/1 10:10:10")  // 传这个格式的字符串也行，2023年10月1日10点10分10秒。
console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);


// 定时器
// setTimeout是一个window中的一个函数,window可以省略。该函数接收两个参数，第一个是函数，第二个是时间（毫秒）。
var time1 = setTimeout(function name() {  // 第一个参数叫做回调函数。
    console.log('hi');
}, 1000)  // 意思就是到了1000毫秒后开始执行函数。

// 这个和上面不同的是每隔一秒执行一次。
var time2 = setInterval(function name() {
    now = new Date()
    console.log(now)
}, 1000)  // 每隔1000毫秒执行一次函数
clearTimeout(time1)
clearInterval(time2)

btn2.onclick = function () {
    console.log("kill");

}