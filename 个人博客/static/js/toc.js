// toc.js
document.addEventListener('DOMContentLoaded', () => {
    const toc = document.getElementById('toc');
    const headings = document.querySelectorAll('.article-content h2, .article-content h3');
    const tocList = document.createElement('ul');
  
    headings.forEach(heading => {
      const tocItem = document.createElement('li');
      const tocLink = document.createElement('a');
      tocLink.href = `#${heading.id}`;
      tocLink.textContent = heading.textContent;
      tocItem.appendChild(tocLink);
      tocList.appendChild(tocItem);
    });
  
    toc.appendChild(tocList);
  });
  