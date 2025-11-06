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
          headerShown: true,
          headerStyle: {
            backgroundColor: '#667eea',
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
            backgroundColor: '#667eea',
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
    <StatusBar style="dark" />
    </>
  )
}
