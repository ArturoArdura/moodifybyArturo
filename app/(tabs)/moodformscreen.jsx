import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import "../../global.css";


export default function Moodformscreen() {
  const moodsje = [
    { mood: "Feliz", emoji: "😊" },
    { mood: "Triste", emoji: "😢" },
    { mood: "Enojado", emoji: "😠" },
    { mood: "Ansioso", emoji: "😰" },
    { mood: "Emocionado", emoji: "🤩" },
    { mood: "Cansado", emoji: "😴" }
  ];

  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#FFFFFF', '#87CEEB', '#FFA500', '#8B00FF']} style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <SafeAreaView className="flex-1 items-center justify-center pt-20">
        <Text className="text-4xl font-bold mb-5">Que pasó hoy?</Text>
        <Text className="text-lg font-semibold">Selecciona un mood</Text>
        <FlatList
          data={moodsje}
          renderItem={({ item }) => (
            <TouchableOpacity className="p-4 m-2 bg-orange-200 rounded-2xl border-2 border-white">
              <Text className="text-2xl font-bold">{item.emoji} {item.mood}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.mood}
        />
        <Text className="mb-14 text-3xl font-semibold">Ultimo estado de ánimo: estado</Text>


      </SafeAreaView>
    </LinearGradient>
  )
}