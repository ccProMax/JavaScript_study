// 获取浏览器宽度和高度 
console.log(window.innerWidth);    // 浏览器宽度，这些都是内置好的变量
console.log(innerHeight);   // 浏览器高度，window可以省略

// 弹出层方法
// ……


// 浏览器地址信息
console.log(location);    // 是一个对象，里面很多属性
console.log(location.href);     // 地址信息： file:///D:/Code/JavaScript/study/16_BOM/index.html
// 加了个触发条件，btn是HTML中的一个buttin的id，当它被点击是会执行后面的函数。
btn.onclick = function () {
    location.href = '../15_date/index.html'   // 如果直接修改它，那么网页将会跳转到那里
}


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
// 回到顶部
btn.onclick = function () {
    // scrollTo(0,0)   // 当btn被点击，就执行这个函数，回到x为0，y为0的位置。
    document.documentElement.scrollTop = 0
}