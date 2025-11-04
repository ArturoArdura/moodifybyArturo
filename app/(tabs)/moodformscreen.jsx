import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Platform, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import "../../global.css";

export default function Moodformscreen() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [lastMood, setLastMood] = useState('Ninguno');
  
  // Animaciones
  const headerAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const footerAnim = useRef(new Animated.Value(0)).current;
  const footerScale = useRef(new Animated.Value(1)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animación del header
    Animated.timing(headerAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Animación pulsante continua del subtítulo
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Animación del footer
    Animated.timing(footerAnim, {
      toValue: 1,
      duration: 800,
      delay: 600,
      useNativeDriver: true,
    }).start();

    // Efecto de brillo en el footer
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [headerAnim, pulseAnim, footerAnim, glowAnim]);

  // Animar cuando cambia el lastMood
  useEffect(() => {
    if (lastMood !== 'Ninguno') {
      Animated.sequence([
        Animated.spring(footerScale, {
          toValue: 1.15,
          friction: 3,
          useNativeDriver: true,
        }),
        Animated.spring(footerScale, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [lastMood, footerScale]);

  const moodsje = [
    { mood: "Feliz", emoji: "😊", color: "#FFD700", gradient: ["#FFD700", "#FFA500"] },
    { mood: "Triste", emoji: "😢", color: "#4A90E2", gradient: ["#4A90E2", "#357ABD"] },
    { mood: "Enojado", emoji: "😠", color: "#E74C3C", gradient: ["#E74C3C", "#C0392B"] },
    { mood: "Ansioso", emoji: "😰", color: "#9B59B6", gradient: ["#9B59B6", "#8E44AD"] },
    { mood: "Emocionado", emoji: "🤩", color: "#FF6B9D", gradient: ["#FF6B9D", "#C73866"] },
    { mood: "Cansado", emoji: "😴", color: "#95A5A6", gradient: ["#95A5A6", "#7F8C8D"] }
  ];

  const handleMoodSelect = (item) => {
    setSelectedMood(item.mood);
    setLastMood(item.mood);
    setTimeout(() => setSelectedMood(null), 300);
  };

  const Container = Platform.OS === 'ios' ? SafeAreaView : View;

  const MoodItem = ({ item, index }) => {
    const slideAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const bounceAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
      // Animación de entrada
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 600,
          delay: index * 100,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          delay: index * 100,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();

      // Animación sutil de flotación
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 3000 + (index * 200),
            useNativeDriver: true,
          }),
          Animated.timing(rotateAnim, {
            toValue: 0,
            duration: 3000 + (index * 200),
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, [index, scaleAnim, slideAnim, rotateAnim]);

    const handlePress = () => {
      // Animación de rebote al presionar
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.spring(bounceAnim, {
          toValue: 1,
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        }),
      ]).start();
      
      handleMoodSelect(item);
    };

    return (
      <Animated.View
        style={{
          opacity: slideAnim,
          transform: [
            {
              translateX: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 0],
              }),
            },
            { scale: Animated.multiply(scaleAnim, bounceAnim) },
            {
              translateY: rotateAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, -5, 0],
              }),
            },
          ],
        }}
      >
        <TouchableOpacity 
          onPress={handlePress}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={item.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{
              padding: 20,
              marginVertical: 8,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 8,
            }}
          >
            <Text className="text-5xl mr-4">{item.emoji}</Text>
            <Text className="text-3xl font-bold text-white flex-1">{item.mood}</Text>
            {selectedMood === item.mood && (
              <Animated.View
                style={{
                  transform: [{
                    scale: slideAnim,
                  }],
                }}
              >
                <Text className="text-3xl text-white">✓</Text>
              </Animated.View>
            )}
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 1}} 
      colors={['#667eea', '#764ba2', '#f093fb']} 
      style={{flex: 1, width: '100%'}}
    >
      <Container className="flex-1" style={Platform.OS === 'android' ? { paddingTop: 40 } : {}}>
        {/* Header con animación */}
        <Animated.View
          style={{
            opacity: headerAnim,
            transform: [{
              translateY: headerAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-50, 0],
              }),
            }],
          }}
          className="items-center mt-8 mb-4"
        >
          <Animated.Text 
            className="text-5xl font-bold text-white mb-2" 
            style={{ 
              textShadowColor: 'rgba(0,0,0,0.3)', 
              textShadowOffset: {width: 2, height: 2}, 
              textShadowRadius: 4,
              transform: [{
                scale: headerAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              }],
            }}
          >
            ¿Cómo te sientes?
          </Animated.Text>
          <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
            <Text className="text-xl text-white/90 font-medium">Selecciona tu mood</Text>
          </Animated.View>
        </Animated.View>

        {/* Lista de moods con animaciones */}
        <FlatList
          data={moodsje}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
          renderItem={({ item, index }) => <MoodItem item={item} index={index} />}
          keyExtractor={(item) => item.mood}
          showsVerticalScrollIndicator={false}
        />

        {/* Footer con último mood */}
        <View
          
          className="items-center pb-6 px-4"
        >
          <View 
            className="bg-white/20 backdrop-blur-lg rounded-3xl px-8 py-4 border-2 border-white/30"
           
          >
            <Text className="text-lg text-white/80 text-center font-medium">
              Último estado de ánimo
            </Text>
            <Text 
              className="text-3xl font-bold text-white text-center mt-1"
                         >
              {lastMood}
            </Text>
            
            
          </View>
          
        </View>
      </Container>
    </LinearGradient>
  );
}