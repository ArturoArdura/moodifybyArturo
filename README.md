# Moodify - Emotional Diary with Advanced Animations 

<div align="center">

A modern React Native application showcasing advanced animation techniques, theming systems, and Expo Router file-based navigation. Built as a portfolio piece to demonstrate expertise in mobile UI/UX development and smooth, performant animations.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

<br/>

<img src="./assets/gif/demo.gif" alt="Moodify App Demo" width="300" />

<p><i>Fluid animations, dynamic theming, and modern UI/UX in action</i></p>

</div>

---

## 🎯 Project Overview

**Moodify** is an emotional diary app designed to showcase modern React Native development practices, featuring:
- **Complex Animation Systems** using React Native's Animated API
- **Dynamic Light/Dark Theme** with automatic system detection
- **Expo Router** for file-based navigation
- **Custom UI Components** with gradient overlays and glassmorphism effects
- **Performance Optimization** techniques including memoization and native driver animations

## ✨ Key Features & Technical Highlights

### 🎨 Advanced Animation System
- **Entrance Animations**: Staggered slide-in and scale animations with delays
- **Continuous Floating Effects**: Subtle parallax movements on mood cards
- **Interactive Feedback**: Smooth spring animations on user interactions
- **Scroll Indicators**: Dynamic arrows that appear/disappear based on scroll position
- **Background Parallax**: Multi-layered animated gradients with independent movement speeds
- **Footer Animations**: Elastic bounce effects on mood selection

### 🌓 Dynamic Theming
- **Automatic Theme Detection**: Respects system-wide light/dark mode preferences
- **Theme Provider**: Context-based architecture for global theme management
- **Color System**: Carefully crafted color palettes for both themes
  - **Light Mode**: Vibrant purple/pink gradients
  - **Dark Mode**: Deep blue/purple gradients with accent highlights
- **Adaptive Components**: All UI elements automatically adjust to theme changes

### 📊 Data Visualization
- **Calendar Integration**: `react-native-calendars` with custom theming
- **Mood Trends Chart**: Bezier curve line charts showing emotional patterns
- **Interactive Elements**: Tap-to-select date functionality

### 🏗️ Architecture & Best Practices
- **File-Based Routing**: Expo Router for intuitive navigation structure
- **React.memo Optimization**: Prevents unnecessary re-renders in list items
- **useCallback Hooks**: Optimized callback functions to maintain referential equality
- **Native Driver**: Hardware-accelerated animations for 60fps performance
- **Platform-Specific UI**: iOS SafeAreaView vs Android padding adjustments
- **Custom Fonts**: Gaegu typeface for headers

### 🎭 Screens Showcase

#### 1. **Welcome Screen** (`index.jsx`)
- Multi-layer animated background with parallax effect
- Rotating and scaling title animations
- Pulsing call-to-action button
- Footer card with glassmorphism effect

#### 2. **Mood Selection Screen** (`moodformscreen.jsx`)
- 6 animated mood cards with unique gradients
- Floating animation on each card
- Smooth scroll with custom indicators
- Animated footer that responds to selections
- Memoized components for optimal performance

#### 3. **History Screen** (`historyscreen.jsx`)
- Interactive calendar with mood markers
- Animated line chart showing weekly trends
- Staggered entrance animations
- Custom legends and labels

## 🚀 Getting Started

### Prerequisites
```bash
node >= 18.0.0
npm or yarn
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ArturoArdura/moodifybyArturo.git
   cd moodifybyArturo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on your device**
   - Scan the QR code with Expo Go (Android/iOS)
   - Press `a` for Android Emulator
   - Press `i` for iOS Simulator

## 🛠️ Tech Stack

### Core Technologies
- **React Native** - Cross-platform mobile framework
- **Expo SDK 54** - Development platform and tools
- **Expo Router** - File-based routing system

### UI & Styling
- **NativeWind** - Tailwind CSS for React Native
- **expo-linear-gradient** - Gradient backgrounds
- **Custom Animations** - React Native Animated API

### Data Visualization
- **react-native-calendars** - Calendar component
- **react-native-chart-kit** - Charts and graphs

### State & Theme Management
- **React Context API** - Global state and theme management
- **useColorScheme Hook** - System theme detection

## 📂 Project Structure

```
moodifybyArturo/
├── app/
│   ├── (tabs)/              # Tab navigation screens
│   │   ├── _layout.jsx      # Tab bar configuration
│   │   ├── moodformscreen.jsx   # Mood selection
│   │   └── historyscreen.jsx    # Calendar & charts
│   ├── _layout.jsx          # Root layout & providers
│   └── index.jsx            # Welcome screen
├── assets/
│   ├── fonts/               # Custom fonts (Gaegu)
│   └── images/              # App icons & splash
├── constants/
│   └── Colors.js            # Theme color definitions
├── context/
│   └── ThemeContext.js      # Theme provider
└── global.css               # NativeWind styles
```

## 🎨 Animation Techniques Demonstrated

1. **Staggered Animations**: Entrance delays based on item index
2. **Spring Physics**: Natural bounce effects with friction/tension control
3. **Interpolation**: Smooth value mapping for complex transforms
4. **Looping Animations**: Continuous floating and pulsing effects
5. **Gesture Handling**: Touch feedback with scale transforms
6. **Scroll-Based Animations**: Dynamic UI based on scroll position
7. **Sequence Animations**: Multi-step animation chains
8. **Parallel Animations**: Simultaneous property changes

## 🎯 Performance Optimizations

- ✅ **Native Driver**: All animations use `useNativeDriver: true`
- ✅ **React.memo**: List items memoized to prevent re-renders
- ✅ **useCallback**: Stable function references
- ✅ **Refs for Flags**: Prevent animation reruns without causing re-renders
- ✅ **FlatList**: Virtualized scrolling for large lists
- ✅ **Animated.event**: Direct scroll event to animated value

## 🌐 Platform Support

- ✅ **iOS** (12.0+)
- ✅ **Android** (5.0+)
- ✅ **Expo Go** (Development)
- ❌ **Web** (Not optimized for web platforms)

## 🎓 Learning Resources

This project demonstrates concepts from:
- [React Native Animations](https://reactnative.dev/docs/animated)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [React Native Performance](https://reactnative.dev/docs/performance)
- [Context API Patterns](https://react.dev/reference/react/useContext)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Arturo Ardura**
- GitHub: [@ArturoArdura](https://github.com/ArturoArdura)

## 🙏 Acknowledgments

- Expo team for the amazing development platform
- React Native community for continuous improvements
- All open-source contributors

---

**Note**: This is a portfolio/showcase project demonstrating advanced React Native techniques. It's designed to highlight animation expertise, theming systems, and modern mobile development patterns.

⭐ **Star this repo** if you find it helpful or inspiring!
