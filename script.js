// Function to load content from a directory
async function loadContent(directory, targetElementId) {
    try {
        const response = await fetch(directory);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        
        // Get all HTML files in the directory
        const links = Array.from(doc.querySelectorAll('a'))
            .filter(a => a.href.endsWith('.html'))
            .map(a => ({
                title: a.textContent.trim(),
                url: a.href
            }));

        // Create content HTML
        const contentHtml = links.map(link => `
            <article>
                <h3><a href="${link.url}">${link.title}</a></h3>
            </article>
        `).join('');

        // Update the target element
        document.getElementById(targetElementId).innerHTML = contentHtml || 'No content available.';
    } catch (error) {
        console.error(`Error loading content from ${directory}:`, error);
        document.getElementById(targetElementId).innerHTML = 'Error loading content.';
    }
}

// Load content when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadContent('projects/', 'projects-content');
    loadContent('thoughts/', 'thoughts-content');
    loadContent('learned/', 'learned-content');
}); 