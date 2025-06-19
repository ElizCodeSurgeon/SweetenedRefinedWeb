 // === blog.js ===
// 1️⃣ Toggle nav
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// 2️⃣ Load posts dynamically (optional)
fetch('load_posts.php')
  .then(response => response.json())
  .then(posts => {
    const blogSection = document.querySelector('.blog-posts');
    blogSection.innerHTML = ''; // clear existing

    posts.forEach(post => {
      const article = document.createElement('article');
      article.className = 'blog-card';
      article.innerHTML = `
        <h2>${post.title}</h2>
        <div class="meta">Posted on ${post.date} by ${post.author}</div>
        <p>${post.excerpt}</p>
        <a href="${post.link}">Read More &raquo;</a>
      `;
      blogSection.appendChild(article);
    });
  })
  .catch(err => console.error('Error loading posts:', err));

  