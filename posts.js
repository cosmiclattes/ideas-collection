// Add your posts here
// Each post should have: title, date, content (HTML string), tags (array), and optional videoUrl

const posts = [
    {
        title: "Every Mathematician has only a few tricks",
        date: "2025-11-29",
        content: `
            <p>Be happy and ready to reuse ideas, explain existing ideas and keep repeating the tricks you've come up with, even if they are just a few, that alone takes you a long way.</p>
            <p><a href="https://www.ams.org/notices/199701/comm-rota.pdf" target="_blank">Read the full article (PDF)</a></p>
        `,
        tags: ["mathematics", "philosophy", "wisdom"]
    },
    {
        title: "Welcome to Ideas Collection",
        date: "2025-11-29",
        content: `
            <p>This is your space to collect and share inspiring ideas, videos, and creative thoughts. Each post can contain text, links, and embedded videos.</p>
            <p>Start adding your own content by editing the <code>posts.js</code> file!</p>
        `,
        tags: ["welcome", "meta"]
    },
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
    // Add more posts below following the same format
    // Example:
    // {
    //     title: "Your Post Title",
    //     date: "2025-11-29",
    //     content: `
    //         <p>Your content here. You can use HTML tags.</p>
    //         <p>Multiple paragraphs work great!</p>
    //     `,
    //     videoUrl: "https://www.youtube.com/embed/VIDEO_ID", // Optional
    //     tags: ["tag1", "tag2"]
    // }
];
