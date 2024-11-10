// 重新写一下，写成一个函数，为random 的背景图片

var num = Math.floor(Math.random() * 7);
if (num == 0) {
    num = 1;
}
var bgImages = [
    "./static/img/1.webp",
    "./static/img/2.webp",
    "./static/img/3.webp",
    "./static/img/4.webp",
    "./static/img/5.webp",
    "./static/img/6.webp",
    "./static/img/7.webp",
]
document.getElementsByClassName("aboutbg")[0].src = "./static/img/" + num + ".webp";

//黑暗模式逻辑
// layui.use('form', function () {
//     var form = layui.form;

//     form.on('switch', function (data) {
//         var value = data.elem.checked ? 2 : 1;
//         console.log(value);
//         //自己来设定主题,如果为2，就引入<link rel="stylesheet" href="https://unpkg.com/layui-theme-dark/dist/layui-theme-dark.css">
//         //为1就删除这个引入<link rel="stylesheet" href="https://unpkg.com/layui-theme-dark/dist/layui-theme-dark.css">
//         if (value === 2) {
//             // 设置body标签的背景颜色为灰色
//             document.body.style.backgroundColor = 'gray';
//             // 引入黑暗主题样式表
//             var darkThemeLink = document.createElement('link');
//             darkThemeLink.rel = 'stylesheet';
//             darkThemeLink.href = 'https://unpkg.com/layui-theme-dark/dist/layui-theme-dark.css';
//             document.head.appendChild(darkThemeLink);

//         } else {
//             // 还原body标签的背景颜色
//             document.body.style.backgroundColor = '';
//             // 移除黑暗主题样式表
//             var darkThemeLink = document.querySelector('link[href="https://unpkg.com/layui-theme-dark/dist/layui-theme-dark.css"]');
//             if (darkThemeLink) {
//                 darkThemeLink.parentNode.removeChild(darkThemeLink);
//             }

//         }
//     });
// });

// 禁用F12
document.addEventListener("keydown", function(e) {
    if (e.key === "F12") {
        e.preventDefault();
        layui.use(function(){
            var layer = layui.layer;
            // Welcome
            layer.msg('本网站全面禁止使用F12键！', {icon: 6});
          });
    }
});


// 页脚显示监听

document.addEventListener('mousemove', function(event) {
    var footer = document.querySelector('.footer');
    var windowHeight = window.innerHeight;
    var mouseY = event.clientY;
  
    if (mouseY >= windowHeight - 50) { // 当鼠标接近屏幕底部50px时显示页脚
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  });