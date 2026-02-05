// AI Tools Hub - Working JavaScript
const tools = [
    {id: 1, name: "Midjourney", category: "image", icon: "🎨", description: "AI image generation tool for stunning artistic visuals.", pricing: "Freemium", featured: true, url: "https://www.midjourney.com"},
    {id: 2, name: "DALL-E 3", category: "image", icon: "🖼️", description: "OpenAI's text-to-image generation model.", pricing: "Paid", featured: true, url: "https://openai.com/dall-e-3"},
    {id: 3, name: "Stable Diffusion", category: "image", icon: "✨", description: "Open-source AI image generation model.", pricing: "Free", featured: false, url: "https://stability.ai/stable-diffusion"},
    {id: 4, name: "Leonardo AI", category: "image", icon: "🎭", description: "AI-powered image generation with advanced controls.", pricing: "Freemium", featured: false, url: "https://leonardo.ai"},
    {id: 5, name: "Runway ML", category: "image", icon: "🎬", description: "AI creative tools for images and video.", pricing: "Freemium", featured: false, url: "https://runwayml.com"},
    {id: 6, name: "Bing Image Creator", category: "image", icon: "🔍", description: "Microsoft's free AI image generator.", pricing: "Free", featured: false, url: "https://www.bing.com/images/create"},
    {id: 7, name: "Adobe Firefly", category: "image", icon: "🔥", description: "Adobe's AI image and text effect generator.", pricing: "Freemium", featured: false, url: "https://firefly.adobe.com"},
    {id: 8, name: "Canva AI", category: "image", icon: "🎨", description: "AI-powered design and image generation.", pricing: "Freemium", featured: false, url: "https://www.canva.com/ai-image-generator"},
    {id: 9, name: "Craiyon", category: "image", icon: "🖌️", description: "Free and simple AI image generator.", pricing: "Free", featured: false, url: "https://www.craiyon.com"},
    {id: 10, name: "DreamStudio", category: "image", icon: "💭", description: "Stability AI's official image platform.", pricing: "Paid", featured: false, url: "https://dreamstudio.ai"},
    {id: 11, name: "ChatGPT", category: "writing", icon: "💬", description: "Versatile AI assistant for all tasks.", pricing: "Freemium", featured: true, url: "https://chat.openai.com"},
    {id: 12, name: "Claude", category: "writing", icon: "📝", description: "AI assistant focused on being helpful.", pricing: "Freemium", featured: true, url: "https://claude.ai"},
    {id: 13, name: "Jasper", category: "writing", icon: "✍️", description: "AI writing assistant for marketing.", pricing: "Paid", featured: false, url: "https://jasper.ai"},
    {id: 14, name: "Grammarly", category: "writing", icon: "📋", description: "AI-powered writing improvement tool.", pricing: "Freemium", featured: false, url: "https://grammarly.com"},
    {id: 15, name: "Copy.ai", category: "writing", icon: "📄", description: "AI copywriting tool for businesses.", pricing: "Freemium", featured: false, url: "https://copy.ai"},
    {id: 16, name: "Writesonic", category: "writing", icon: "🚀", description: "AI content writing platform.", pricing: "Freemium", featured: false, url: "https://writesonic.com"},
    {id: 17, name: "Rytr", category: "writing", icon: "📚", description: "Affordable AI writing assistant.", pricing: "Freemium", featured: false, url: "https://rytr.me"},
    {id: 18, name: "QuillBot", category: "writing", icon: "🦜", description: "AI paraphrasing and rewriting tool.", pricing: "Freemium", featured: false, url: "https://quillbot.com"},
    {id: 19, name: "Notion AI", category: "writing", icon: "📓", description: "AI-powered workspace assistant.", pricing: "Paid", featured: false, url: "https://notion.so"},
    {id: 20, name: "Sudowrite", category: "writing", icon: "📖", description: "AI writing tool for fiction authors.", pricing: "Paid", featured: false, url: "https://sudowrite.com"},
    {id: 21, name: "Synthesia", category: "video", icon: "🎭", description: "AI video generation with avatars.", pricing: "Paid", featured: true, url: "https://synthesia.io"},
    {id: 22, name: "Runway", category: "video", icon: "🎬", description: "AI-powered video editing platform.", pricing: "Freemium", featured: true, url: "https://runwayml.com"},
    {id: 23, name: "Pictory", category: "video", icon: "📽️", description: "AI video creation from text.", pricing: "Freemium", featured: false, url: "https://pictory.ai"},
    {id: 24, name: "Descript", category: "video", icon: "🎙️", description: "AI video and podcast editing.", pricing: "Freemium", featured: false, url: "https://descript.com"},
    {id: 25, name: "HeyGen", category: "video", icon: "👤", description: "AI talking avatar videos.", pricing: "Freemium", featured: false, url: "https://heygen.com"},
    {id: 26, name: "Elai.io", category: "video", icon: "🎥", description: "AI video from text with avatars.", pricing: "Freemium", featured: false, url: "https://elai.io"},
    {id: 27, name: "InVideo", category: "video", icon: "🎬", description: "AI video creation with templates.", pricing: "Freemium", featured: false, url: "https://invideo.io"},
    {id: 28, name: "Fliki", category: "video", icon: "🎨", description: "Create videos with AI voices.", pricing: "Freemium", featured: false, url: "https://fliki.ai"},
    {id: 29, name: "ElevenLabs", category: "audio", icon: "🎤", description: "AI voice generation and cloning.", pricing: "Freemium", featured: true, url: "https://elevenlabs.io"},
    {id: 30, name: "Murf.ai", category: "audio", icon: "🗣️", description: "Professional AI voice generator.", pricing: "Freemium", featured: false, url: "https://murf.ai"},
    {id: 31, name: "Whisper", category: "audio", icon: "👂", description: "OpenAI's speech recognition.", pricing: "Free", featured: false, url: "https://openai.com/research/whisper"},
    {id: 32, name: "Otter.ai", category: "audio", icon: "🦦", description: "AI meeting transcription.", pricing: "Freemium", featured: false, url: "https://otter.ai"},
    {id: 33, name: "WellSaid Labs", category: "audio", icon: "🗣️", description: "Enterprise AI voice platform.", pricing: "Paid", featured: false, url: "https://wellsaidlabs.com"},
    {id: 34, name: "Lovo.ai", category: "audio", icon: "🔊", description: "AI voices with emotion.", pricing: "Freemium", featured: false, url: "https://lovo.ai"},
    {id: 35, name: "Play.ht", category: "audio", icon: "🎵", description: "AI text-to-speech platform.", pricing: "Freemium", featured: false, url: "https://play.ht"},
    {id: 36, name: "Krisp", category: "audio", icon: "🔇", description: "AI noise cancellation.", pricing: "Freemium", featured: false, url: "https://krisp.ai"},
    {id: 37, name: "GitHub Copilot", category: "coding", icon: "🤖", description: "AI pair programmer.", pricing: "Paid", featured: true, url: "https://github.com/features/copilot"},
    {id: 38, name: "Claude Code", category: "coding", icon: "💻", description: "Anthropic's coding assistant.", pricing: "Free", featured: false, url: "https://claude.com/claude-code"},
    {id: 39, name: "Tabnine", category: "coding", icon: "📝", description: "AI code completion tool.", pricing: "Freemium", featured: false, url: "https://tabnine.com"},
    {id: 40, name: "Codeium", category: "coding", icon: "⚡", description: "Free AI code completion.", pricing: "Free", featured: false, url: "https://codeium.com"},
    {id: 41, name: "CodeWhisperer", category: "coding", icon: "🗣️", description: "Amazon's AI code companion.", pricing: "Free", featured: false, url: "https://aws.amazon.com/codewhisperer"},
    {id: 42, name: "Mintlify", category: "coding", icon: "📚", description: "AI documentation writer.", pricing: "Freemium", featured: false, url: "https://mintlify.com"},
    {id: 43, name: "StackBlitz", category: "coding", icon: "⚡", description: "Browser-based IDE with AI.", pricing: "Freemium", featured: false, url: "https://stackblitz.com"},
    {id: 44, name: "Cursor", category: "coding", icon: "🎯", description: "AI-first code editor.", pricing: "Freemium", featured: false, url: "https://cursor.sh"},
    {id: 45, name: "Canva", category: "design", icon: "🎨", description: "AI-powered design platform.", pricing: "Freemium", featured: true, url: "https://www.canva.com"},
    {id: 46, name: "Remove.bg", category: "design", icon: "✂️", description: "AI background removal tool.", pricing: "Freemium", featured: false, url: "https://www.remove.bg"},
    {id: 47, name: "Figma", category: "design", icon: "🎯", description: "UI/UX design with AI plugins.", pricing: "Freemium", featured: false, url: "https://www.figma.com"},
    {id: 48, name: "Looka", category: "design", icon: "👁️", description: "AI logo and brand design.", pricing: "Freemium", featured: false, url: "https://looka.com"},
    {id: 49, name: "Khroma", category: "design", icon: "🌈", description: "AI color palette generator.", pricing: "Free", featured: false, url: "https://khroma.co"},
    {id: 50, name: "Coolors", category: "design", icon: "🎨", description: "Smart color palette creator.", pricing: "Freemium", featured: false, url: "https://coolors.co"},
    {id: 51, name: "Hemingway", category: "design", icon: "📝", description: "AI writing editor for clarity.", pricing: "Freemium", featured: false, url: "https://hemingwayapp.com"},
    {id: 52, name: "VanceAI", category: "design", icon: "✨", description: "AI image enhancement.", pricing: "Freemium", featured: false, url: "https://vanceai.com"},
    {id: 53, name: "Taskade", category: "productivity", icon: "📋", description: "AI-powered task management.", pricing: "Freemium", featured: false, url: "https://taskade.com"},
    {id: 54, name: "Mem.ai", category: "productivity", icon: "🧠", description: "AI personal knowledge manager.", pricing: "Freemium", featured: false, url: "https://mem.ai"},
    {id: 55, name: "Coda AI", category: "productivity", icon: "📊", description: "AI docs and spreadsheets.", pricing: "Freemium", featured: false, url: "https://coda.io"},
    {id: 56, name: "ClickUp AI", category: "productivity", icon: "✅", description: "AI productivity for teams.", pricing: "Freemium", featured: false, url: "https://clickup.com"},
    {id: 57, name: "Motion", category: "productivity", icon: "⚙️", description: "AI calendar and scheduler.", pricing: "Paid", featured: false, url: "https://usemotion.com"},
    {id: 58, name: "Reclaim.ai", category: "productivity", icon: "🛡️", description: "AI calendar automation.", pricing: "Freemium", featured: false, url: "https://reclaim.ai"},
    {id: 59, name: "Clockwise", category: "productivity", icon: "⏰", description: "AI calendar optimization.", pricing: "Freemium", featured: false, url: "https://getclockwise.com"},
    {id: 60, name: "Calendly AI", category: "productivity", icon: "📅", description: "AI meeting scheduling.", pricing: "Freemium", featured: false, url: "https://calendly.com"},
    {id: 61, name: "MarketMuse", category: "marketing", icon: "📊", description: "AI content strategy platform.", pricing: "Paid", featured: false, url: "https://marketmuse.com"},
    {id: 62, name: "Clearscope", category: "marketing", icon: "🎯", description: "AI SEO content optimizer.", pricing: "Paid", featured: false, url: "https://clearscope.com"},
    {id: 63, name: "Surfer SEO", category: "marketing", icon: "🌊", description: "AI-driven SEO content tool.", pricing: "Paid", featured: false, url: "https://surferseo.com"},
    {id: 64, name: "Frase.io", category: "marketing", icon: "📝", description: "AI content brief generator.", pricing: "Freemium", featured: false, url: "https://frase.io"},
    {id: 65, name: "NeuronWriter", category: "marketing", icon: "🧠", description: "AI content optimization.", pricing: "Freemium", featured: false, url: "https://neuronwriter.com"},
    {id: 66, name: "RankIQ", category: "marketing", icon: "🏆", description: "AI blog optimization.", pricing: "Paid", featured: false, url: "https://rankiq.com"},
    {id: 67, name: "Inkforall", category: "marketing", icon: "✒️", description: "AI writing and SEO.", pricing: "Freemium", featured: false, url: "https://inkforall.com"},
    {id: 68, name: "CopySmith", category: "marketing", icon: "📝", description: "AI e-commerce copywriting.", pricing: "Freemium", featured: false, url: "https://copysmith.com"},
    {id: 69, name: "Tableau", category: "data", icon: "📊", description: "AI-powered data visualization.", pricing: "Paid", featured: false, url: "https://www.tableau.com"},
    {id: 70, name: "Power BI", category: "data", icon: "📈", description: "Microsoft business analytics.", pricing: "Freemium", featured: false, url: "https://powerbi.microsoft.com"},
    {id: 71, name: "MonkeyLearn", category: "data", icon: "🐒", description: "No-code AI text analysis.", pricing: "Freemium", featured: false, url: "https://monkeylearn.com"},
    {id: 72, name: "RapidMiner", category: "data", icon: "⚡", description: "AI data science platform.", pricing: "Paid", featured: false, url: "https://rapidminer.com"},
    {id: 73, name: "DataRobot", category: "data", icon: "🤖", description: "Automated machine learning.", pricing: "Paid", featured: false, url: "https://www.datarobot.com"},
    {id: 74, name: "H2O.ai", category: "data", icon: "💧", description: "Open-source AI and ML.", pricing: "Freemium", featured: false, url: "https://www.h2o.ai"},
    {id: 75, name: "Dataiku", category: "data", icon: "🎯", description: "Collaborative data science.", pricing: "Paid", featured: false, url: "https://www.dataiku.com"},
    {id: 76, name: "Knime", category: "data", icon: "🔮", description: "Data analytics and integration.", pricing: "Freemium", featured: false, url: "https://www.knime.com"}
];

const categories = [
    {name: "Image Generation", icon: "🖼️", count: 10, key: "image"},
    {name: "Writing & Content", icon: "✍️", count: 10, key: "writing"},
    {name: "Video Production", icon: "🎬", count: 8, key: "video"},
    {name: "Audio & Voice", icon: "🎤", count: 8, key: "audio"},
    {name: "Coding", icon: "💻", count: 8, key: "coding"},
    {name: "Design", icon: "🎨", count: 8, key: "design"},
    {name: "Productivity", icon: "📋", count: 8, key: "productivity"},
    {name: "Marketing", icon: "📈", count: 8, key: "marketing"},
    {name: "Data & Analytics", icon: "📊", count: 8, key: "data"}
];

function renderCategories() {
    var grid = document.getElementById('categoryGrid');
    if (!grid) return;
    var html = '';
    for (var i = 0; i < categories.length; i++) {
        var cat = categories[i];
        html += '<div class="category-card" onclick="filterAndScroll(\'' + cat.key + '\')">';
        html += '<div class="category-icon">' + cat.icon + '</div>';
        html += '<div class="category-name">' + cat.name + '</div>';
        html += '<div class="category-count">' + cat.count + ' tools</div>';
        html += '</div>';
    }
    grid.innerHTML = html;
}

function renderToolCard(tool) {
    var html = '<div class="tool-card" onclick="openTool(\'' + tool.url + '\')">';
    html += '<div class="tool-header">';
    html += '<div class="tool-icon">' + tool.icon + '</div>';
    html += '<div class="tool-info">';
    html += '<div class="tool-name">' + tool.name + '</div>';
    html += '<div class="tool-category">' + getCategoryName(tool.category) + '</div>';
    html += '</div></div>';
    html += '<div class="tool-body">';
    html += '<p class="tool-description">' + tool.description + '</p>';
    html += '</div>';
    html += '<div class="tool-footer">';
    html += '<span class="tool-pricing">' + tool.pricing + '</span>';
    html += '<span class="tool-link">Visit →</span>';
    html += '</div></div>';
    return html;
}

function renderFeatured() {
    var grid = document.getElementById('featuredTools');
    if (!grid) return;
    var featured = [];
    for (var i = 0; i < tools.length; i++) {
        if (tools[i].featured) featured.push(tools[i]);
    }
    var html = '';
    for (var i = 0; i < featured.length; i++) {
        html += renderToolCard(featured[i]);
    }
    grid.innerHTML = html;
}

function renderNew() {
    var grid = document.getElementById('newTools');
    if (!grid) return;
    var html = '';
    for (var i = 0; i < 8 && i < tools.length; i++) {
        html += renderToolCard(tools[i]);
    }
    grid.innerHTML = html;
}

function renderTools(filter) {
    var grid = document.getElementById('allTools');
    if (!grid) return;
    
    var filtered = tools;
    if (filter && filter !== 'all') {
        filtered = [];
        for (var i = 0; i < tools.length; i++) {
            if (tools[i].category === filter) filtered.push(tools[i]);
        }
    }
    
    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        html += renderToolCard(filtered[i]);
    }
    grid.innerHTML = html;
}

function searchTools(query) {
    var grid = document.getElementById('allTools');
    if (!grid) return;
    
    if (!query || query.length < 2) {
        renderTools('all');
        return;
    }
    
    var q = query.toLowerCase();
    var results = [];
    for (var i = 0; i < tools.length; i++) {
        var t = tools[i];
        if (t.name.toLowerCase().indexOf(q) !== -1 ||
            t.description.toLowerCase().indexOf(q) !== -1 ||
            t.category.toLowerCase().indexOf(q) !== -1) {
            results.push(t);
        }
    }
    
    var html = '';
    if (results.length === 0) {
        html = '<p style="padding: 40px; text-align: center; color: #64748b;">No tools found for "' + query + '"</p>';
    } else {
        html = '<p style="padding: 10px 20px; background: #f5f5f5; margin-bottom: 20px; border-radius: 8px;">Found ' + results.length + ' tool' + (results.length !== 1 ? 's' : '') + ' for "' + query + '"</p>';
        for (var i = 0; i < results.length; i++) {
            html += renderToolCard(results[i]);
        }
    }
    grid.innerHTML = html;
}

function getCategoryName(key) {
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].key === key) return categories[i].name;
    }
    return key;
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
    var btns = document.querySelectorAll('.filter-btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
        if (btns[i].dataset.category === category) {
            btns[i].classList.add('active');
        }
    }
}

function openTool(url) {
    window.open(url, '_blank');
}

function init() {
    renderCategories();
    renderFeatured();
    renderNew();
    renderTools('all');
    
    // Search functionality
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            searchTools(e.target.value);
        });
    }
    
    // Filter buttons
    var btns = document.querySelectorAll('.filter-btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            filterAndScroll(this.dataset.category);
        });
    }
}

window.addEventListener('DOMContentLoaded', init);
