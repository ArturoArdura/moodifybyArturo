
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Platform, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import "../global.css";

export default function Index() {
  const router = useRouter();
  const Container = Platform.OS === 'ios' ? SafeAreaView : View;

  // Animaciones
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const slideUpAnim = useRef(new Animated.Value(50)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const footerAnim = useRef(new Animated.Value(0)).current;
  const backgroundMoveX = useRef(new Animated.Value(0)).current;
  const backgroundMoveY = useRef(new Animated.Value(0)).current;
  const backgroundRotate = useRef(new Animated.Value(0)).current;
  const backgroundScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Secuencia de animaciones de entrada
    Animated.parallel([
      // Fade in general
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      // Scale del logo
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
      // Slide up del contenido
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: 800,
        delay: 200,
        useNativeDriver: true,
      }),
    ]).start();

    // Animación de rotación continua sutil
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Animación pulsante del botón
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
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

    // Animación del fondo - Movimiento random tipo parallax
    Animated.loop(
      Animated.parallel([
        // Movimiento horizontal más pronunciado
        Animated.sequence([
          Animated.timing(backgroundMoveX, {
            toValue: 50,
            duration: 5000,
            useNativeDriver: true,
          }),
          Animated.timing(backgroundMoveX, {
            toValue: -50,
            duration: 5000,
            useNativeDriver: true,
          }),
        ]),
        // Movimiento vertical más pronunciado
        Animated.sequence([
          Animated.timing(backgroundMoveY, {
            toValue: -40,
            duration: 4000,
            useNativeDriver: true,
          }),
          Animated.timing(backgroundMoveY, {
            toValue: 40,
            duration: 4000,
            useNativeDriver: true,
          }),
        ]),
        // Rotación visible
        Animated.sequence([
          Animated.timing(backgroundRotate, {
            toValue: 1,
            duration: 6000,
            useNativeDriver: true,
          }),
          Animated.timing(backgroundRotate, {
            toValue: 0,
            duration: 6000,
            useNativeDriver: true,
          }),
        ]),
        // Scale más notorio
        Animated.sequence([
          Animated.timing(backgroundScale, {
            toValue: 1.2,
            duration: 5000,
            useNativeDriver: true,
          }),
          Animated.timing(backgroundScale, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, [fadeAnim, scaleAnim, slideUpAnim, rotateAnim, pulseAnim, footerAnim, backgroundMoveX, backgroundMoveY, backgroundRotate, backgroundScale]);

  const handleButtonPress = () => {
    // Animación de rebote al presionar
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(buttonScale, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start(() => {
      router.push('/(tabs)/moodformscreen');
    });
  };

  return (
    <View style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
      {/* Capa de fondo animada principal */}
      <Animated.View
        style={{
          position: 'absolute',
          width: '150%',
          height: '150%',
          left: '-25%',
          top: '-25%',
          transform: [
            { translateX: backgroundMoveX },
            { translateY: backgroundMoveY },
            { scale: backgroundScale },
            {
              rotate: backgroundRotate.interpolate({
                inputRange: [0, 1],
                outputRange: ['-8deg', '8deg'],
              }),
            },
          ],
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#667eea', '#764ba2', '#f093fb']}
          style={{ 
            flex: 1,
          }}
        />
      </Animated.View>

      {/* Segunda capa de gradiente para efecto de profundidad */}
      <Animated.View
        style={{
          position: 'absolute',
          width: '140%',
          height: '140%',
          left: '-20%',
          top: '-20%',
          transform: [
            { 
              translateX: backgroundMoveX.interpolate({
                inputRange: [-50, 50],
                outputRange: [30, -30],
              })
            },
            { 
              translateY: backgroundMoveY.interpolate({
                inputRange: [-40, 40],
                outputRange: [25, -25],
              })
            },
            {
              scale: backgroundScale.interpolate({
                inputRange: [1, 1.2],
                outputRange: [1.1, 1.3],
              })
            },
          ],
        }}
      >
        <LinearGradient
          start={{ x: 0.2, y: 0.2 }}
          end={{ x: 0.8, y: 0.8 }}
          colors={['rgba(139, 92, 246, 0.4)', 'rgba(236, 72, 153, 0.4)', 'rgba(251, 146, 60, 0.4)']}
          style={{ flex: 1 }}
        />
      </Animated.View>

      {/* Tercera capa con círculos de color */}
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transform: [
            { 
              translateX: backgroundMoveX.interpolate({
                inputRange: [-50, 50],
                outputRange: [-20, 20],
              })
            },
            { 
              translateY: backgroundMoveY.interpolate({
                inputRange: [-40, 40],
                outputRange: [-15, 15],
              })
            },
          ],
        }}
      >
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
          <Animated.View 
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              position: 'absolute',
              top: '10%',
              left: '10%',
              transform: [{
                scale: backgroundScale,
              }],
            }}
          />
          <Animated.View 
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              position: 'absolute',
              bottom: '20%',
              right: '15%',
              transform: [{
                scale: backgroundScale.interpolate({
                  inputRange: [1, 1.2],
                  outputRange: [1, 0.9],
                }),
              }],
            }}
          />
        </View>
      </Animated.View>

      {/* Capa de overlay sutil */}
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
        }}
      />

      {/* Contenido principal */}
      <Container className="flex-1" style={Platform.OS === 'android' ? { paddingTop: 40 } : {}}>
        
        {/* Logo/Título principal con animación */}
        <Animated.View 
          className="flex-1 items-center justify-center"
          style={{
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              {
                rotate: rotateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '2deg'],
                }),
              },
            ],
          }}
        >
          <Text 
            className="text-8xl font-extralight text-white mb-4" 
            style={{ 
              textShadowColor: 'rgba(0,0,0,0.5)', 
              textShadowOffset: {width: 4, height: 4}, 
              textShadowRadius: 15 
            }}
          >
            Moodify
          </Text>
          <Animated.Text 
            className="text-xl text-white/90 font-light tracking-widest"
            style={{
              textShadowColor: 'rgba(0,0,0,0.3)', 
              textShadowOffset: {width: 2, height: 2}, 
              textShadowRadius: 8,
              transform: [{ scale: pulseAnim }],
            }}
          >
            Tu diario emocional
          </Animated.Text>
        </Animated.View>

        {/* Sección inferior con botón y mensaje */}
        <Animated.View 
          className="items-center justify-center mb-10 px-6"
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideUpAnim }],
          }}
        >
          {/* Mensaje de bienvenida */}
          <Animated.Text 
            className="text-3xl font-bold text-white mb-8"
            style={{
              textShadowColor: 'rgba(0,0,0,0.2)', 
              textShadowOffset: {width: 1, height: 1}, 
              textShadowRadius: 3,
              transform: [{
                scale: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              }],
            }}
          >
            Bienvenido, Usuario
          </Animated.Text>

          {/* Botón principal animado */}
          
            <TouchableOpacity 
              className="px-10 py-6 bg-yellow-500 rounded-full bg-gradient-to-br  "
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 8 },
                shadowOpacity: 0.3,
                shadowRadius: 16,
                elevation: 12,
              }}
              onPress={handleButtonPress}
              activeOpacity={0.9}
            >
              <Text className="text-white font-bold text-xl text-center">
                📝 Registrar mi estado
              </Text>
            </TouchableOpacity>


          {/* Último estado de ánimo */}
          <Animated.View
            style={{
              opacity: footerAnim,
              transform: [{
                translateY: footerAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0],
                }),
              }],
            }}
            className="mt-10 bg-white/20 backdrop-blur-lg rounded-3xl px-8 py-4 border-2 border-white/30"
          >
            <Text className="font-semibold text-lg text-white/70 text-center mb-2">
              Tu último estado de ánimo:
            </Text>
            <Animated.Text 
              className="font-bold text-3xl text-white text-center"
              style={{
                transform: [{
                  scale: pulseAnim.interpolate({
                    inputRange: [1, 1.05],
                    outputRange: [1, 1.1],
                  }),
                }],
              }}
            >
              😊 Feliz
            </Animated.Text>
          </Animated.View>
        </Animated.View>
      </Container>
    </View>
  );
}