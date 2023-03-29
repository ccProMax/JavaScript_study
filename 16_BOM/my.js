// 属性
// 获取浏览器宽度和高度 
console.log(window.innerWidth);    // 浏览器宽度，这些都是内置好的变量
console.log(innerHeight);   // 浏览器高度，window可以省略
// 浏览器地址信息
console.log(location);    // 是一个对象，里面很多URL属性
console.log(location.href);     // 地址信息： file:///D:/Code/JavaScript/study/16_BOM/index.html
// location.href = '../15_date/index.html'   // 这个属性是可以直接修改的，修改后，那么网页将会跳转到那里，一般配合html中的button来让页面跳转。
// 加了个触发条件，btn是HTML中的一个buttin的id，当它被点击是会执行后面的函数。
btn.onclick = function () {
    location.href = '../15_date/index.html'   // 如果直接修改它，那么网页将会跳转到那里
}
console.log(document);   // 是一个文档对象，里面有很多关于页面的属性。
console.log(document.documentElement.scrollTop || document.body.scrollTop);   // 当前窗口距离顶部的距离。
console.log(document.documentElement.scrollLeft || document.body.scrollLeft);   // 横向距离


// 方法
// 弹出层方法
// alert('这是一个弹窗')  // 打开网页会弹出一个弹窗
// // btn是个对象，对象名就是html中的按钮的id值，onclick是它的一个属性，属性值是该按钮按下后执行的函数。
// btn.onclick = function () {   
//     open("http://baidu.com")   // 当按钮被按下时，就会跳转到百度。
// }
// // prompt输入内容
// var result = prompt('请输入内容')  // 打开网页就会有一个弹窗，让你输入内容，输入完点击确定，内容就会被保存在result中。
// // confirm()：弹出一个对话框，显示一条消息和 OK 和 Cancel 按钮，并等待用户点击一个按钮。
// if (confirm('Are you sure?')) {
//     // 用户点击了 OK 按钮
// } else {
//     // 用户点击了 Cancel 按钮
// }

// 其他方法
// scrollTo(0,0)  // 回到x和y坐标为0,0的位置。
// open("http://baidu.com")   // 在新标签页中打开这个链接。
// close()     // 关闭当前标签页
// 回到顶部
btn.onclick = function () {
    scrollTo(0,0)   // 当btn被点击，就执行这个函数，回到x为0，y为0的位置。
    document.documentElement.scrollTop = 0
}
//打开新标签页,(btn是html中的一个button的id)
btn.onclick = function () {
    open("http://baidu.com")
}

// 关掉当前标签页
btn.onclick = function () {
    close()
}


// 浏览器历史记录
// history是window对象的一个属性，但这个属性还有它的方法：
history.back()   // 回退到浏览器上一页（前提是要有上一页才行）
history.forward()  // 进入到浏览器的下一页（前提是用户回过上一页才能知道上一页的下一页）
history.go(-2)  // -2表示往回退两个页面，-1就退一个，2就往前2个。

// 浏览器本地存储
// 注意，这里只能存字符串，不能存对象，但你可以存json字符串，然后转换为对象。
// localStorage.setItem("key", "value")  // 将此键值对存储到浏览器中
// key = localStorage.getItem("key")   // 取出"key"对应的value
// localStorage.removeItem("key")  // 删掉key为它的键值对
// localStorage.clear()   // 清空，全部删掉。
btn.onclick = function () {
    localStorage.setItem("key", "value")  // 将此键值对存储到浏览器中
}
btn.onclick = function () {
    key = localStorage.getItem("key")   // 取出"key"对应的value
    console.log(key);
}
btn.onclick = function () {
    localStorage.removeItem("key")  // 删掉key为它的键值对
}
localStorage.clear()   // 清空，全部删掉。

// localStorage是永久存储，只有卸载浏览器才会丢失
// sessionStorage是临时存储，关闭页面就会丢失


// 事件

// 浏览器常见事件
// onload事件
onload = function () {
    console.log("页面加载完了");   // 在页面加载完之后才会执行这个函数.(图片,视频,dom)
}
// onresize事件
onresize = function () {    // 页面大小一改变就会执行
    console.log(innerWidth);   // 打印出页面的大小,正好可以观察到页面大小的变化.
    console.log(innerHeight);
}

// onscroll事件
onscroll = function () {    // 当页面滚动的时候会执行这个函数.滚动一下执行一次
    console.log("scroll");
}
// 滚动时查看被滚上去了多少
onscroll = function () {  // 当页面滚动的时候会执行这个函数.滚动一下执行一次
    console.log(document.documentElement.scrollTop || document.body.scrollTop);   // 这个自带属性可以看到当前窗口距离顶部的距离。
    console.log(document.documentElement.scrollLeft || document.body.scrollLeft);   // 横向距离
    // 这样的话在滚动时就会猛的打印当前位置举例顶部的距离。
}





