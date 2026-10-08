# Deployment Instructions for Riyashika's Portfolio

## Local Development
```bash
npm run dev
```
Visit http://localhost:3000

## Production Build
```bash
npm run build
```
This creates an optimized production build in the `.next` directory.

## Deployment Options

### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel` (follow prompts)
4. For production: `vercel --prod`

### Option 2: Render.com
1. Push your code to a GitHub repository
2. In Render dashboard:
   - New → Web Service
   - Connect your GitHub repository
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Environment: Node.js
3. Click "Create Web Service"

### Option 3: Manual Node.js Hosting
1. Build: `npm run build`
2. Start: `npm start` (serves on port 3000 by default)
3. Use a process manager like PM2 for production

## Troubleshooting Render.com Deployment

If you see only basic HTML without CSS/JS on Render:

1. **Check Build Logs**: Ensure `npm run build` completes without errors in Render's build logs
2. **Verify Start Command**: Should be `npm start` (not `next dev`)
3. **Check Static Assets**: Ensure the `.next/static` directory is being served correctly
4. **Environment Variables**: No special env vars needed for this portfolio
5. **Node Version**: Render uses the version specified in package.json engines (if any) or defaults to a recent LTS

## Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable UI components
- `src/design-system/` - Tailwind design tokens and configuration
- `public/` - Static assets (including resume PDF)
- `vercel.json` - Vercel configuration (version 2, Next.js framework)
- `render.yaml` - Render.com service configuration (created for your convenience)

## Features Implemented
- ✅ Dark/Light mode toggle with localStorage persistence
- ✅ Fully responsive design (mobile-first)
- ✅ Framer Motion animations (respects prefers-reduced-motion)
- ✅ Accessible semantics (proper heading order, ARIA labels, color contrast)
- ✅ SEO metadata via Next.js metadata API
- ✅ Optimized images with next/image
- ✅ Self-hosted Inter variable font via next/font
- ✅ Lucide Icons for lightweight SVG icons
- ✅ All sections: Hero, About, Experience, Education, Projects (5 detailed case studies), Skills, Programs & Affiliations
- ✅ Resume download functionality

## Files Created/Modified During This Session
- Fixed useTheme() server/client errors in multiple page files by adding 'use client' directives
- Fixed SVG stroke-width attributes throughout the codebase
- Created missing design system token files (lineHeights.ts, radii.ts, zIndices.ts)
- Created render.yaml for Render deployment configuration
- Successfully built production version with `npm run build`

The portfolio is production-ready and follows Next.js App Router best practices.