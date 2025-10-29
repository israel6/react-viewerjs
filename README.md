# React ViewerJS

A React component library for image viewing with custom toolbar buttons and enhanced user experience.

## 🚀 Features

- **React-based**: Built with React 18 and modern JavaScript
- **Custom Toolbar**: Personalized button icons and transparent styling
- **Multiple Views**: Both single image and gallery list views
- **Responsive Design**: Works on desktop and mobile devices
- **Easy Integration**: Simple to integrate into any React project

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **JavaScript (ES6+)** - Programming language
- **JSX** - React component syntax
- **CSS3** - Styling and animations
- **React Router** - Navigation
- **Create React App** - Build tooling

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/israel6/react-viewerjs.git

# Navigate to the project directory
cd react-viewerjs

# Install dependencies
npm install

# Start the development server
npm start
```

## 🎯 Usage

### Basic Image Viewer

```jsx
import React from 'react';
import { RViewer, RViewerTrigger } from './src/react-viewerjs';

const App = () => {
  return (
    <RViewer imageUrls={["./imgs/image1.jpg", "./imgs/image2.jpg"]}>
      <RViewerTrigger>
        <button>View Images</button>
      </RViewerTrigger>
    </RViewer>
  );
};

export default App;
```

### Custom Toolbar Configuration

```jsx
const options = {
  toolbar: {
    zoomIn: true,
    zoomOut: true,
    oneToOne: true,
    reset: true,
    prev: true,
    play: true,
    next: true,
    rotateLeft: true,
    rotateRight: true,
    flipHorizontal: true,
    flipVertical: true,
    fullscreen: false,
    close: false
  }
};

<RViewer options={options} imageUrls={imageUrls}>
  <RViewerTrigger>
    <button>Custom Viewer</button>
  </RViewerTrigger>
</RViewer>
```

## 🎨 Custom Styling

The project includes custom CSS files for enhanced button styling:

- `src/viewer-buttons-simple.css` - Clean, transparent button styles
- `src/viewer-buttons-enhanced.css` - Enhanced button styles
- `src/viewer-buttons-ultra.css` - Ultra-aggressive styling

## 📁 Project Structure

```
react-viewerjs/
├── src/
│   ├── components/
│   │   ├── ImageViewerBase.jsx    # Single image viewer
│   │   └── ImageViewerList.jsx   # Gallery list viewer
│   ├── react-viewerjs/
│   │   ├── index.js              # Main component exports
│   │   └── ImageListRender.js    # List rendering logic
│   ├── App.jsx                   # Main application component
│   └── viewer-buttons-*.css      # Custom styling files
├── public/
│   └── imgs/                     # Sample images
├── build/                        # Production build
└── package.json                  # Project configuration
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## 🌟 Recent Improvements

- ✅ Custom toolbar button icons
- ✅ Transparent button styling
- ✅ Enhanced user experience
- ✅ Improved navigation controls
- ✅ Better mobile responsiveness

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using React and modern web technologies**