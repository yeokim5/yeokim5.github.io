// Markdown viewer component
document.addEventListener('DOMContentLoaded', function() {
    const markdownContent = document.getElementById('markdown-content');
    if (markdownContent) {
        // Use marked.js for Markdown rendering
        marked.setOptions({
            breaks: true,
            gfm: true
        });
        
        // Get the content and render it
        const content = markdownContent.textContent;
        markdownContent.innerHTML = marked.parse(content);
    }
}); 