import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainTabNavigator from './MainTabNavigator';
import ImageViewScreen from '../screens/ImageViewScreen';
import PreviewScreen from '../screens/PreviewScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen name='Main' component={MainTabNavigator}
          options={{
            headerShown: false,
            headerTitle: 'Home'
          }}
        />
        <Stack.Screen name='ImageView' component={ImageViewScreen}
          options={{
            headerShown: false,
            presentation: 'modal'
          }}
        />
        <Stack.Screen name='Preview' component={PreviewScreen}
          options={{
            headerShown: false,
            presentation: 'card'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})