# 🗡️ Samurai Portfolio

A stunning, animated portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a unique samurai theme with interactive elements and smooth animations.

![Samurai Portfolio](https://img.shields.io/badge/Next.js-14.2.16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-black?style=for-the-badge&logo=framer)

## ✨ Features

### 🎨 **Visual Design**
- **Samurai-themed aesthetics** with red/orange color palette
- **Animated cherry blossoms** floating across the screen
- **Dynamic background effects** with gradient animations
- **Responsive design** that works on all devices
- **Dark/Light theme toggle** with smooth transitions

### 🎭 **Interactive Elements**
- **Animated hero section** with parallax scrolling effects
- **Interactive samurai chatbot** for visitor engagement
- **Audio toggle** with sound effects for interactions
- **Smooth scroll navigation** with active section highlighting
- **Hover animations** throughout the interface

### 📱 **Sections**
- **Hero Section** - Animated introduction with katana effects
- **About Section** - Personal story with samurai philosophy
- **Timeline Section** - Professional journey with animated cards
- **Projects Section** - Portfolio showcase with interactive cards
- **Skills Section** - Technical skills with animated progress bars
- **Trophy Room** - Achievements and certifications display
- **Testimonials Section** - Client feedback with carousel
- **Blog Section** - Latest articles and thoughts
- **Contact Section** - Contact form with animated particles

### 🛠️ **Technical Features**
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Radix UI** components for accessibility
- **Responsive design** with mobile-first approach
- **SEO optimized** with proper meta tags
- **Performance optimized** with Next.js Image component

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Assil10/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
samurai-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── timeline-section.tsx
│   │   └── ...
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── audio-provider.tsx
│   ├── audio-toggle.tsx
│   ├── cherry-blossoms.tsx
│   ├── navigation.tsx
│   ├── samurai-chatbot.tsx
│   └── theme-toggle.tsx
├── public/               # Static assets
│   ├── placeholder.jpg
│   └── ...
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── styles/               # Additional styles
```

## 🎨 Customization

### Adding Your Content

1. **Personal Information**
   - Update contact details in `app/page.tsx` (ContactSection)
   - Modify hero section text in `components/sections/hero-section.tsx`
   - Update about section in `app/page.tsx` (AboutSection)

2. **Projects**
   - Add your projects in `app/page.tsx` (ProjectsSection)
   - Include project screenshots in `public/` folder
   - Update project links and descriptions

3. **Skills**
   - Modify skills list in `app/page.tsx` (SkillsSection)
   - Add skill icons to `public/` folder
   - Update skill levels and descriptions

4. **Images**
   - Add your profile photo to `public/` folder
   - Update image paths in components
   - Optimize images for web performance

### Styling

The project uses Tailwind CSS with custom samurai theme colors:
- **Primary**: Red (`red-500`, `red-600`)
- **Secondary**: Orange (`orange-500`, `orange-600`)
- **Accent**: Yellow (`yellow-400`, `yellow-500`)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d out"`
4. Build and deploy: `npm run build && npm run deploy`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** for the amazing React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Radix UI** for accessible components
- **Lucide React** for beautiful icons

## 📞 Contact

- **Email**: assil.khaldi@example.com
- **LinkedIn**: [Assil Khaldi](https://linkedin.com/in/assil-khaldi)
- **GitHub**: [@Assil10](https://github.com/Assil10)

---

⭐ **Star this repository if you found it helpful!**

*"The way of the samurai is found in death. When it comes to either/or, there is only the quick choice of death. It is not particularly difficult. Be determined and advance."* - Hagakure 