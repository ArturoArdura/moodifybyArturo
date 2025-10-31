import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

export default function HistoryScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text>Calendario de moods</Text>
      <Text>Grafica Semanal</Text>
      <TouchableOpacity className="p-4 m-2 bg-green-200 rounded-lg">
        <Text className="text-lg">Limpiar mis datos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}