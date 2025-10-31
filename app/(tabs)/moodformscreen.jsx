import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';


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
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text>Que pasó hoy?</Text>
      <Text>Selecciona un mood</Text>
      <FlatList
        data={moodsje}
        renderItem={({ item }) => (
          <TouchableOpacity className="p-4 m-2 bg-blue-200 rounded-lg">
            <Text className="text-lg">{item.emoji} {item.mood}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.mood}
      />
    </SafeAreaView>
  )
}