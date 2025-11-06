export const Colors = {
  light: {
    // Backgrounds
    primaryGradient: ['#667eea', '#764ba2', '#f093fb'],
    cardBackground: 'rgba(255, 255, 255, 0.2)',
    cardBorder: 'rgba(255, 255, 255, 0.3)',
    
    // Text
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.9)',
    textTertiary: 'rgba(255, 255, 255, 0.8)',
    
    // Scroll indicators
    scrollIndicatorGradientTop: ['rgba(0,0,0,0.3)', 'transparent'],
    scrollIndicatorGradientBottom: ['transparent', 'rgba(0,0,0,0.3)'],
    scrollIndicatorIcon: 'white',
    
    // Shadows
    shadowColor: '#000',
  },
  
  dark: {
    // Backgrounds - tema oscuro elegante con morados/azules profundos
    primaryGradient: ['#1a1a2e', '#16213e', '#0f3460'],
    cardBackground: 'rgba(30, 30, 46, 0.8)',
    cardBorder: 'rgba(147, 51, 234, 0.4)',
    
    // Text
    text: '#e2e8f0',
    textSecondary: 'rgba(226, 232, 240, 0.9)',
    textTertiary: 'rgba(226, 232, 240, 0.7)',
    
    // Scroll indicators
    scrollIndicatorGradientTop: ['rgba(147, 51, 234, 0.3)', 'transparent'],
    scrollIndicatorGradientBottom: ['transparent', 'rgba(147, 51, 234, 0.3)'],
    scrollIndicatorIcon: '#a78bfa',
    
    // Shadows
    shadowColor: '#9333ea',
  },
  
  // Mood colors (iguales en ambos temas)
  moods: {
    feliz: {
      gradient: ["#FFD700", "#FFA500"],
      color: "#FFD700",
    },
    triste: {
      gradient: ["#4A90E2", "#357ABD"],
      color: "#4A90E2",
    },
    enojado: {
      gradient: ["#E74C3C", "#C0392B"],
      color: "#E74C3C",
    },
    ansioso: {
      gradient: ["#9B59B6", "#8E44AD"],
      color: "#9B59B6",
    },
    emocionado: {
      gradient: ["#FF6B9D", "#C73866"],
      color: "#FF6B9D",
    },
    cansado: {
      gradient: ["#95A5A6", "#7F8C8D"],
      color: "#95A5A6",
    },
  },
};
