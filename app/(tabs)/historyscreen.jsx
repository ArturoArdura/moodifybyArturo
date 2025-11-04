import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';


export default function HistoryScreen() {
  return (
  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#FFFFFF', '#87CEEB', '#FFA500', '#8B00FF']} style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text>Calendario de moods</Text>
      <Text>Grafica Semanal</Text>
      <TouchableOpacity className="p-4 m-2 bg-green-200 rounded-lg">
        <Text className="text-lg">Limpiar mis datos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  </LinearGradient>
    
  )
}