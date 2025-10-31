
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import "../global.css";

export default function Index() {
  const router = useRouter();

  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#FFFFFF', '#87CEEB', '#FFA500', '#8B00FF']} style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
    <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-center">
          <Text className="text-7xl font-extralight">Moodify</Text>
        </View>
        <View className="items-center justify-center mt-10 mb-4 flex-2">
          <Text className="text-3xl pb-6">Bienvenido, Usuario</Text>
        <TouchableOpacity className="items-center justify-center mt-4 px-7 py-10 mb-10 bg-yellow-300 rounded-full border-4 border-white"
        onPress={() => router.push('/(tabs)/moodformscreen')}
        >
          <Text className="text-black font-bold text-lg">Registrar mi estado</Text>
      </TouchableOpacity>
      <Text className="font-bold text-2xl my-10">
        Tu ultimo estado de animo fue: Feliz
      </Text>
        </View>
        
    </SafeAreaView>
   </LinearGradient>

  );
}
