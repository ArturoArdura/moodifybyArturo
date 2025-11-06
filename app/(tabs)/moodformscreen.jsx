import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState } from 'react';
import { Animated, Platform, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useTheme } from '../../context/ThemeContext';
import "../../global.css";

export default function Moodformscreen() {
  const { colors } = useTheme();
  const [selectedMood, setSelectedMood] = useState(null);
  const [lastMood, setLastMood] = useState('Ninguno');
  
  // Animaciones
  const headerAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const footerAnim = useRef(new Animated.Value(0)).current;
  const footerScale = useRef(new Animated.Value(1)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;
  const scrollIndicatorTopAnim = useRef(new Animated.Value(0)).current;
  const scrollIndicatorBottomAnim = useRef(new Animated.Value(1)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const contentHeight = useRef(0);
  const layoutHeight = useRef(0);

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

    // Listener para actualizar indicadores de scroll basado en scrollY
    const listenerId = scrollY.addListener(({ value }) => {
      const scrollPosition = value;
      const maxScroll = contentHeight.current - layoutHeight.current;

      // Actualizar indicadores con interpolación suave
      if (scrollPosition > 20 && scrollIndicatorTopAnim._value !== 1) {
        Animated.timing(scrollIndicatorTopAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else if (scrollPosition <= 20 && scrollIndicatorTopAnim._value !== 0) {
        Animated.timing(scrollIndicatorTopAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }

      if (scrollPosition < maxScroll - 20 && scrollIndicatorBottomAnim._value !== 1) {
        Animated.timing(scrollIndicatorBottomAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else if (scrollPosition >= maxScroll - 20 && scrollIndicatorBottomAnim._value !== 0) {
        Animated.timing(scrollIndicatorBottomAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    });

    return () => {
      scrollY.removeListener(listenerId);
    };
  }, [headerAnim, pulseAnim, footerAnim, glowAnim, scrollY, scrollIndicatorTopAnim, scrollIndicatorBottomAnim]);

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

  const handleContentSizeChange = (width, height) => {
    contentHeight.current = height;
  };

  const handleLayout = (event) => {
    layoutHeight.current = event.nativeEvent.layout.height;
  };

  const moodsje = [
    { mood: "Feliz", emoji: "😊", color: Colors.moods.feliz.color, gradient: Colors.moods.feliz.gradient },
    { mood: "Triste", emoji: "😢", color: Colors.moods.triste.color, gradient: Colors.moods.triste.gradient },
    { mood: "Enojado", emoji: "😠", color: Colors.moods.enojado.color, gradient: Colors.moods.enojado.gradient },
    { mood: "Ansioso", emoji: "😰", color: Colors.moods.ansioso.color, gradient: Colors.moods.ansioso.gradient },
    { mood: "Emocionado", emoji: "🤩", color: Colors.moods.emocionado.color, gradient: Colors.moods.emocionado.gradient },
    { mood: "Cansado", emoji: "😴", color: Colors.moods.cansado.color, gradient: Colors.moods.cansado.gradient }
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
              shadowColor: colors.shadowColor,
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
      colors={colors.primaryGradient} 
      style={{flex: 1, width: '100%'}}
    >
      <Container className="flex-1" style={Platform.OS === 'android' ? { paddingTop: 10 } : {}}>
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
          className="items-center mt- mb-4"
        >
          <Animated.Text 
            className="text-4xl font-bold mb-2" 
            style={{ 
              color: colors.text,
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
          <View >
            <Text className="text-xl font-medium" style={{ color: colors.textSecondary }}>Selecciona tu mood</Text>
          </View>
        </Animated.View>

        {/* Lista de moods con animaciones */}
        <View style={{ flex: 1, position: 'relative' }}>
          {/* Indicador de scroll superior */}
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 40,
              zIndex: 10,
              opacity: scrollIndicatorTopAnim,
              pointerEvents: 'none',
            }}
          >
            <LinearGradient
              colors={colors.scrollIndicatorGradientTop}
              style={{ flex: 1, alignItems: 'center', paddingTop: 5 }}
            >
              <Animated.View
                style={{
                  transform: [{
                    translateY: scrollIndicatorTopAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-10, 0],
                    }),
                  }],
                }}
              >
                <Text style={{ fontSize: 24, color: colors.scrollIndicatorIcon }}>▲</Text>
              </Animated.View>
            </LinearGradient>
          </Animated.View>

          <Animated.FlatList
            data={moodsje}
            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
            renderItem={({ item, index }) => <MoodItem item={item} index={index} />}
            keyExtractor={(item) => item.mood}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            onContentSizeChange={handleContentSizeChange}
            onLayout={handleLayout}
            scrollEventThrottle={16}
          />

          {/* Indicador de scroll inferior */}
          <Animated.View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 40,
              zIndex: 10,
              opacity: scrollIndicatorBottomAnim,
              pointerEvents: 'none',
            }}
          >
            <LinearGradient
              colors={colors.scrollIndicatorGradientBottom}
              style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 5 }}
            >
              <Animated.View
                style={{
                  transform: [
                    {
                      translateY: scrollIndicatorBottomAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [10, 0],
                      }),
                    },
                    {
                      scale: pulseAnim.interpolate({
                        inputRange: [1, 1.1],
                        outputRange: [1, 1.2],
                      }),
                    },
                  ],
                }}
              >
                <Text style={{ fontSize: 24, color: colors.scrollIndicatorIcon }}>▼</Text>
              </Animated.View>
            </LinearGradient>
          </Animated.View>
        </View>

        {/* Footer con último mood */}
        <View
          
          className="items-center pb-6 px-4 mt-4"
        >
          <View 
            className="rounded-3xl px-8 py-4 border-2"
            style={{
              backgroundColor: colors.cardBackground,
              borderColor: colors.cardBorder,
            }}
          >
            <Text className="text-lg text-center font-medium" style={{ color: colors.textTertiary }}>
              Último estado de ánimo
            </Text>
            <Text 
              className="text-3xl font-bold text-center mt-1"
              style={{ color: colors.text }}
            >
              {lastMood}
            </Text>
            
            
          </View>
          
        </View>
      </Container>
    </LinearGradient>
  );
}