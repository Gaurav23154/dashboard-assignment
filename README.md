# Dashboard UI

A modern, responsive dashboard interface built with React and Vite, featuring a beautiful and intuitive user experience.

## Features

- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 📊 Interactive data visualization with Recharts
- 🎯 Drag and drop functionality with dnd-kit
- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- 🔄 Real-time data updates
- 🎭 Rich component library with Radix UI primitives
- 📝 Form handling and validation with Zod
- 🔔 Toast notifications with Sonner

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Charts**: Recharts
- **Drag & Drop**: dnd-kit
- **Form Validation**: Zod
- **Routing**: React Router DOM
- **Icons**: Tabler Icons, Lucide React
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd dashboard-ui
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/          # Application configuration and setup
├── assets/       # Static assets (images, fonts, etc.)
├── components/   # Reusable UI components
├── data/         # Mock data and data utilities
├── hooks/        # Custom React hooks
├── lib/          # Utility functions and configurations
├── pages/        # Page components and routes
└── App.jsx       # Root component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
