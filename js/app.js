// AI Tools Hub - Working JavaScript
const tools = [
    {id: 1, name: "Midjourney", category: "image", icon: "🎨", description: "AI image generation tool for stunning artistic visuals.", pricing: "Freemium", featured: true, url: "https://www.midjourney.com"},
    {id: 2, name: "DALL-E 3", category: "image", icon: "🖼️", description: "OpenAI's text-to-image generation model.", pricing: "Paid", featured: true, url: "https://openai.com/dall-e-3"},
    {id: 3, name: "Stable Diffusion 3", category: "image", icon: "✨", description: "Open-source AI image generation model with improved quality.", pricing: "Free", featured: true, url: "https://stability.ai/stable-diffusion"},
    {id: 4, name: "Leonardo AI", category: "image", icon: "🎭", description: "AI-powered image generation with advanced controls.", pricing: "Freemium", featured: false, url: "https://leonardo.ai"},
    {id: 5, name: "Runway ML", category: "image", icon: "🎬", description: "AI creative tools for images and video.", pricing: "Freemium", featured: false, url: "https://runwayml.com"},
    {id: 6, name: "Bing Image Creator", category: "image", icon: "🔍", description: "Microsoft's free AI image generator powered by DALL-E 3.", pricing: "Free", featured: false, url: "https://www.bing.com/images/create"},
    {id: 7, name: "Adobe Firefly", category: "image", icon: "🔥", description: "Adobe's AI image and text effect generator.", pricing: "Freemium", featured: false, url: "https://firefly.adobe.com"},
    {id: 8, name: "Canva AI", category: "image", icon: "🎨", description: "AI-powered design and image generation.", pricing: "Freemium", featured: false, url: "https://www.canva.com/ai-image-generator"},
    {id: 9, name: "Craiyon", category: "image", icon: "🖌️", description: "Free and simple AI image generator.", pricing: "Free", featured: false, url: "https://www.craiyon.com"},
    {id: 10, name: "DreamStudio", category: "image", icon: "💭", description: "Stability AI's official image platform.", pricing: "Paid", featured: false, url: "https://dreamstudio.ai"},
    {id: 11, name: "Ideogram", category: "image", icon: "📝", description: "AI image generation with text rendering capabilities.", pricing: "Freemium", featured: false, url: "https://ideogram.ai"},
    {id: 12, name: "Flux AI", category: "image", icon: "⚡", description: "Next-generation AI image generator.", pricing: "Freemium", featured: false, url: "https://flux1.ai"},
    {id: 13, name: "Suno", category: "image", icon: "🎵", description: "AI music and image generation platform.", pricing: "Freemium", featured: false, url: "https://suno.ai"},
    {id: 14, name: "ChatGPT", category: "writing", icon: "💬", description: "Versatile AI assistant for all tasks.", pricing: "Freemium", featured: true, url: "https://chat.openai.com"},
    {id: 15, name: "Claude", category: "writing", icon: "📝", description: "AI assistant focused on being helpful and harmless.", pricing: "Freemium", featured: true, url: "https://claude.ai"},
    {id: 16, name: "Gemini", category: "writing", icon: "💎", description: "Google's most capable AI model for writing and more.", pricing: "Freemium", featured: true, url: "https://gemini.google.com"},
    {id: 17, name: "Jasper", category: "writing", icon: "✍️", description: "AI writing assistant for marketing and business.", pricing: "Paid", featured: false, url: "https://jasper.ai"},
    {id: 18, name: "Grammarly", category: "writing", icon: "📋", description: "AI-powered writing improvement and grammar checker.", pricing: "Freemium", featured: false, url: "https://grammarly.com"},
    {id: 19, name: "Copy.ai", category: "writing", icon: "📄", description: "AI copywriting tool for businesses and marketers.", pricing: "Freemium", featured: false, url: "https://copy.ai"},
    {id: 20, name: "Writesonic", category: "writing", icon: "🚀", description: "AI content writing platform for blogs and ads.", pricing: "Freemium", featured: false, url: "https://writesonic.com"},
    {id: 21, name: "Rytr", category: "writing", icon: "📚", description: "Affordable AI writing assistant with 40+ use cases.", pricing: "Freemium", featured: false, url: "https://rytr.me"},
    {id: 22, name: "QuillBot", category: "writing", icon: "🦜", description: "AI paraphrasing and rewriting tool.", pricing: "Freemium", featured: false, url: "https://quillbot.com"},
    {id: 23, name: "Notion AI", category: "writing", icon: "📓", description: "AI-powered workspace and note-taking assistant.", pricing: "Paid", featured: false, url: "https://notion.so"},
    {id: 24, name: "Sudowrite", category: "writing", icon: "📖", description: "AI writing tool for fiction authors and storytellers.", pricing: "Paid", featured: false, url: "https://sudowrite.com"},
    {id: 25, name: "Perplexity", category: "writing", icon: "🔮", description: "AI search engine with conversational answers.", pricing: "Freemium", featured: false, url: "https://perplexity.ai"},
    {id: 26, name: "Synthesia", category: "video", icon: "🎭", description: "AI video generation with realistic avatars.", pricing: "Paid", featured: true, url: "https://synthesia.io"},
    {id: 27, name: "Runway", category: "video", icon: "🎬", description: "AI-powered video editing and generation platform.", pricing: "Freemium", featured: true, url: "https://runwayml.com"},
    {id: 28, name: "Pictory", category: "video", icon: "📽️", description: "AI video creation from text with automatic visuals.", pricing: "Freemium", featured: false, url: "https://pictory.ai"},
    {id: 29, name: "Descript", category: "video", icon: "🎙️", description: "AI video and podcast editing with transcription.", pricing: "Freemium", featured: false, url: "https://descript.com"},
    {id: 30, name: "HeyGen", category: "video", icon: "👤", description: "AI talking avatar videos in minutes.", pricing: "Freemium", featured: false, url: "https://heygen.com"},
    {id: 31, name: "Elai.io", category: "video", icon: "🎥", description: "AI video from text with diverse avatars.", pricing: "Freemium", featured: false, url: "https://elai.io"},
    {id: 32, name: "InVideo", category: "video", icon: "🎬", description: "AI video creation with 5000+ templates.", pricing: "Freemium", featured: false, url: "https://invideo.io"},
    {id: 33, name: "Fliki", category: "video", icon: "🎨", description: "Create videos with AI voices and avatars.", pricing: "Freemium", featured: false, url: "https://fliki.ai"},
    {id: 34, name: "CapCut", category: "video", icon: "✂️", description: "AI-powered video editor with auto-captions.", pricing: "Free", featured: false, url: "https://capcut.com"},
    {id: 35, name: "Kaiber", category: "video", icon: "🎬", description: "AI video generation for creators and artists.", pricing: "Freemium", featured: false, url: "https://kaiber.ai"},
    {id: 36, name: "ElevenLabs", category: "audio", icon: "🎤", description: "AI voice generation and cloning with emotions.", pricing: "Freemium", featured: true, url: "https://elevenlabs.io"},
    {id: 37, name: "Murf.ai", category: "audio", icon: "🗣️", description: "Professional AI voice generator for videos.", pricing: "Freemium", featured: false, url: "https://murf.ai"},
    {id: 38, name: "Whisper", category: "audio", icon: "👂", description: "OpenAI's open-source speech recognition.", pricing: "Free", featured: false, url: "https://openai.com/research/whisper"},
    {id: 39, name: "Otter.ai", category: "audio", icon: "🦦", description: "AI meeting transcription and note-taking.", pricing: "Freemium", featured: false, url: "https://otter.ai"},
    {id: 40, name: "WellSaid Labs", category: "audio", icon: "🗣️", description: "Enterprise AI voice platform for eLearning.", pricing: "Paid", featured: false, url: "https://wellsaidlabs.com"},
    {id: 41, name: "Lovo.ai", category: "audio", icon: "🔊", description: "AI voices with 500+ voices in 100 languages.", pricing: "Freemium", featured: false, url: "https://lovo.ai"},
    {id: 42, name: "Play.ht", category: "audio", icon: "🎵", description: "AI text-to-speech with realistic voices.", pricing: "Freemium", featured: false, url: "https://play.ht"},
    {id: 43, name: "Krisp", category: "audio", icon: "🔇", description: "AI noise cancellation for calls and recordings.", pricing: "Freemium", featured: false, url: "https://krisp.ai"},
    {id: 44, name: "Suno AI", category: "audio", icon: "🎶", description: "AI music generation from text prompts.", pricing: "Freemium", featured: false, url: "https://suno.ai"},
    {id: 45, name: "Udio", category: "audio", icon: "🎼", description: "AI music creation and discovery platform.", pricing: "Freemium", featured: false, url: "https://udio.com"},
    {id: 46, name: "GitHub Copilot", category: "coding", icon: "🤖", description: "AI pair programmer for VS Code and more.", pricing: "Paid", featured: true, url: "https://github.com/features/copilot"},
    {id: 47, name: "Claude Code", category: "coding", icon: "💻", description: "Anthropic's CLI tool for coding assistance.", pricing: "Free", featured: true, url: "https://claude.com/claude-code"},
    {id: 48, name: "Cursor", category: "coding", icon: "🎯", description: "AI-first code editor based on VS Code.", pricing: "Freemium", featured: true, url: "https://cursor.sh"},
    {id: 49, name: "Tabnine", category: "coding", icon: "📝", description: "AI code completion for all languages.", pricing: "Freemium", featured: false, url: "https://tabnine.com"},
    {id: 50, name: "Codeium", category: "coding", icon: "⚡", description: "Free AI code completion and chat.", pricing: "Free", featured: false, url: "https://codeium.com"},
    {id: 51, name: "CodeWhisperer", category: "coding", icon: "🗣️", description: "Amazon's AI code companion (now Q Developer).", pricing: "Free", featured: false, url: "https://aws.amazon.com/codewhisperer"},
    {id: 52, name: "Mintlify", category: "coding", icon: "📚", description: "AI documentation writer for your codebase.", pricing: "Freemium", featured: false, url: "https://mintlify.com"},
    {id: 53, name: "StackBlitz", category: "coding", icon: "⚡", description: "Browser-based IDE with AI assistance.", pricing: "Freemium", featured: false, url: "https://stackblitz.com"},
    {id: 54, name: "Replit AI", category: "coding", icon: "🚀", description: "AI coding assistant for Replit IDE.", pricing: "Freemium", featured: false, url: "https://replit.com"},
    {id: 55, name: "Bolt.new", category: "coding", icon: "⚡", description: "AI-powered full-stack web development.", pricing: "Freemium", featured: false, url: "https://bolt.new"},
    {id: 56, name: "v0.dev", category: "coding", icon: "🎨", description: "AI UI generation from text descriptions.", pricing: "Freemium", featured: false, url: "https://v0.dev"},
    {id: 57, name: "Lovable", category: "coding", icon: "💡", description: "AI app builder for web applications.", pricing: "Freemium", featured: false, url: "https://lovable.dev"},
    {id: 58, name: "Canva", category: "design", icon: "🎨", description: "AI-powered design platform for all creatives.", pricing: "Freemium", featured: true, url: "https://www.canva.com"},
    {id: 59, name: "Remove.bg", category: "design", icon: "✂️", description: "One-click AI background removal tool.", pricing: "Freemium", featured: false, url: "https://www.remove.bg"},
    {id: 60, name: "Figma", category: "design", icon: "🎯", description: "UI/UX design with AI plugins and features.", pricing: "Freemium", featured: false, url: "https://www.figma.com"},
    {id: 61, name: "Looka", category: "design", icon: "👁️", description: "AI logo and brand design generator.", pricing: "Freemium", featured: false, url: "https://looka.com"},
    {id: 62, name: "Khroma", category: "design", icon: "🌈", description: "AI color palette generator using neural networks.", pricing: "Free", featured: false, url: "https://khroma.co"},
    {id: 63, name: "Coolors", category: "design", icon: "🎨", description: "Smart color palette creator and manager.", pricing: "Freemium", featured: false, url: "https://coolors.co"},
    {id: 64, name: "Hemingway", category: "design", icon: "📝", description: "AI writing editor for clarity and impact.", pricing: "Freemium", featured: false, url: "https://hemingwayapp.com"},
    {id: 65, name: "VanceAI", category: "design", icon: "✨", description: "AI image enhancement and restoration.", pricing: "Freemium", featured: false, url: "https://vanceai.com"},
    {id: 66, name: "Leonardo AI", category: "design", icon: "🎭", description: "AI design and image creation platform.", pricing: "Freemium", featured: false, url: "https://leonardo.ai"},
    {id: 67, name: "Recraft", category: "design", icon: "🎨", description: "AI-powered design and illustration tool.", pricing: "Freemium", featured: false, url: "https://recraft.ai"},
    {id: 68, name: "Taskade", category: "productivity", icon: "📋", description: "AI-powered task management and workflows.", pricing: "Freemium", featured: false, url: "https://taskade.com"},
    {id: 69, name: "Mem.ai", category: "productivity", icon: "🧠", description: "AI personal knowledge manager and second brain.", pricing: "Freemium", featured: false, url: "https://mem.ai"},
    {id: 70, name: "Coda AI", category: "productivity", icon: "📊", description: "AI docs, spreadsheets, and workflow automation.", pricing: "Freemium", featured: false, url: "https://coda.io"},
    {id: 71, name: "ClickUp AI", category: "productivity", icon: "✅", description: "AI productivity for teams and projects.", pricing: "Freemium", featured: false, url: "https://clickup.com"},
    {id: 72, name: "Motion", category: "productivity", icon: "⚙️", description: "AI calendar and smart scheduler.", pricing: "Paid", featured: false, url: "https://usemotion.com"},
    {id: 73, name: "Reclaim.ai", category: "productivity", icon: "🛡️", description: "AI calendar automation for teams.", pricing: "Freemium", featured: false, url: "https://reclaim.ai"},
    {id: 74, name: "Clockwise", category: "productivity", icon: "⏰", description: "AI calendar optimization for teams.", pricing: "Freemium", featured: false, url: "https://getclockwise.com"},
    {id: 75, name: "Calendly AI", category: "productivity", icon: "📅", description: "AI meeting scheduling automation.", pricing: "Freemium", featured: false, url: "https://calendly.com"},
    {id: 76, name: "Notion", category: "productivity", icon: "📓", description: "All-in-one workspace with AI features.", pricing: "Freemium", featured: false, url: "https://notion.so"},
    {id: 77, name: "Asana AI", category: "productivity", icon: "📊", description: "AI project management assistant.", pricing: "Freemium", featured: false, url: "https://asana.com"},
    {id: 78, name: "Trello AI", category: "productivity", icon: "📋", description: "AI-powered boards and automation.", pricing: "Freemium", featured: false, url: "https://trello.com"},
    {id: 79, name: "Linear", category: "productivity", icon: "📈", description: "AI-powered issue tracking for software teams.", pricing: "Freemium", featured: false, url: "https://linear.app"},
    {id: 80, name: "Raycast AI", category: "productivity", icon: "⚡", description: "AI-powered launcher for Mac productivity.", pricing: "Free", featured: false, url: "https://raycast.com"},
    {id: 81, name: "Perplexity", category: "research", icon: "🔮", description: "AI search engine with sources and citations.", pricing: "Freemium", featured: true, url: "https://perplexity.ai"},
    {id: 82, name: "Elicit", category: "research", icon: "🔬", description: "AI research assistant for literature review.", pricing: "Freemium", featured: false, url: "https://elicit.org"},
    {id: 83, name: "Consensus", category: "research", icon: "📊", description: "AI search engine for scientific papers.", pricing: "Freemium", featured: false, url: "https://consensus.app"},
    {id: 84, name: "Semantic Scholar", category: "research", icon: "📚", description: "AI-powered academic paper search.", pricing: "Free", featured: false, url: "https://semanticscholar.org"},
    {id: 85, name: "Kimi", category: "research", icon: "🔍", description: "AI search with long context support.", pricing: "Freemium", featured: false, url: "https://kimi.ai"},
    {id: 86, name: "DeepSeek", category: "research", icon: "🧠", description: "Advanced AI reasoning and search engine.", pricing: "Free", featured: false, url: "https://deepseek.com"},
    {id: 87, name: "Grok", category: "research", icon: "🚀", description: "xAI's conversational AI with real-time search.", pricing: "Freemium", featured: false, url: "https://grok.com"},
    {id: 88, name: "ChatGPT Search", category: "research", icon: "💬", description: "AI-powered web search integration.", pricing: "Freemium", featured: false, url: "https://chatgpt.com"},
    {id: 89, name: "Notion AI", category: "productivity", icon: "📓", description: "AI workspace with writing and summarization.", pricing: "Paid", featured: false, url: "https://notion.so"},
    {id: 90, name: "Gamma", category: "presentation", icon: "📊", description: "AI presentation and website builder.", pricing: "Freemium", featured: true, url: "https://gamma.app"},
    {id: 91, name: "Tome", category: "presentation", icon: "📖", description: "AI-powered storytelling and presentations.", pricing: "Freemium", featured: false, url: "https://tome.app"},
    {id: 92, name: "Beautiful.ai", category: "presentation", icon: "🎨", description: "AI-powered presentation software.", pricing: "Freemium", featured: false, url: "https://beautiful.ai"},
    {id: 93, name: "SlidesAI", category: "presentation", icon: "✨", description: "AI text-to-presentation generator.", pricing: "Freemium", featured: false, url: "https://slidesai.app"},
    {id: 94, name: "Canva Presentations", category: "presentation", icon: "🎨", description: "AI-assisted presentation design.", pricing: "Freemium", featured: false, url: "https://www.canva.com"},
    {id: 95, name: "Otter.ai", category: "meeting", icon: "🦦", description: "AI meeting notes and transcription.", pricing: "Freemium", featured: true, url: "https://otter.ai"},
    {id: 96, name: "Fireflies.ai", category: "meeting", icon: "🔥", description: "AI meeting assistant and recorder.", pricing: "Freemium", featured: false, url: "https://fireflies.ai"},
    {id: 97, name: "Fathom", category: "meeting", icon: "📊", description: "AI meeting summarizer for Zoom and Teams.", pricing: "Freemium", featured: false, url: "https://fathom.video"},
    {id: 98, name: "Zoom AI", category: "meeting", icon: "🎥", description: "AI Companion for Zoom meetings.", pricing: "Freemium", featured: false, url: "https://zoom.us"},
    {id: 99, name: "Lovable", category: "no-code", icon: "💡", description: "AI app builder for web and mobile apps.", pricing: "Freemium", featured: true, url: "https://lovable.dev"},
    {id: 100, name: "Bolt.new", category: "no-code", icon: "⚡", description: "Full-stack AI development platform.", pricing: "Freemium", featured: true, url: "https://bolt.new"},
    {id: 101, name: "v0.dev", category: "no-code", icon: "🎨", description: "AI UI components generator by Vercel.", pricing: "Freemium", featured: true, url: "https://v0.dev"},
    {id: 102, name: "Galileo AI", category: "no-code", icon: "🌟", description: "AI UI design and prototyping.", pricing: "Freemium", featured: false, url: "https://galileo.ai"},
    {id: 103, name: "Uizard", category: "no-code", icon: "🎯", description: "AI wireframe and UI design tool.", pricing: "Freemium", featured: false, url: "https://uizard.com"},
    {id: 104, name: "Framer", category: "no-code", icon: "📱", description: "AI website builder with responsive design.", pricing: "Freemium", featured: false, url: "https://framer.com"},
    {id: 105, name: "Relume", category: "no-code", icon: "🗺️", description: "AI website sitemap and wireframe builder.", pricing: "Freemium", featured: false, url: "https://relume.io"},
    {id: 106, name: "Vercel AI SDK", category: "coding", icon: "⚡", description: "Build AI-powered applications with Vercel.", pricing: "Free", featured: false, url: "https://vercel.com"},
    {id: 107, name: "LangChain", category: "coding", icon: "🔗", description: "Build applications with LLMs.", pricing: "Free", featured: false, url: "https://langchain.com"},
    {id: 108, name: "LlamaIndex", category: "coding", icon: "📚", description: "Data framework for LLM applications.", pricing: "Free", featured: false, url: "https://llamaindex.ai"},
    {id: 109, name: "Hugging Face", category: "coding", icon: "🤗", description: "ML models and datasets repository.", pricing: "Free", featured: true, url: "https://huggingface.co"},
    {id: 110, name: "Weights & Biases", category: "coding", icon: "📊", description: "ML experiment tracking and visualization.", pricing: "Freemium", featured: false, url: "https://wandb.ai"}
];    {id: 36, name: "Krisp", category: "audio", icon: "🔇", description: "AI noise cancellation.", pricing: "Freemium", featured: false, url: "https://krisp.ai"},
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
    {name: "Image Generation", icon: "🖼️", count: 13, key: "image"},
    {name: "Writing & Content", icon: "✍️", count: 12, key: "writing"},
    {name: "Video Production", icon: "🎬", count: 10, key: "video"},
    {name: "Audio & Voice", icon: "🎤", count: 10, key: "audio"},
    {name: "Coding", icon: "💻", count: 13, key: "coding"},
    {name: "Design", icon: "🎨", count: 10, key: "design"},
    {name: "Productivity", icon: "📋", count: 12, key: "productivity"},
    {name: "Research & Search", icon: "🔍", count: 8, key: "research"},
    {name: "Presentations", icon: "📊", count: 5, key: "presentation"},
    {name: "Meetings", icon: "🎥", count: 4, key: "meeting"},
    {name: "No-Code", icon: "🚀", count: 6, key: "no-code"}
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
