



// const searchParams = new URLSearchParams(window.location.search);

// // console.log(searchParams.get('id'));   //获取浏览器页面url的id参数

// var id = searchParams.get('id');



// $(document).ready(function () {
//   fetchArticleIds();
// });

// var articledata;

// //先请求数据
// function fetchArticleIds() {
//   $.ajax({
//     url: 'http://localhost:8081/article/getarticlelist',
//     method: 'GET',
//     success: function (data) {
//       console.log('Fetched articles:', data); // 打印获取到的数据
//       console.log(data[0].article_id);
//       articledata = data;
//       console.log(articledata);
//     },
//     error: function (error) {
//       console.error('Error fetching article IDs:', error);
//     }
//   });
// }







// // 假设你有一个包含 Markdown 文件路径的数组
// var url = '../../posts/' + id + '.md';
// const markdownFiles = [url];


// // 使用 fetch API 获取并渲染 Markdown 文件
// async function fetchAndRenderMarkdown(file) {
//   const response = await fetch(file);
//   const markdown = await response.text();
//   const htmlContent = marked.parse(markdown);
//   return htmlContent;
// }

// // 渲染所有文章
// async function renderArticles() {
//   const articlesContainer = document.getElementById('articles');
//   for (const file of markdownFiles) {
//     const articleHtml = await fetchAndRenderMarkdown(file);
//     const articleElement = document.createElement('div');
//     articleElement.innerHTML = articleHtml;
//     articlesContainer.appendChild(articleElement);
//   }
// }

// // 页面加载完成后渲染文章
// document.addEventListener('DOMContentLoaded', renderArticles);
