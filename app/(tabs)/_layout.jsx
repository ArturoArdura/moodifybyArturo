import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../context/ThemeContext';

export default function RootLayout() {
  const { theme } = useTheme();
  
  return (
    <>
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#1a1a2e' : '#ffffff',
          borderTopColor: theme === 'dark' ? '#374151' : '#e5e7eb',
        },
        tabBarActiveTintColor: theme === 'dark' ? '#a78bfa' : '#667eea',
        tabBarInactiveTintColor: theme === 'dark' ? '#6b7280' : '#9ca3af',
      }}
    >
      <Tabs.Screen
        name="moodformscreen"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#1a1a2e' : '#667eea',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '300',
            fontSize: 28,
            fontFamily: 'Gaegu-Light',
            color: '#ffffff',
          },
          headerTitle: 'Moodify',
          title: "Registrar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="historyscreen"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#1a1a2e' : '#667eea',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '300',
            fontSize: 28,
            fontFamily: 'Gaegu-Light',
            color: '#ffffff',
          },
          headerTitle: 'Moodify',
          title: "Historial",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
    <StatusBar style="auto" />
    </>
  )
}
