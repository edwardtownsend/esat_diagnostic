# ESAT Diagnostic Test

A modern, React-based diagnostic test application for ESAT (Engineering and Science Admissions Test) preparation.

## Features

- ✨ Modern React UI with smooth animations
- ⏱️ 80-second timer per question with visual progress indicators
- 🎨 Beautiful gradient design with Tailwind CSS
- 📱 Responsive design for all devices
- 🔊 Audio warning when 10 seconds remain
- 📊 Progress tracking throughout the test

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Project Structure

```
esat_diagnostic/
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx    # Welcome screen
│   │   ├── QuestionScreen.jsx # Question display with timer
│   │   └── EndScreen.jsx      # Completion screen
│   ├── data/
│   │   └── questions.js       # Question data
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── questions/                # Question images
├── index.html               # HTML entry point
├── package.json             # Dependencies
└── vite.config.js          # Vite configuration
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## License

This project is for educational purposes.

