// AI Tools Hub - Main JavaScript

// Tool Data
const tools = [
    // Image Generation
    {
        id: 1,
        name: "Midjourney",
        category: "image",
        icon: "🎨",
        description: "AI image generation tool known for stunning artistic visuals and creative capabilities.",
        pricing: "Freemium",
        featured: true,
        new: false,
        features: [
            "Discord-based interface",
            "Highly detailed images",
            "Multiple style options",
            "Fast generation"
        ],
        url: "https://www.midjourney.com"
    },
    {
        id: 2,
        name: "DALL-E 3",
        category: "image",
        icon: "🖼️",
        description: "OpenAI's image generation model that creates highly detailed images from text descriptions.",
        pricing: "Paid",
        featured: true,
        new: false,
        features: [
            "Text-to-image generation",
            "ChatGPT integration",
            "High-resolution output",
            "Edit and variation options"
        ],
        url: "https://openai.com/dall-e-3"
    },
    {
        id: 3,
        name: "Stable Diffusion",
        category: "image",
        icon: "✨",
        description: "Open-source AI image generation model that runs locally and produces high-quality images.",
        pricing: "Free",
        featured: false,
        new: false,
        features: [
            "Open source & free",
            "Runs locally",
            "Highly customizable",
            "Large community"
        ],
        url: "https://stability.ai/stable-diffusion"
    },
    {
        id: 4,
        name: "Leonardo AI",
        category: "image",
        icon: "🎭",
        description: "AI-powered image generation with advanced controls and creative presets.",
        pricing: "Freemium",
        featured: false,
        new: true,
        features: [
            "Real-time generation",
            "Custom models",
            "Prompt assistant",
            "Canvas tools"
        ],
        url: "https://leonardo.ai"
    },
    {
        id: 5,
        name: "Runway ML",
        category: "image",
        icon: "🎬",
        description: "AI-powered creative tools including image generation and video editing.",
        pricing: "Freemium",
        featured: false,
        new: false,
        features: [
            "Video editing AI",
            "Image generation",
            "Collaborative tools",
            "Green screen removal"
        ],
        url: "https://runwayml.com"
    },
    // Writing
    {
        id: 6,
        name: "ChatGPT",
        category: "writing",
        icon: "💬",
        description: "Versatile AI assistant for writing, coding, analysis, and creative tasks.",
        pricing: "Freemium",
        featured: true,
        new: false,
        features: [
            "Natural conversation",
            "Code assistance",
            "Writing help",
            "Multi-language support"
        ],
        url: "https://chat.openai.com"
    },
    {
        id: 7,
        name: "Claude",
        category: "writing",
        icon: "📝",
        description: "AI assistant by Anthropic focused on being helpful, harmless, and honest.",
        pricing: "Freemium",
        featured: true,
        new: false,
        features: [
            "Long context window",
            "Thoughtful responses",
            "Writing assistance",
            "Analysis capabilities"
        ],
        url: "https://claude.ai"
    },
    {
        id: 8,
        name: "Jasper",
        category: "writing",
        icon: "✍️",
        description: "AI writing assistant designed for marketing teams and content creators.",
        pricing: "Paid",
        featured: false,
        new: false,
        features: [
            "Brand voice templates",
            "Marketing copy",
            "SEO optimization",
            "Multi-language"
        ],
        url: "https://jasper.ai"
    },
    {
        id: 9,
        name: "Grammarly",
        category: "writing",
        icon: "📋",
        description: "AI-powered writing assistant that improves grammar, style, and clarity.",
        pricing: "Freemium",
        featured: false,
        new: false,
        features: [
            "Grammar checking",
            "Style suggestions",
            "Plagiarism detector",
            "Tone adjustments"
        ],
        url: "https://grammarly.com"
    },
    {
        id: 10,
        name: "Copy.ai",
        category: "writing",
        icon: "📄",
        description: "AI-powered copywriting tool for marketing content and sales copy.",
        pricing: "Freemium",
        featured: false,
        new: true,
        features: [
            "Marketing templates",
            "Blog outlines",
            "Social media posts",
            "Email campaigns"
        ],
        url: "https://copy.ai"
    },
    // Video
    {
        id: 11,
        name: "Synthesia",
        category: "video",
        icon: "🎭",
        description: "AI video generation platform with realistic AI avatars for training videos.",
        pricing: "Paid",
        featured: true,
        new: false,
        features: [
            "AI avatars",
            "Multi-language",
            "Custom avatars",
            "Screen recording"
        ],
        url: "https://synthesia.io"
    },
    {
        id: 12,
        name: "Runway",
        category: "video",
        icon: "🎬",
        description: "AI-powered video editing and generation platform for creators.",
        pricing: "Freemium",
        featured: true,
        new: false,
        features: [
            "Video generation",
            "Motion tracking",
            "Background removal",
            "AI effects"
        ],
        url: "https://runwayml.com"
    },
    {
        id: 13,
        name: "Pictory",
        category: "video",
        icon: "📽️",
        description: "Transform text into engaging videos using AI technology.",
        pricing: "Freemium",
        featured: false,
        new: false,
        features: [
            "Text to video",
            "Auto captions",
            "Stock footage",
            "Branding options"
        ],
        url: "https://pictory.ai"
    },
    {
        id: 14,
        name: "Descript",
        category: "video",
        icon: "🎙️",
        description: "AI-powered video and podcast editing with transcription capabilities.",
        pricing: "Freemium",
        featured: false,
        new: false,
        features: [
            "Automatic transcription",
            "Screen recording",
            "AI voice cloning",
            " overdub"
        ],
        url: "https://descript.com"
    },
    // Audio
    {
        id: 15,
        name: "ElevenLabs",
        category: "audio",
        icon: "🎤",
        description: "AI voice generation with realistic text-to-speech and voice cloning.",
        pricing: "Freemium",
        featured: true,
        new: false,
        features: [
            "Natural voices",
            "Voice cloning",
            "Multi-language",
            "API access"
        ],
        url: "https://elevenlabs.io"
    },
    {
        id: 16,
        name: "Murf.ai",
        category: "audio",
        icon: "🗣️",
        description: "AI voice generator for creating professional voiceovers.",
        pricing: "Freemium",
        featured: false,
        new: false,
        features: [
            "150+ voices",
            "Voice cloning",
            "Video voiceover",
            "Music backing"
        ],
        url: "https://murf.ai"
    },
    {
        id: 17,
        name: "Whisper",
        category: "audio",
        icon: "👂",
        description: "OpenAI's speech recognition model for accurate transcription.",
        pricing: "Free",
        featured: false,
        new: false,
        features: [
            "Multi-language",
            "Accurate transcription",
            "Open source",
            "Local execution"
        ],
        url: "https://openai.com/research/whisper"
    },
    // Coding
    {
        id: 18,
        name: "GitHub Copilot",
        category: "coding",
        icon: "🤖",
        description: "AI pair programmer that suggests code as you type.",
        pricing: "Paid",
        featured: true,
        new: false,
        features: [
            "Code suggestions",
            "Multi-language",
            "IDE integration",
            "Context-aware"
        ],
        url: "https://github.com/features/copilot"
    },
    {
        id: 19,
        name: "Claude Code",
        category: "coding",
        icon: "💻",
        description: "Anthropic's CLI tool for coding assistance and development tasks.",
        pricing: "Free",
        featured: false,
        new: true,
        features: [
            "Terminal assistant",
            "Code explanation",
            "Bug fixing",
            "Code generation"
        ],
        url: "https://claude.com/claude-code"
    },
    {
        id: 20,
        name: "Tabnine",
        category: "coding",
        icon: "📝",
        description: "AI code completion tool that runs locally for privacy.",
        pricing: "Freemium",
        featured: false,
        new: false,
        features: [
            "Code completion",
            "Privacy focused",
            "Multi-language",
            "Self-hosted option"
        ],
        url: "https://tabnine.com"
    },
    // Productivity
    {
        id: 21,
        name: "Notion AI",
        category: "writing",
        icon: "📓",
        description: "AI-powered workspace for notes, docs, and project management.",
        pricing: "Paid",
        featured: false,
        new: false,
        features: [
            "AI writing assistant",
            "Summarization",
            "Task automation",
            "Knowledge base"
        ],
        url: "https://notion.so"
    },
    {
        id: 22,
        name: "Otter.ai",
        category: "audio",
        icon: "🦦",
        description: "AI meeting assistant with real-time transcription and summaries.",
        pricing: "Freemium",
        featured: false,
        new: false,
        features: [
            "Live transcription",
            "Meeting summaries",
            "Speaker identification",
            "Calendar sync"
        ],
        url: "https://otter.ai"
    }
];

// Categories Data
const categories = [
    { name: "Image Generation", icon: "🖼️", count: 4, key: "image" },
    { name: "Writing & Content", icon: "✍️", count: 5, key: "writing" },
    { name: "Video Production", icon: "🎬", count: 4, key: "video" },
    { name: "Audio & Voice", icon: "🎤", count: 4, key: "audio" },
    { name: "Coding", icon: "💻", count: 3, key: "coding" }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    renderFeaturedTools();
    renderAllTools();
    renderNewTools();
    initSearch();
    initFilters();
    initModal();
});

// Render categories
function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = categories.map(cat => `
        <a href="#" class="category-card" onclick="filterByCategory('${cat.key}'); return false;">
            <div class="category-icon">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
            <div class="category-count">${cat.count} tools</div>
        </a>
    `).join('');
}

// Render featured tools
function renderFeaturedTools() {
    const grid = document.getElementById('featuredTools');
    const featured = tools.filter(t => t.featured);
    grid.innerHTML = featured.map(tool => renderToolCard(tool)).join('');
}

// Render all tools
function renderAllTools(category = 'all') {
    const grid = document.getElementById('allTools');
    let filtered = tools;
    if (category !== 'all') {
        filtered = tools.filter(t => t.category === category);
    }
    grid.innerHTML = filtered.map(tool => renderToolCard(tool)).join('');
}

// Render new tools
function renderNewTools() {
    const grid = document.getElementById('newTools');
    const newTools = tools.filter(t => t.new);
    grid.innerHTML = newTools.length > 0 
        ? newTools.map(tool => renderToolCard(tool)).join('')
        : '<p style="color: #64748b; font-size: 1rem;">Check back soon for new tools!</p>';
}

// Render tool card
function renderToolCard(tool) {
    const pricingClass = tool.pricing === 'Free' ? '' : (tool.pricing === 'Paid' ? 'paid' : '');
    return `
        <div class="tool-card" onclick="showToolDetail(${tool.id})">
            <div class="tool-header">
                <div class="tool-icon">${tool.icon}</div>
                <div class="tool-info">
                    <div class="tool-name">${tool.name}</div>
                    <div class="tool-category">${getCategoryName(tool.category)}</div>
                </div>
            </div>
            <div class="tool-body">
                <p class="tool-description">${tool.description}</p>
            </div>
            <div class="tool-footer">
                <span class="tool-pricing ${pricingClass}">${tool.pricing}</span>
                <span class="tool-link">View →</span>
            </div>
        </div>
    `;
}

// Get category display name
function getCategoryName(key) {
    const cat = categories.find(c => c.key === key);
    return cat ? cat.name : key;
}

// Filter by category
function filterByCategory(category) {
    renderAllTools(category);
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

// Initialize search
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        const grid = document.getElementById('allTools');
        
        if (query.length < 2) {
            renderAllTools();
            searchResults.style.display = 'none';
            return;
        }
        
        const filtered = tools.filter(tool => 
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.category.toLowerCase().includes(query)
        );
        
        grid.innerHTML = filtered.map(tool => renderToolCard(tool)).join('');
        
        // Show results count
        searchResults.textContent = `${filtered.length} tool${filtered.length !== 1 ? 's' : ''} found`;
        searchResults.style.display = 'block';
    });
    
    // Hide results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

// Initialize filters
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderAllTools(this.dataset.category);
        });
    });
}

// Modal functionality
function initModal() {
    const modal = document.getElementById('toolModal');
    const closeBtn = document.querySelector('.close-btn');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });
}

// Show tool detail
function showToolDetail(id) {
    const tool = tools.find(t => t.id === id);
    if (!tool) return;
    
    const modal = document.getElementById('modalBody');
    const pricingClass = tool.pricing === 'Free' ? '' : (tool.pricing === 'Paid' ? 'paid' : '');
    
    modal.innerHTML = `
        <div class="modal-tool-header">
            <div class="tool-icon" style="width: 72px; height: 72px; font-size: 2rem;">${tool.icon}</div>
            <div class="modal-tool-info">
                <div class="modal-tool-name">${tool.name}</div>
                <div class="modal-tool-category">${getCategoryName(tool.category)}</div>
            </div>
        </div>
        <div class="modal-tool-body">
            <p class="modal-tool-description">${tool.description}</p>
            <div class="modal-tool-features">
                <h4>Key Features</h4>
                <ul>
                    ${tool.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-tool-actions">
                <a href="${tool.url}" target="_blank" class="modal-btn primary">Visit Website</a>
                <button class="modal-btn secondary" onclick="copyToolInfo(${tool.id})">Save Info</button>
            </div>
        </div>
    `;
    
    document.getElementById('toolModal').classList.add('active');
}

// Copy tool info (placeholder)
function copyToolInfo(id) {
    const tool = tools.find(t => t.id === id);
    if (!tool) return;
    
    // Copy to clipboard
    const text = `${tool.name}\n\n${tool.description}\n\nFeatures:\n${tool.features.map(f => '• ' + f).join('\n')}\n\n${tool.url}`;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Tool info copied to clipboard!');
    }).catch(() => {
        alert('Could not copy to clipboard');
    });
}
