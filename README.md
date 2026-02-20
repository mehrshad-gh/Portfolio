# Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features advanced UI/UX design with smooth animations and a responsive layout.

## Features

- 🎨 **Modern Design**: Beautiful, professional UI with glass morphism effects and gradient accents
- ✨ **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- 📱 **Fully Responsive**: Works seamlessly on all devices
- 🚀 **Performance Optimized**: Built with Next.js for optimal performance
- 🎯 **SEO Friendly**: Optimized for search engines
- 🌙 **Dark Theme**: Elegant dark theme with gradient highlights

## Sections

- **Hero**: Eye-catching introduction with animated role display
- **About**: Personal information and journey
- **Skills**: Technical skills with animated progress bars
- **Experience**: Work experience timeline
- **Projects**: Featured projects showcase
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/sections/Hero.tsx` to update your name and roles
2. **About Section**: Modify `components/sections/About.tsx` with your information
3. **Skills**: Update skills in `components/sections/Skills.tsx`
4. **Experience**: Add your work experience in `components/sections/Experience.tsx`
5. **Projects**: Update projects in `components/sections/Projects.tsx`
6. **Contact**: Update contact information in `components/sections/Contact.tsx`
7. **Social Links**: Update social media links in `components/Footer.tsx`

### Styling

- Colors can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Intersection Observer**: Scroll animations

## Deployment

This portfolio can be easily deployed on:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js

## License

This project is open source and available under the MIT License.
