import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Ionicons, MaterialCommunityIcons, } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, { SlideInDown, SlideInUp } from 'react-native-reanimated';


export default function PreviewScreen() {

  const navigation = useNavigation();
  const route = useRoute();

  //console.log(route.params.data);
  const { image } = route.params.data

  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [])



  return (
    <ImageBackground source={{ uri: image }} style={styles.container}>
      <StatusBar style="light" />


      <Animated.View entering={SlideInUp} style={styles.header}>
        <Ionicons name='ios-lock-closed' size={20} color='white' />
        <Text style={styles.date}>{date.format('dddd, DD MMMM')}</Text>
        <Text style={styles.time}>{date.format('hh:mm')}</Text>
      </Animated.View>


      <Animated.View entering={SlideInDown} style={styles.footer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name='flashlight' size={24} color='white' />
        </View>

        <View style={styles.icon}>
          <Ionicons name='ios-camera' size={24} color='white' />
        </View>
        
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    alignItems: 'center',
    height: 290,
    //backgroundColor: 'red',
    justifyContent: 'center'
  },
  date: {
    fontSize: 25,
    fontWeight: '500',
    color: '#fff',
    marginTop: 20,
  },
  time: {
    fontSize: 115,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -10
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    //backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 50,
    height: 118,
    marginBottom: 10
  },
  icon: {
    backgroundColor: '#00000050',
    width: 50,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  }
});