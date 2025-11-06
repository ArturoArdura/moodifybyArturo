import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ThemeProvider } from '../context/ThemeContext';

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
    const [fontsLoaded] = useFonts({
// Reemplaza con los nombres exactos de tus archivos de fuentes
    'Gaegu-Regular': require('../assets/fonts/Gaegu-Regular.ttf'),
    'Gaegu-Bold': require('../assets/fonts/Gaegu-Bold.ttf'),
    'Gaegu-Light': require('../assets/fonts/Gaegu-Light.ttf'),
    // Agrega más variantes si las tienes
  });
useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
