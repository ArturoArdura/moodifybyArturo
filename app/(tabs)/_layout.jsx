import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
    <Tabs>
      <Tabs.Screen
        name="moodformscreen"
        options={{
          headerShown: false,
          title: "Registrar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="historyscreen"
        options={{
          headerShown: false,
          title: "Historial",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
    <StatusBar style="dark" />
    </>
  )
}
