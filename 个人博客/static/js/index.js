// 黑暗模式的逻辑
layui.use("form", function () {
  var form = layui.form;

  form.on("switch", function (data) {
    var value = data.elem.checked ? 2 : 1;
    console.log(value);
    //自己来设定主题,如果为2，就引入<link rel="stylesheet" href="https://unpkg.com/layui-theme-dark/dist/layui-theme-dark.css">
    //为1就删除这个引入<link rel="stylesheet" href="https://unpkg.com/layui-theme-dark/dist/layui-theme-dark.css">
    if (value === 2) {
      // 设置body标签的背景颜色为灰色
      document.body.style.backgroundColor = "gray";
      // 引入黑暗主题样式表
      var darkThemeLink = document.createElement("link");
      darkThemeLink.rel = "stylesheet";
      darkThemeLink.href =
        "https://unpkg.com/layui-theme-dark/dist/layui-theme-dark.css";
      document.head.appendChild(darkThemeLink);
    } else {
      // 还原body标签的背景颜色
      document.body.style.backgroundColor = "";
      // 移除黑暗主题样式表
      var darkThemeLink = document.querySelector(
        'link[href="https://unpkg.com/layui-theme-dark/dist/layui-theme-dark.css"]'
      );
      if (darkThemeLink) {
        darkThemeLink.parentNode.removeChild(darkThemeLink);
      }
    }
  });
});

// 一言逻辑打字机效果
const options = {
  strings: [
    "这个非常时代没有无名小辈。",
    "一切都会逝去，只有死神永生。",
    "给岁月以文明，而不是给文明以岁月。",
    "你的无畏来源于无知。",
  ],
  typeSpeed: 150, // 打印速度
  startDelay: 300, // 开始之前的延迟300毫秒
  loop: true, // 是否循环
};
const typed = new Typed("#typed", options);

// // 禁用F12
// document.addEventListener("keydown", function (e) {
//   if (e.key === "F12") {
//     e.preventDefault();
//     layui.use(function () {
//       var layer = layui.layer;
//       // Welcome
//       layer.msg("本网站全面禁止使用F12键！", { icon: 6 });
//     });
//   }
// });

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




