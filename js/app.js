// AI Tools Hub - Main JavaScript

// Tool Data - 100+ AI Tools
const tools = [
    // Image Generation (15 tools)
    {
        id: 1, name: "Midjourney", category: "image", icon: "🎨",
        description: "AI image generation tool known for stunning artistic visuals and creative capabilities.",
        pricing: "Freemium", featured: true, new: false,
        features: ["Discord-based interface", "Highly detailed images", "Multiple style options", "Fast generation"],
        url: "https://www.midjourney.com"
    },
    {
        id: 2, name: "DALL-E 3", category: "image", icon: "🖼️",
        description: "OpenAI's image generation model that creates highly detailed images from text descriptions.",
        pricing: "Paid", featured: true, new: false,
        features: ["Text-to-image generation", "ChatGPT integration", "High-resolution output", "Edit and variation options"],
        url: "https://openai.com/dall-e-3"
    },
    {
        id: 3, name: "Stable Diffusion", category: "image", icon: "✨",
        description: "Open-source AI image generation model that runs locally and produces high-quality images.",
        pricing: "Free", featured: false, new: false,
        features: ["Open source & free", "Runs locally", "Highly customizable", "Large community"],
        url: "https://stability.ai/stable-diffusion"
    },
    {
        id: 4, name: "Leonardo AI", category: "image", icon: "🎭",
        description: "AI-powered image generation with advanced controls and creative presets.",
        pricing: "Freemium", featured: false, new: true,
        features: ["Real-time generation", "Custom models", "Prompt assistant", "Canvas tools"],
        url: "https://leonardo.ai"
    },
    {
        id: 5, name: "Runway ML", category: "image", icon: "🎬",
        description: "AI-powered creative tools including image generation and video editing.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Video editing AI", "Image generation", "Collaborative tools", "Green screen removal"],
        url: "https://runwayml.com"
    },
    {
        id: 6, name: "Bing Image Creator", category: "image", icon: "🔍",
        description: "Microsoft's AI image generator powered by DALL-E technology, free to use.",
        pricing: "Free", featured: false, new: false,
        features: ["Powered by DALL-E", "Free to use", "Microsoft integration", "Quick generation"],
        url: "https://www.bing.com/images/create"
    },
    {
        id: 7, name: "Canva AI", category: "image", icon: "🎨",
        description: "AI-powered design tools integrated into Canva's popular design platform.",
        pricing: "Freemium", featured: false, new: false,
        features: ["AI image generator", "Design templates", "Magic eraser", "Background remover"],
        url: "https://www.canva.com/ai-image-generator/"
    },
    {
        id: 8, name: "Adobe Firefly", category: "image", icon: "🔥",
        description: "Adobe's family of creative generative AI models for images and text effects.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Adobe integration", "Text-to-image", "Generative fill", "Commercial safe"],
        url: "https://firefly.adobe.com"
    },
    {
        id: 9, name: "Craiyon", category: "image", icon: "🖌️",
        description: "Free AI image generator that creates unique art from your text descriptions.",
        pricing: "Free", featured: false, new: false,
        features: ["Completely free", "No signup required", "Quick results", "Unique art style"],
        url: "https://www.craiyon.com"
    },
    {
        id: 10, name: "DreamStudio", category: "image", icon: "💭",
        description: "Stability AI's official image generation platform with advanced controls.",
        pricing: "Paid", featured: false, new: false,
        features: ["Stable Diffusion API", "Advanced settings", "Fast processing", "Commercial rights"],
        url: "https://dreamstudio.ai"
    },
    {
        id: 11, name: "BlueWillow", category: "image", icon: "🐝",
        description: "AI image generator similar to Midjourney, operates through Discord.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Discord-based", "Free tier available", "Multiple aspect ratios", "Vibrant colors"],
        url: "https://www.bluewillow.ai"
    },
    {
        id: 12, name: "Playground AI", category: "image", icon: "🛝",
        description: "Free AI image generation tool with powerful editing capabilities.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Free daily credits", "Image editing", "Collage maker", "High resolution"],
        url: "https://playgroundai.com"
    },
    {
        id: 13, name: "Fooocus", category: "image", icon: "🔲",
        description: "User-friendly AI image generation software based on Stable Diffusion.",
        pricing: "Free", featured: false, new: false,
        features: ["Offline capable", "Easy to use", "No API needed", "Highly customizable"],
        url: "https://github.com/lllyasviel/Fooocus"
    },
    {
        id: 14, name: "DeepAI", category: "image", icon: "🤖",
        description: "AI image generation and manipulation platform with multiple tools.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Multiple AI models", "Image editing", "Style transfer", "Age progression"],
        url: "https://deepai.org"
    },
    {
        id: 15, name: "Pika Labs", category: "image", icon: "🎬",
        description: "AI-powered video and image generation platform with creative effects.",
        pricing: "Freemium", featured: false, new: true,
        features: ["AI video generation", "Image creation", "Style transfer", "Discord access"],
        url: "https://pika.art"
    },
    
    // Writing (15 tools)
    {
        id: 16, name: "ChatGPT", category: "writing", icon: "💬",
        description: "Versatile AI assistant for writing, coding, analysis, and creative tasks.",
        pricing: "Freemium", featured: true, new: false,
        features: ["Natural conversation", "Code assistance", "Writing help", "Multi-language support"],
        url: "https://chat.openai.com"
    },
    {
        id: 17, name: "Claude", category: "writing", icon: "📝",
        description: "AI assistant by Anthropic focused on being helpful, harmless, and honest.",
        pricing: "Freemium", featured: true, new: false,
        features: ["Long context window", "Thoughtful responses", "Writing assistance", "Analysis capabilities"],
        url: "https://claude.ai"
    },
    {
        id: 18, name: "Jasper", category: "writing", icon: "✍️",
        description: "AI writing assistant designed for marketing teams and content creators.",
        pricing: "Paid", featured: false, new: false,
        features: ["Brand voice templates", "Marketing copy", "SEO optimization", "Multi-language"],
        url: "https://jasper.ai"
    },
    {
        id: 19, name: "Grammarly", category: "writing", icon: "📋",
        description: "AI-powered writing assistant that improves grammar, style, and clarity.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Grammar checking", "Style suggestions", "Plagiarism detector", "Tone adjustments"],
        url: "https://grammarly.com"
    },
    {
        id: 20, name: "Copy.ai", category: "writing", icon: "📄",
        description: "AI-powered copywriting tool for marketing content and sales copy.",
        pricing: "Freemium", featured: false, new: true,
        features: ["Marketing templates", "Blog outlines", "Social media posts", "Email campaigns"],
        url: "https://copy.ai"
    },
    {
        id: 21, name: "Writesonic", category: "writing", icon: "🚀",
        description: "AI writing platform for creating SEO-optimized content and articles.",
        pricing: "Freemium", featured: false, new: false,
        features: ["SEO optimization", "Article writing", "Product descriptions", "Multi-language"],
        url: "https://writesonic.com"
    },
    {
        id: 22, name: "Rytr", category: "writing", icon: "📚",
        description: "Affordable AI writing assistant for creating quality content quickly.",
        pricing: "Freemium", featured: false, new: false,
        features: ["30+ use cases", "30+ languages", "Plagiarism checker", "Tone analysis"],
        url: "https://rytr.me"
    },
    {
        id: 23, name: "Notion AI", category: "writing", icon: "📓",
        description: "AI-powered workspace for notes, docs, and project management.",
        pricing: "Paid", featured: false, new: false,
        features: ["AI writing assistant", "Summarization", "Task automation", "Knowledge base"],
        url: "https://notion.so"
    },
    {
        id: 24, name: "QuillBot", category: "writing", icon: "🦜",
        description: "AI-powered paraphrasing tool to improve your writing style.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Paraphrasing", "Grammar checker", "Summarizer", "Citation generator"],
        url: "https://quillbot.com"
    },
    {
        id: 25, name: "Sudowrite", category: "writing", icon: "📖",
        description: "AI writing tool specifically designed for creative fiction writers.",
        pricing: "Paid", featured: false, new: false,
        features: ["Creative writing", "Story suggestions", "Character development", "Plot outlines"],
        url: "https://sudowrite.com"
    },
    {
        id: 26, name: "Paragraph AI", category: "writing", icon: "📝",
        description: "AI writing assistant that works across multiple platforms and apps.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Browser extension", "Mobile keyboard", "Multiple tones", "Grammar checking"],
        url: "https://paragraphai.com"
    },
    {
        id: 27, name: "ClosersCopy", category: "writing", icon: "💼",
        description: "AI copywriting tool focused on sales copy and marketing content.",
        pricing: "Paid", featured: false, new: false,
        features: ["Sales copy", "Marketing frameworks", "SEO tools", "Team collaboration"],
        url: "https://closerscopy.com"
    },
    {
        id: 28, name: "TextCortex", category: "writing", icon: "🧠",
        description: "AI writing assistant with powerful customization and templates.",
        pricing: "Freemium", featured: false, new: false,
        features: ["60+ templates", "Custom AI persona", "Chrome extension", "API access"],
        url: "https://textcortex.com"
    },
    {
        id: 29, name: "Wordtune", category: "writing", icon: "🎯",
        description: "AI writing companion that helps you express your thoughts clearly.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Writing suggestions", "Tone adjustments", "Chrome extension", "WordPress plugin"],
        url: "https://wordtune.com"
    },
    {
        id: 30, name: "Moonbeam", category: "writing", icon: "🌙",
        description: "AI writing tool specifically for long-form content and articles.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Long-form content", "Article outlines", "Blog posts", "Research assistant"],
        url: "https://moonbeam.com"
    },
    
    // Video (10 tools)
    {
        id: 31, name: "Synthesia", category: "video", icon: "🎭",
        description: "AI video generation platform with realistic AI avatars for training videos.",
        pricing: "Paid", featured: true, new: false,
        features: ["AI avatars", "Multi-language", "Custom avatars", "Screen recording"],
        url: "https://synthesia.io"
    },
    {
        id: 32, name: "Runway", category: "video", icon: "🎬",
        description: "AI-powered video editing and generation platform for creators.",
        pricing: "Freemium", featured: true, new: false,
        features: ["Video generation", "Motion tracking", "Background removal", "AI effects"],
        url: "https://runwayml.com"
    },
    {
        id: 33, name: "Pictory", category: "video", icon: "📽️",
        description: "Transform text into engaging videos using AI technology.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Text to video", "Auto captions", "Stock footage", "Branding options"],
        url: "https://pictory.ai"
    },
    {
        id: 34, name: "Descript", category: "video", icon: "🎙️",
        description: "AI-powered video and podcast editing with transcription capabilities.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Automatic transcription", "Screen recording", "AI voice cloning", "Overdub"],
        url: "https://descript.com"
    },
    {
        id: 35, name: "HeyGen", category: "video", icon: "👤",
        description: "AI video platform for creating talking avatar videos quickly.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Talking avatars", "Multi-language", "Custom voice", "Fast rendering"],
        url: "https://heygen.com"
    },
    {
        id: 36, name: "Elai.io", category: "video", icon: "🎥",
        description: "AI video generator for creating videos from text with avatars.",
        pricing: "Freemium", featured: false, new: false,
        features: ["AI presenters", "Article to video", "Custom avatars", "Template library"],
        url: "https://elai.io"
    },
    {
        id: 37, name: "InVideo", category: "video", icon: "🎬",
        description: "AI-powered video creation platform with templates and stock media.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Video templates", "Stock library", "AI voiceover", "Collaboration tools"],
        url: "https://invideo.io"
    },
    {
        id: 38, name: "Fliki", category: "video", icon: "🎨",
        description: "Create videos with AI voices and avatars from text in minutes.",
        pricing: "Freemium", featured: false, new: false,
        features: ["AI voices", "Avatar videos", "Blog to video", "Multi-language"],
        url: "https://fliki.ai"
    },
    {
        id: 39, name: "Colossyan", category: "video", icon: "🤖",
        description: "AI video platform for creating training and learning content.",
        pricing: "Paid", featured: false, new: false,
        features: ["AI avatars", "Training videos", "Multi-language", "Custom branding"],
        url: "https://colossyan.com"
    },
    {
        id: 40, name: "D-ID", category: "video", icon: "👔",
        description: "AI video platform for creating talking avatars from text or PowerPoint.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Talking avatars", "PowerPoint to video", "API access", "Custom avatars"],
        url: "https://d-id.com"
    },
    
    // Audio (10 tools)
    {
        id: 41, name: "ElevenLabs", category: "audio", icon: "🎤",
        description: "AI voice generation with realistic text-to-speech and voice cloning.",
        pricing: "Freemium", featured: true, new: false,
        features: ["Natural voices", "Voice cloning", "Multi-language", "API access"],
        url: "https://elevenlabs.io"
    },
    {
        id: 42, name: "Murf.ai", category: "audio", icon: "🗣️",
        description: "AI voice generator for creating professional voiceovers.",
        pricing: "Freemium", featured: false, new: false,
        features: ["150+ voices", "Voice cloning", "Video voiceover", "Music backing"],
        url: "https://murf.ai"
    },
    {
        id: 43, name: "Whisper", category: "audio", icon: "👂",
        description: "OpenAI's speech recognition model for accurate transcription.",
        pricing: "Free", featured: false, new: false,
        features: ["Multi-language", "Accurate transcription", "Open source", "Local execution"],
        url: "https://openai.com/research/whisper"
    },
    {
        id: 44, name: "Otter.ai", category: "audio", icon: "🦦",
        description: "AI meeting assistant with real-time transcription and summaries.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Live transcription", "Meeting summaries", "Speaker identification", "Calendar sync"],
        url: "https://otter.ai"
    },
    {
        id: 45, name: "WellSaid Labs", category: "audio", icon: "🗣️",
        description: "Enterprise AI voice platform for creating professional audio content.",
        pricing: "Paid", featured: false, new: false,
        features: ["Studio quality", "Enterprise security", "Team collaboration", "API access"],
        url: "https://wellsaidlabs.com"
    },
    {
        id: 46, name: "Lovo.ai", category: "audio", icon: "🔊",
        description: "AI voice generation platform with realistic voices and voice cloning.",
        pricing: "Freemium", featured: false, new: false,
        features: ["500+ voices", "Voice cloning", "Emotion control", "Multi-language"],
        url: "https://lovo.ai"
    },
    {
        id: 47, name: "Play.ht", category: "audio", icon: "🎵",
        description: "AI text-to-speech platform with ultra-realistic voices.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Ultra-realistic", "Voice cloning", "SSML support", "API access"],
        url: "https://play.ht"
    },
    {
        id: 48, name: "Krisp", category: "audio", icon: "🔇",
        description: "AI-powered noise cancellation for calls and recordings.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Noise cancellation", "Echo removal", "Meeting assistant", "Call recording"],
        url: "https://krisp.ai"
    },
    {
        id: 49, name: "Fireflies.ai", category: "audio", icon: "🔥",
        description: "AI meeting assistant for transcribing and analyzing meetings.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Meeting transcription", "AI summaries", "Action items", "Searchable notes"],
        url: "https://fireflies.ai"
    },
    {
        id: 50, name: "Descript", category: "audio", icon: "🎙️",
        description: "AI-powered audio editing with transcription and voice synthesis.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Audio transcription", "Voice cloning", "Podcast editing", "Overdub"],
        url: "https://descript.com"
    },
    
    // Coding (10 tools)
    {
        id: 51, name: "GitHub Copilot", category: "coding", icon: "🤖",
        description: "AI pair programmer that suggests code as you type.",
        pricing: "Paid", featured: true, new: false,
        features: ["Code suggestions", "Multi-language", "IDE integration", "Context-aware"],
        url: "https://github.com/features/copilot"
    },
    {
        id: 52, name: "Claude Code", category: "coding", icon: "💻",
        description: "Anthropic's CLI tool for coding assistance and development tasks.",
        pricing: "Free", featured: false, new: true,
        features: ["Terminal assistant", "Code explanation", "Bug fixing", "Code generation"],
        url: "https://claude.com/claude-code"
    },
    {
        id: 53, name: "Tabnine", category: "coding", icon: "📝",
        description: "AI code completion tool that runs locally for privacy.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Code completion", "Privacy focused", "Multi-language", "Self-hosted option"],
        url: "https://tabnine.com"
    },
    {
        id: 54, name: "Codeium", category: "coding", icon: "⚡",
        description: "Free AI-powered code completion and generation tool.",
        pricing: "Free", featured: false, new: false,
        features: ["Free tier", "Multi-language", "IDE plugins", "Fast suggestions"],
        url: "https://codeium.com"
    },
    {
        id: 55, name: "CodeWhisperer", category: "coding", icon: "🗣️",
        description: "Amazon's AI code companion for building applications faster.",
        pricing: "Free", featured: false, new: false,
        features: ["AWS integration", "Code suggestions", "Security scanning", "Multi-language"],
        url: "https://aws.amazon.com/codewhisperer"
    },
    {
        id: 56, name: "Mintlify", category: "coding", icon: "📚",
        description: "AI-powered documentation writer that understands your code.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Auto documentation", "Code examples", "Interactive docs", "API references"],
        url: "https://mintlify.com"
    },
    {
        id: 57, name: "StackBlitz", category: "coding", icon: "⚡",
        description: "Web-based development environment with AI assistance.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Browser-based IDE", "AI coding help", "Instant loading", "Template sharing"],
        url: "https://stackblitz.com"
    },
    {
        id: 58, name: "Cursor", category: "coding", icon: "🎯",
        description: "AI-first code editor built for pair programming.",
        pricing: "Freemium", featured: false, new: false,
        features: ["AI editor", "Code completion", "Debugging help", "VS Code compatible"],
        url: "https://cursor.sh"
    },
    {
        id: 59, name: "Bito", category: "coding", icon: "🤖",
        description: "AI coding assistant that works in your IDE and CLI.",
        pricing: "Freemium", featured: false, new: false,
        features: ["IDE integration", "Test generation", "Code review", "CLI assistant"],
        url: "https://bito.co"
    },
    {
        id: 60, name: "Blackbox AI", category: "coding", icon: "📦",
        description: "AI-powered code completion and generation platform.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Code generation", "Autocomplete", "Code chat", "Multi-language"],
        url: "https://blackbox.ai"
    },
    
    // Productivity (10 tools)
    {
        id: 61, name: "Taskade", category: "productivity", icon: "📋",
        description: "AI-powered task management and collaborative workspace.",
        pricing: "Freemium", featured: false, new: false,
        features: ["AI agents", "Task automation", "Mind maps", "Team collaboration"],
        url: "https://taskade.com"
    },
    {
        id: 62, name: "Mem.ai", category: "productivity", icon: "🧠",
        description: "AI-powered personal knowledge management tool.",
        pricing: "Freemium", featured: false, new: false,
        features: ["AI organization", "Note taking", "Search optimization", "Calendar integration"],
        url: "https://mem.ai"
    },
    {
        id: 63, name: "Coda AI", category: "productivity", icon: "📊",
        description: "AI assistant for Coda docs and collaborative workspaces.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Doc automation", "AI writing", "Data analysis", "Team workflows"],
        url: "https://coda.io"
    },
    {
        id: 64, name: "ClickUp AI", category: "productivity", icon: "✅",
        description: "AI-powered productivity tool for teams and projects.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Task management", "AI writing", "Time tracking", "Team collaboration"],
        url: "https://clickup.com"
    },
    {
        id: 65, name: "Motion", category: "productivity", icon: "⚙️",
        description: "AI-powered calendar and task management app.",
        pricing: "Paid", featured: false, new: false,
        features: ["Smart scheduling", "Task prioritization", "Calendar sync", "Meeting planning"],
        url: "https://usemotion.com"
    },
    {
        id: 66, name: "Reclaim.ai", category: "productivity", icon: "🛡️",
        description: "AI calendar that automatically schedules your tasks and habits.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Auto scheduling", "Habit tracking", "Meeting booking", "Time blocking"],
        url: "https://reclaim.ai"
    },
    {
        id: 67, name: "Clockwise", category: "productivity", icon: "⏰",
        description: "AI-powered calendar optimization for teams.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Smart scheduling", "Meeting reduction", "Focus time", "Team availability"],
        url: "https://getclockwise.com"
    },
    {
        id: 68, name: "Calendly AI", category: "productivity", icon: "📅",
        description: "AI scheduling assistant for meeting booking.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Auto scheduling", "Team routing", "Round-robin", "Integrations"],
        url: "https://calendly.com"
    },
    {
        id: 69, name: "Einstein GPT", category: "productivity", icon: "⚡",
        description: "Salesforce's AI assistant for customer relationship management.",
        pricing: "Paid", featured: false, new: false,
        features: ["CRM automation", "Email generation", "Data insights", "Customer analytics"],
        url: "https://salesforce.com"
    },
    {
        id: 70, name: "SaneBox", category: "productivity", icon: "📧",
        description: "AI-powered email management and prioritization tool.",
        pricing: "Paid", featured: false, new: false,
        features: ["Email sorting", "Smart folders", "Priority inbox", "Automation"],
        url: "https://sanebox.com"
    },
    
    // Marketing (10 tools)
    {
        id: 71, name: "MarketMuse", category: "marketing", icon: "📊",
        description: "AI content strategy and optimization platform.",
        pricing: "Paid", featured: false, new: false,
        features: ["Content briefs", "SEO optimization", "Competitor analysis", "Topic clusters"],
        url: "https://marketmuse.com"
    },
    {
        id: 72, name: "Clearscope", category: "marketing", icon: "🎯",
        description: "AI-powered SEO content optimization tool.",
        pricing: "Paid", featured: false, new: false,
        features: ["SEO grading", "Content briefs", "Keyword research", "Competitor insights"],
        url: "https://clearscope.com"
    },
    {
        id: 73, name: "Surfer SEO", category: "marketing", icon: "🌊",
        description: "AI-driven SEO content editor and optimization tool.",
        pricing: "Paid", featured: false, new: false,
        features: ["Content scoring", "Keyword research", "SERP analysis", "Outline builder"],
        url: "https://surferseo.com"
    },
    {
        id: 74, name: "Frase.io", category: "marketing", icon: "📝",
        description: "AI content brief and SEO optimization platform.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Content briefs", "SEO questions", "AI writing", "Answer engine"],
        url: "https://frase.io"
    },
    {
        id: 75, name: "NeuronWriter", category: "marketing", icon: "🧠",
        description: "AI-powered content optimization and writing tool.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Content editor", "SEO optimization", "Competitor analysis", "AI templates"],
        url: "https://neuronwriter.com"
    },
    {
        id: 76, name: "RankIQ", category: "marketing", icon: "🏆",
        description: "AI-powered SEO tool for blog optimization.",
        pricing: "Paid", featured: false, new: false,
        features: ["Blog optimization", "Keyword research", "Content briefs", "Ranking predictions"],
        url: "https://rankiq.com"
    },
    {
        id: 77, name: "Inkforall", category: "marketing", icon: "✒️",
        description: "AI content writing and SEO optimization platform.",
        pricing: "Freemium", featured: false, new: false,
        features: ["AI writer", "SEO tools", "Content shield", "Meta generation"],
        url: "https://inkforall.com"
    },
    {
        id: 78, name: "CopySmith", category: "marketing", icon: "📝",
        description: "AI copywriting tool for e-commerce and marketing.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Product descriptions", "Ad copy", "Email marketing", "E-commerce templates"],
        url: "https://copysmith.com"
    },
    {
        id: 79, name: "Peppertype.ai", category: "marketing", icon: "🌶️",
        description: "AI content generation platform for marketing teams.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Content ideas", "Blog posts", "Social media", "Ad copy"],
        url: "https://peppertype.com"
    },
    {
        id: 80, name: "AdCreative.ai", category: "marketing", icon: "📢",
        description: "AI-powered ad creative generation and optimization platform.",
        pricing: "Paid", featured: false, new: false,
        features: ["Ad creatives", "A/B testing", "Performance prediction", "Brand compliance"],
        url: "https://adcreative.ai"
    },
    
    // Design (10 tools)
    {
        id: 81, name: "Canva", category: "design", icon: "🎨",
        description: "Popular design platform with AI-powered features and templates.",
        pricing: "Freemium", featured: true, new: false,
        features: ["Design templates", "AI Magic Write", "Background remover", "Brand kit"],
        url: "https://www.canva.com"
    },
    {
        id: 82, name: "Figma", category: "design", icon: "🎯",
        description: "Collaborative design tool with AI plugins for faster workflows.",
        pricing: "Freemium", featured: false, new: false,
        features: ["UI/UX design", "Real-time collaboration", "AI plugins", "Prototyping"],
        url: "https://www.figma.com"
    },
    {
        id: 83, name: "Looka", category: "design", icon: "👁️",
        description: "AI-powered brand identity and logo design platform.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Logo design", "Brand kits", "Color palettes", "Marketing materials"],
        url: "https://looka.com"
    },
    {
        id: 84, name: "Remove.bg", category: "design", icon: "✂️",
        description: "AI-powered background removal tool for images.",
        pricing: "Freemium", featured: false, new: false,
        features: ["One-click removal", "API access", "Batch processing", "High resolution"],
        url: "https://www.remove.bg"
    },
    {
        id: 85, name: "Khroma", category: "design", icon: "🌈",
        description: "AI-powered color palette generator for designers.",
        pricing: "Free", featured: false, new: false,
        features: ["Color discovery", "Custom algorithms", "Infinite palettes", "Save favorites"],
        url: "https://khroma.co"
    },
    {
        id: 86, name: "Coolors", category: "design", icon: "🎨",
        description: "AI color palette generator for designers and developers.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Color schemes", "Extract from images", "Contrast checker", "Export options"],
        url: "https://coolors.co"
    },
    {
        id: 87, name: "Hemingway Editor", category: "design", icon: "📝",
        description: "AI-powered writing editor that makes your content clear and bold.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Readability score", "Style suggestions", "Grammar checking", "Publishing tools"],
        url: "https://hemingwayapp.com"
    },
    {
        id: 88, name: "VanceAI", category: "design", icon: "✨",
        description: "AI-powered image enhancement and editing platform.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Image upscaling", "Background removal", "Photo restoration", "Anime enhancement"],
        url: "https://vanceai.com"
    },
    {
        id: 89, name: "Uizard", category: "design", icon: "🪄",
        description: "AI-powered UI design tool for wireframes and prototypes.",
        pricing: "Freemium", featured: false, new: false,
        features: ["Screenshots to design", "UI templates", "Wireframing", "Collaboration"],
        url: "https://uizard.com"
    },
    {
        id: 90, name: "Magician", category: "design", icon: "🧙",
        description: "AI-powered design tool for Figma with magic features.",
        pricing: "Freemium", featured: false, new: false,
        features: ["AI icon generation", "Text to image", "Copy writing", "Design suggestions"],
        url: "https://magician.design"
    },
    
    // Data & Analytics (10 tools)
    {
        id: 91, name: "Tableau", category: "data", icon: "📊",
        description: "AI-powered data visualization and business intelligence platform.",
        pricing: "Paid", featured: false, new: false,
        features: ["Data visualization", "Dashboard creation", "