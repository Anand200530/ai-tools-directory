// AI Tools Hub - Working JavaScript
const tools = [
    {id: 1, name: "Midjourney", category: "image", icon: "🎨", description: "AI image generation tool for stunning artistic visuals.", pricing: "Freemium", featured: true, url: "https://www.midjourney.com"},
    {id: 2, name: "DALL-E 3", category: "image", icon: "🖼️", description: "OpenAI's text-to-image generation model.", pricing: "Paid", featured: true, url: "https://openai.com/dall-e-3"},
    {id: 3, name: "Stable Diffusion", category: "image", icon: "✨", description: "Open-source AI image generation model.", pricing: "Free", featured: false, url: "https://stability.ai/stable-diffusion"},
    {id: 4, name: "Leonardo AI", category: "image", icon: "🎭", description: "AI-powered image generation with advanced controls.", pricing: "Freemium", featured: false, url: "https://leonardo.ai"},
    {id: 5, name: "Runway ML", category: "image", icon: "🎬", description: "AI creative tools for images and video.", pricing: "Freemium", featured: false, url: "https://runwayml.com"},
    {id: 6, name: "Bing Image Creator", category: "image", icon: "🔍", description: "Microsoft's free AI image generator.", pricing: "Free", featured: false, url: "https://www.bing.com/images/create"},
    {id: 7, name: "ChatGPT", category: "writing", icon: "💬", description: "Versatile AI assistant for all tasks.", pricing: "Freemium", featured: true, url: "https://chat.openai.com"},
    {id: 8, name: "Claude", category: "writing", icon: "📝", description: "AI assistant focused on being helpful.", pricing: "Freemium", featured: true, url: "https://claude.ai"},
    {id: 9, name: "Jasper", category: "writing", icon: "✍️", description: "AI writing assistant for marketing.", pricing: "Paid", featured: false, url: "https://jasper.ai"},
    {id: 10, name: "Grammarly", category: "writing", icon: "📋", description: "AI-powered writing improvement tool.", pricing: "Freemium", featured: false, url: "https://grammarly.com"},
    {id: 11, name: "Synthesia", category: "video", icon: "🎭", description: "AI video generation with avatars.", pricing: "Paid", featured: true, url: "https://synthesia.io"},
    {id: 12, name: "Runway", category: "video", icon: "🎬", description: "AI-powered video editing platform.", pricing: "Freemium", featured: true, url: "https://runwayml.com"},
    {id: 13, name: "ElevenLabs", category: "audio", icon: "🎤", description: "AI voice generation and cloning.", pricing: "Freemium", featured: true, url: "https://elevenlabs.io"},
    {id: 14, name: "Murf.ai", category: "audio", icon: "🗣️", description: "Professional AI voice generator.", pricing: "Freemium", featured: false, url: "https://murf.ai"},
    {id: 15, name: "GitHub Copilot", category: "coding", icon: "🤖", description: "AI pair programmer for code.", pricing: "Paid", featured: true, url: "https://github.com/features/copilot"},
    {id: 16, name: "Claude Code", category: "coding", icon: "💻", description: "Anthropic's coding assistant.", pricing: "Free", featured: false, url: "https://claude.com/claude-code"},
    {id: 17, name: "Tabnine", category: "coding", icon: "📝", description: "AI code completion tool.", pricing: "Freemium", featured: false, url: "https://tabnine.com"},
    {id: 18, name: "Codeium", category: "coding", icon: "⚡", description: "Free AI code completion.", pricing: "Free", featured: false, url: "https://codeium.com"},
    {id: 19, name: "Canva", category: "design", icon: "🎨", description: "AI-powered design platform.", pricing: "Freemium", featured: true, url: "https://www.canva.com"},
    {id: 20, name: "Remove.bg", category: "design", icon: "✂️", description: "AI background removal tool.", pricing: "Freemium", featured: false, url: "https://www.remove.bg"}
];

const categories = [
    {name: "Image Generation", icon: "🖼️", count: 6, key: "image"},
    {name: "Writing & Content", icon: "✍️", count: 4, key: "writing"},
    {name: "Video Production", icon: "🎬", count: 2, key: "video"},
    {name: "Audio & Voice", icon: "🎤", count: 2, key: "audio"},
    {name: "Coding", icon: "💻", count: 4, key: "coding"},
    {name: "Design", icon: "🎨", count: 2, key: "design"}
];

function renderCategories() {
    var grid = document.getElementById('categoryGrid');
    if (!grid) return;
    grid.innerHTML = categories.map(function(cat) {
        return '<div class="category-card" onclick="filterAndScroll(\'' + cat.key + '\')"><div class="category-icon">' + cat.icon + '</div><div class="category-name">' + cat.name + '</div><div class="category-count">' + cat.count + ' tools</div></div>';
    }).join('');
}

function renderToolCard(tool) {
    return '<div class="tool-card" onclick="openTool(\'' + tool.url + '\')"><div class="tool-header"><div class="tool-icon">' + tool.icon + '</div><div class="tool-info"><div class="tool-name">' + tool.name + '</div><div class="tool-category">' + getCategoryName(tool.category) + '</div></div></div><div class="tool-body"><p class="tool-description">' + tool.description + '</p></div><div class="tool-footer"><span class="tool-pricing">' + tool.pricing + '</span><span class="tool-link">Visit →</span></div></div>';
}

function renderFeatured() {
    var grid = document.getElementById('featuredTools');
    if (!grid) return;
    var featured = tools.filter(function(t) { return t.featured; });
    grid.innerHTML = featured.map(renderToolCard).join('');
}

function renderNew() {
    var grid = document.getElementById('newTools');
    if (!grid) return;
    var newTools = tools.slice(0, 4);
    grid.innerHTML = newTools.map(renderToolCard).join('');
}

function renderTools(filter) {
    var grid = document.getElementById('allTools');
    if (!grid) return;
    
    var filtered = tools;
    if (filter && filter !== 'all') {
        filtered = tools.filter(function(t) { return t.category === filter; });
    }
    
    grid.innerHTML = filtered.map(renderToolCard).join('');
}

function getCategoryName(key) {
    var cat = categories.find(function(c) { return c.key === key; });
    return cat ? cat.name : key;
}

function filterAndScroll(category) {
    renderTools(category);
    var section = document.querySelector('.all-tools');
    if (section) {
        section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
    updateFilterButtons(category);
}

function updateFilterButtons(category) {
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

function openTool(url) {
    window.open(url, '_blank');
}

function init() {
    renderCategories();
    renderFeatured();
    renderNew();
    renderTools('all');
    
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterAndScroll(this.dataset.category);
        });
    });
}

window.addEventListener('DOMContentLoaded', init);
