# Riyashika Nedunchezhian - Portfolio Website

A sophisticated, award-winning-quality personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Premium Design**: Dark-mode-first aesthetic with electric indigo accents
- ✨ **Smooth Animations**: Framer Motion-powered interactions and scroll reveals
- 📱 **Fully Responsive**: Mobile-first design with breakpoints at 375px, 768px, 1440px
- 🌓 **Theme Toggle**: Dark/light mode with persistent preference
- 🎯 **Interactive Elements**: Custom cursor, magnetic hover effects, spotlight cards
- ⚡ **Performance Optimized**: Code splitting, lazy loading, 60fps scroll
- ♿ **Accessible**: Semantic HTML, ARIA labels, reduced motion support

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 13
- **Fonts**: Space Grotesk, Inter, JetBrains Mono

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Render (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Render**:
   - Go to [render.com](https://render.com)
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` configuration
   - Deploy!

### Manual Render Configuration

If auto-detection doesn't work, use these settings:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 20

### Other Platforms

The built `dist` folder can be deployed to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `dist` folder as the source
- **Any static hosting**: Upload the `dist` folder contents

## Environment Variables

Create a `.env` file in the root directory (optional):

```env
VITE_EMAIL=your-email@example.com
VITE_LINKEDIN=https://linkedin.com/in/yourprofile
VITE_GITHUB=https://github.com/yourusername
```

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── contexts/       # React contexts (Theme)
│   ├── data/          # Portfolio data
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── render.yaml        # Render deployment config
```

## Customization

### Update Portfolio Data

Edit `src/data/portfolioData.js` to update:
- Personal information
- Experience
- Projects
- Skills
- Contact details

### Update SEO Meta Tags

Edit `index.html` to update:
- Page title
- Meta description
- Open Graph tags
- Twitter Card tags

## Performance

- **Bundle Size**: ~370KB (gzipped: ~115KB)
- **First Load**: < 2s on 3G
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)

## License

This project is open source and available under the MIT License.

---

Built with ❤️ by Riyashika Nedunchezhian
