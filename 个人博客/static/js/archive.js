


    function showArticle(id) {
        const article = articles.find(a => a.id === id);
        if (article) {
            articleContent.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.desc}</p>
                `;
            articleView.style.display = 'block';
        }
    }

    function closeArticle() {
        articleView.style.display = 'none';
    }

    $.ajax({
        url: ' http://localhost:8081/article/getarticlelistorderByDesc',
        type: 'GET',
        success: function (data) {
            console.log("获取到的数据为: " + data);
            const articles = data;
            for (var i = 0; i < articles.length; i++) {
                console.log(articles[i].title);
            }
            const timelineElement = document.getElementById('timeline');
            const articleView = document.getElementById('archive-article-view');
            const articleContent = document.getElementById('archive-article-content');
            // 填充时间轴
            articles.forEach(article => {
                const item = document.createElement('li');
                item.className = 'timeline-item';
                item.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.upload_time}</p>
                <p><a href="article.html?id=${article.article_id}">阅读更多</a></p>
            `;
                timelineElement.appendChild(item);
            });


        },
        error: function (error) {
            console.error('Error fetching archives:', error);
        }
    });

