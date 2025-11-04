import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LineChart } from 'react-native-chart-kit';
import "../../global.css";

export default function HistoryScreen() {
  const [selectedDay, setSelectedDay] = useState(null);
  
  // Animaciones
  const headerAnim = useRef(new Animated.Value(0)).current;
  const calendarAnim = useRef(new Animated.Value(0)).current;
  const chartAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const buttonPulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animación secuencial de todos los elementos
    Animated.stagger(200, [
      Animated.timing(headerAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(calendarAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(chartAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(buttonAnim, {
        toValue: 1,
        tension: 40,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();

    // Animación pulsante del botón
    Animated.loop(
      Animated.sequence([
        Animated.timing(buttonPulse, {
          toValue: 1.02,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(buttonPulse, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Datos de ejemplo para el calendario (fechas con moods)
  const markedDates = {
    '2025-11-01': { selected: true, selectedColor: '#10b981', selectedDotColor: 'white' },
    '2025-11-02': { selected: true, selectedColor: '#fbbf24', selectedDotColor: 'white' },
    '2025-11-04': { selected: true, selectedColor: '#ef4444', selectedDotColor: 'white' },
  }

  // Datos de ejemplo para la gráfica semanal
  const chartData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [{
      data: [3, 4, 2, 5, 3, 4, 5], // Valores del 1-5 representando moods
      color: (opacity = 1) => `rgba(139, 92, 246, ${opacity})`, // púrpura vibrante
      strokeWidth: 3
    }]
  }

  const Container = Platform.OS === 'ios' ? SafeAreaView : View

  return (
    <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 1}} 
      colors={['#667eea', '#764ba2', '#f093fb']} 
      style={{flex: 1, width: '100%'}}
    >
      <Container className="flex-1" style={Platform.OS === 'android' ? { paddingTop: 40 } : {}}>
        <ScrollView 
          className="flex-1 px-5 pt-4"
          showsVerticalScrollIndicator={false}
        >
          {/* Header animado */}
          <Animated.View
            style={{
              opacity: headerAnim,
              transform: [{
                translateY: headerAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-30, 0],
                }),
              }],
            }}
            className="mb-6"
          >
            <Text className="text-4xl font-bold text-white mb-2" style={{ textShadowColor: 'rgba(0,0,0,0.3)', textShadowOffset: {width: 2, height: 2}, textShadowRadius: 4 }}>
              Tu Historia
            </Text>
            <Text className="text-lg text-white/80">Revisa tu progreso emocional</Text>
          </Animated.View>

          {/* Calendario con animación */}
          <Animated.View
            style={{
              opacity: calendarAnim,
              transform: [{ scale: calendarAnim }],
            }}
          >
            <View className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 mb-6" style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.3,
              shadowRadius: 16,
              elevation: 10,
            }}>
              <Text className="text-2xl font-bold mb-3 text-gray-800">📅 Calendario de Moods</Text>
              <Calendar
                markedDates={markedDates}
                onDayPress={(day) => {
                  console.log('selected day', day)
                  setSelectedDay(day.dateString)
                }}
                theme={{
                  backgroundColor: 'transparent',
                  calendarBackground: 'transparent',
                  textSectionTitleColor: '#8B5CF6',
                  selectedDayBackgroundColor: '#8B5CF6',
                  selectedDayTextColor: '#ffffff',
                  todayTextColor: '#F59E0B',
                  dayTextColor: '#2d3748',
                  textDisabledColor: '#d1d5db',
                  dotColor: '#8B5CF6',
                  selectedDotColor: '#ffffff',
                  arrowColor: '#8B5CF6',
                  monthTextColor: '#1f2937',
                  textDayFontWeight: '500',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '600',
                  textDayFontSize: 16,
                  textMonthFontSize: 18,
                  textDayHeaderFontSize: 14
                }}
                style={{
                  borderRadius: 20,
                }}
              />
            </View>
          </Animated.View>

          {/* Gráfica con animación */}
          <Animated.View
            style={{
              opacity: chartAnim,
              transform: [{
                translateX: chartAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-50, 0],
                }),
              }],
            }}
          >
            <View className="bg-white/95 backdrop-blur-lg rounded-3xl p-4 mb-6" style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.3,
              shadowRadius: 16,
              elevation: 10,
            }}>
              <Text className="text-2xl font-bold mb-3 text-gray-800">📊 Tendencia Semanal</Text>
              
              <LineChart
                data={chartData}
                width={Dimensions.get('window').width - 72}
                height={220}
                chartConfig={{
                  backgroundColor: '#ffffff',
                  backgroundGradientFrom: '#f8f9ff',
                  backgroundGradientTo: '#e0e7ff',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(139, 92, 246, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "3",
                    stroke: "#8B5CF6",
                    fill: "#ffffff"
                  },
                  propsForBackgroundLines: {
                    strokeDasharray: "", // solid background lines
                    stroke: "#e5e7eb",
                    strokeWidth: 1
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                withInnerLines={true}
                withOuterLines={true}
                withVerticalLabels={true}
                withHorizontalLabels={true}
                fromZero={true}
              />

              {/* Leyenda de moods */}
              <View className="flex-row justify-around mt-4 px-2">
                <View className="items-center">
                  <View className="w-3 h-3 rounded-full bg-red-500 mb-1" />
                  <Text className="text-xs text-gray-600">Bajo</Text>
                </View>
                <View className="items-center">
                  <View className="w-3 h-3 rounded-full bg-yellow-500 mb-1" />
                  <Text className="text-xs text-gray-600">Medio</Text>
                </View>
                <View className="items-center">
                  <View className="w-3 h-3 rounded-full bg-green-500 mb-1" />
                  <Text className="text-xs text-gray-600">Alto</Text>
                </View>
              </View>
            </View>
          </Animated.View>

          {/* Botón de limpiar datos con animación */}
          <Animated.View
            style={{
              opacity: buttonAnim,
              transform: [
                { scale: Animated.multiply(buttonAnim, buttonPulse) }
              ],
            }}
          >
            <TouchableOpacity 
              activeOpacity={0.8}
              className="mb-8"
            >
              <LinearGradient
                colors={['#ef4444', '#dc2626']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={{
                  padding: 18,
                  borderRadius: 20,
                  shadowColor: '#ef4444',
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.4,
                  shadowRadius: 12,
                  elevation: 8,
                }}
              >
                <Text className="text-xl font-bold text-white text-center">🗑️ Limpiar mis datos</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </Container>
    </LinearGradient>
  )
}