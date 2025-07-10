# 🚀 CRED Garage Dashboard

A modern, responsive web dashboard inspired by CRED Garage, built with Next.js, featuring gamified user experience, animated charts, and smooth micro-interactions.

## ✨ Features

### 🎯 Core Functionality

- **User Profile Management** - Avatar, level system, XP tracking
- **Gamified Progress System** - Animated progress bars and level indicators
- **Benefits Management** - Claim rewards with real-time status updates
- **Reward Analytics** - Visual progress tracking with animated charts
- **Dark/Light Mode** - Persistent theme switching with smooth transitions
- **Responsive Design** - Mobile-first approach with adaptive layouts

### 🎨 Visual Excellence

- **Framer Motion Animations** - Smooth page transitions and micro-interactions
- **Custom Radial Progress Charts** - Animated SVG-based progress visualization
- **Loading Skeletons** - Sophisticated loading states with shimmer effects
- **Gradient Backgrounds** - Modern glass-morphism design elements
- **Interactive Hover States** - Enhanced user feedback throughout

### 🛠️ Technical Features

- **Mock API Integration** - JSON-based data persistence
- **State Management** - Zustand for global state with persistence
- **Error Boundaries** - Graceful error handling with retry functionality
- **TypeScript** - Full type safety and developer experience
- **Testing Setup** - Jest and React Testing Library configuration

## 🧰 Tech Stack

| Category             | Technology                   |
| -------------------- | ---------------------------- |
| **Framework**        | Next.js 15 (App Router)      |
| **Styling**          | TailwindCSS + ShadCN UI      |
| **Animations**       | Framer Motion                |
| **State Management** | Zustand                      |
| **Charts**           | Recharts                     |
| **Icons**            | Lucide React                 |
| **Theme**            | next-themes                  |
| **Testing**          | Jest + React Testing Library |
| **Language**         | TypeScript                   |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/mislaj/reward-dashboard.git
   cd cred-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install

   # or

   yarn install

   # or

   pnpm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev

   # or

   yarn dev

   # or

   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
cred-dashboard/
├── app/ # Next.js App Router
│ ├── api/ # API routes
│ │ └── dashboard/ # Dashboard API endpoints
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ └── page.tsx # Main dashboard page
├── components/ # React components
│ ├── ui/ # ShadCN UI components
│ ├── benefits-section.tsx
│ ├── custom-avatar.tsx
│ ├── enhanced-radial-progress.tsx
│ ├── enhanced-theme-toggle.tsx
│ ├── error-boundary.tsx
│ ├── loading-skeleton.tsx
│ ├── reward-progress.tsx
│ ├── theme-provider.tsx
│ └── user-profile.tsx
├── lib/ # Utilities and configurations
│ ├── store.ts # Zustand store
│ └── utils.ts # Utility functions
├── **tests**/ # Test files
├── db.json # Mock database
├── package.json
├── tailwind.config.ts
└── README.md
\`\`\`

## 🎮 Usage

### Dashboard Features

#### **User Profile**

- View user avatar, name, and current level
- Track XP progress with animated progress bars
- See experience points needed for next level

#### **Reward Progress**

- Visual representation of total points earned
- Animated radial progress chart showing tier progress
- Monthly trend analysis with bar charts

#### **Benefits Section**

- Browse available benefits and rewards
- Claim benefits with one-click action
- Track claimed and locked benefits

#### **Theme Switching**

- Toggle between light and dark modes
- Persistent theme preference storage
- Smooth transition animations

### API Endpoints

| Method  | Endpoint         | Description              |
| ------- | ---------------- | ------------------------ |
| `GET`   | `/api/dashboard` | Fetch all dashboard data |
| `PATCH` | `/api/dashboard` | Update benefit status    |

### Mock Data Structure

\`\`\`json
{
"user": {
"id": "1",
"name": "Alex Johnson",
"title": "Premium Member",
"level": 7,
"currentXP": 2840,
"nextLevelXP": 3500,
"totalPoints": 8750
},
"benefits": [...],
"rewardStats": {...}
}
\`\`\`

## 🧪 Testing

Run the test suite:

\`\`\`bash

# Run all tests

npm run test

# Run tests in watch mode

npm run test:watch

# Run tests with coverage

npm run test -- --coverage
\`\`\`

## 🎨 Customization

### Theme Configuration

The dashboard uses a custom color palette defined in `tailwind.config.ts`:

\`\`\`typescript
colors: {
primary: "hsl(var(--primary))",
secondary: "hsl(var(--secondary))",
// ... more colors
}
\`\`\`

### Animation Settings

Framer Motion animations can be customized in individual components:

\`\`\`typescript
const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: { staggerChildren: 0.1 }
}
}
\`\`\`

### Adding New Benefits

1. Update `db.json` with new benefit data
2. Add corresponding icon to the icon mapping in `lib/store.ts`
3. The UI will automatically reflect the changes

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:

- Adaptive grid layouts
- Mobile-optimized navigation
- Touch-friendly interactions
- Optimized typography scaling

## 🔧 Development

### Available Scripts

\`\`\`bash
npm run dev # Start development server
npm run build # Build for production
npm run start # Start production server
npm run lint # Run ESLint
npm run test # Run tests
npm run test:watch # Run tests in watch mode
\`\`\`

### Environment Variables

Create a `.env.local` file for local development:

\`\`\`env

# Add any environment variables here

NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **Railway**: Connect your GitHub repository
- **Docker**: Use the included Dockerfile (if added)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new components
- Use conventional commit messages
- Ensure responsive design compatibility
- Add proper accessibility attributes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **CRED** - Design inspiration
- **ShadCN** - UI component library
- **Framer Motion** - Animation library
- **Recharts** - Chart library
- **Lucide** - Icon library

---

<div align="center">
  <p>Made by <a href="https://github.com/mislaj">Mislaj</a></p>
</div>
