# AI Tools Hub - Free AI Tools Directory

A clean, professional, and easy-to-use directory of the best free AI tools.

## 🌐 Live Demo

Visit: https://your-username.github.io/ai-tools-directory

## ✨ Features

- **Clean & Professional UI** - Modern design with smooth animations
- **Search Functionality** - Find tools instantly
- **Category Filters** - Browse by Image, Writing, Video, Audio, Coding
- **Responsive Design** - Works perfectly on mobile and desktop
- **Fast Loading** - Pure static HTML/CSS/JS
- **SEO Optimized** - Built-in meta tags for search engines

## 📂 Project Structure

```
ai-tools-directory/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── app.js          # JavaScript functionality
├── images/             # Image assets
└── README.md           # This file
```

## 🚀 How to Host for FREE

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub account** at https://github.com

2. **Create a new repository:**
   - Go to https://github.com/new
   - Repository name: `ai-tools-directory`
   - Select "Public"
   - Click "Create repository"

3. **Upload files:**
   - Click "uploading an existing file"
   - Drag and drop all files from `/home/anand/Desktop/ai-tools-directory/`
   - Click "Commit changes"

4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Under "Branch", select "main" (or "master")
   - Folder: "/ (root)"
   - Click "Save"

5. **Your site will be live at:**
   ```
   https://yourusername.github.io/ai-tools-directory
   ```

### Option 2: Netlify

1. **Go to** https://netlify.com

2. **Sign up** with your GitHub account

3. **Drag and drop:**
   - Drag the entire `ai-tools-directory` folder onto Netlify

4. **Your site is live!** (auto-generated URL)

### Option 3: Vercel

1. **Go to** https://vercel.com

2. **Sign up** with GitHub

3. **Add New Project:**
   - Import from GitHub
   - Select your repository

4. **Deploy!** (instant, free)

## 🔧 Customization

### Add/Edit Tools

Edit `js/app.js` and modify the `tools` array:

```javascript
{
    id: 23,
    name: "Your Tool Name",
    category: "image",  // image, writing, video, audio, coding
    icon: "🎨",
    description: "Tool description here...",
    pricing: "Free",  // Free, Freemium, or Paid
    featured: true,   // Show on homepage
    new: false,      // Mark as new
    features: ["Feature 1", "Feature 2"],
    url: "https://tool-website.com"
}
```

### Add Categories

Edit `js/app.js` and modify the `categories` array:

```javascript
const categories = [
    { name: "Category Name", icon: "📁", count: 5, key: "category-key" }
];
```

### Change Colors

Edit `css/style.css` and modify the `:root` variables:

```css
:root {
    --primary-color: #2563eb;  /* Change this to your color */
    --secondary-color: #0f172a;
    /* ... other colors */
}
```

## 📊 SEO Optimization

The website includes:
- Meta description
- Viewport settings
- Semantic HTML structure
- Fast loading (no external dependencies)

### Custom Meta Tags

Edit `index.html` to update SEO:

```html
<meta name="description" content="Your custom description here">
<title>Your Custom Title</title>
```

## 📱 Mobile Responsive

The website automatically adjusts for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎨 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Monetization

Ready for ads! Add your Google AdSense or other ad code to `index.html`:
- After `<head>` for header ads
- Before `</body>` for footer ads
- Between tool cards for sidebar ads

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with variables
- **Vanilla JavaScript** - No frameworks, fast loading
- **Google Fonts** - Inter font family

## 📝 License

MIT License - Feel free to use and modify!

## 🤝 Contributing

Want to add more tools? Just edit the `tools` array in `js/app.js` and submit a pull request!

## 📧 Support

Questions? Issues? Open a GitHub issue or contact us.

---

**Built with ❤️ using OpenClaw**
