# Ideas Collection

A beautiful, blog-style GitHub Pages site for collecting and sharing inspiring ideas and videos.

## Welcome

This is your space to collect and share inspiring ideas, videos, and creative thoughts. Each post can contain text, links, and embedded videos. Start adding your own content by editing the `posts.js` file!

## Features

- Clean, modern blog-style layout
- Responsive design that works on all devices
- Easy-to-add posts with text and embedded videos
- Tag system for organizing content
- Smooth animations and hover effects
- YouTube video embedding support

## Quick Start

### 1. Clone or Fork This Repository

```bash
git clone https://github.com/YOUR_USERNAME/ideas-collection.git
cd ideas-collection
```

### 2. Add Your Content

Edit the `posts.js` file to add your own posts. Each post follows this format:

```javascript
{
    title: "Your Post Title",
    date: "2025-11-29",
    content: `
        <p>Your content here. You can use HTML tags.</p>
        <p>Multiple paragraphs work great!</p>
    `,
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID", // Optional
    tags: ["tag1", "tag2"]
}
```

### 3. Preview Locally

Open `index.html` in your web browser to preview your changes.

### 4. Push to GitHub

```bash
git add .
git commit -m "Add my content"
git push origin main
```

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "main" branch
5. Click "Save"

Your site will be live at `https://YOUR_USERNAME.github.io/ideas-collection/`

## Adding Images

You can add images to your posts in two ways:

### Local Images

1. Place your image in the `images/` folder
2. Add the `imageUrl` field to your post:

```javascript
{
    title: "My Post with Image",
    date: "2025-11-29",
    content: `<p>Your content here.</p>`,
    imageUrl: "images/my-image.jpg",
    imageAlt: "Description of the image", // Optional, defaults to post title
    tags: ["example"]
}
```

### External Images

You can also use images hosted elsewhere:

```javascript
{
    title: "Post with External Image",
    date: "2025-11-29",
    content: `<p>Your content here.</p>`,
    imageUrl: "https://example.com/image.jpg",
    tags: ["example"]
}
```

## Adding Videos

### YouTube Videos

To embed a YouTube video, get the video ID from the URL:
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

Then use: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### Other Video Platforms

You can also embed videos from:
- **Vimeo**: `https://player.vimeo.com/video/VIDEO_ID`
- **Dailymotion**: `https://www.dailymotion.com/embed/video/VIDEO_ID`

### Example Video Post

Here's a complete example of a post with an embedded video:

```javascript
{
    title: "Example Video Post",
    date: "2025-11-29",
    content: `
        <p>Here's how you can embed videos from YouTube or other platforms:</p>
        <p>Replace the video ID in the URL to embed your own videos.</p>
    `,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["example", "video"]
}
```

## Customization

### Colors

Edit the CSS variables in `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... */
}
```

### Header

Edit the header text in `index.html`:

```html
<h1>Ideas Collection</h1>
<p class="tagline">A curated collection of inspiring ideas and videos</p>
```

## File Structure

```
ideas-collection/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── app.js          # JavaScript for rendering posts
├── posts.js        # Your posts data
├── images/         # Directory for post images
└── README.md       # This file
```

## Tips

- Posts are automatically sorted by date (newest first)
- You can use HTML in the content field for rich formatting
- Add multiple tags to make content easier to categorize
- Keep video URLs in the embed format for proper display

## License

Feel free to use this template for your own projects!

## Support

If you encounter any issues, please open an issue on GitHub.
