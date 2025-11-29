// Main application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');

    // Clear any existing content
    postsContainer.innerHTML = '';

    // Sort posts by date (newest first)
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render each post
    sortedPosts.forEach((post, index) => {
        const article = createPostElement(post, index);
        postsContainer.appendChild(article);
    });
});

function createPostElement(post, index) {
    const article = document.createElement('article');
    article.className = 'post';
    article.style.animationDelay = `${index * 0.1}s`;

    // Post header
    const header = document.createElement('div');
    header.className = 'post-header';

    const title = document.createElement('h2');
    title.className = 'post-title';
    title.textContent = post.title;

    const date = document.createElement('time');
    date.className = 'post-date';
    date.textContent = formatDate(post.date);

    header.appendChild(title);
    header.appendChild(date);

    // Post content
    const content = document.createElement('div');
    content.className = 'post-content';

    // Add image if present (before content)
    if (post.imageUrl) {
        const imageElement = createImageElement(post.imageUrl, post.imageAlt || post.title);
        content.appendChild(imageElement);
    }

    content.innerHTML += post.content;

    // Add video if present
    if (post.videoUrl) {
        const videoContainer = createVideoElement(post.videoUrl);
        content.appendChild(videoContainer);
    }

    // Post tags
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'post-tags';

    post.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });

    // Assemble the article
    article.appendChild(header);
    article.appendChild(content);
    article.appendChild(tagsContainer);

    return article;
}

function createImageElement(imageUrl, altText) {
    const container = document.createElement('div');
    container.className = 'image-container';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = altText;
    img.className = 'post-image';

    container.appendChild(img);
    return container;
}

function createVideoElement(videoUrl) {
    const container = document.createElement('div');
    container.className = 'video-container';

    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    container.appendChild(iframe);
    return container;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}
