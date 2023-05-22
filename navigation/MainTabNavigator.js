import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#CD3C44',
      tabBarInactiveTintColor: '#999797',
      activeBackgroundColor: 'rgba(34,36,40,1)',
      headerStyle: { backgroundColor: '#000' },
      headerTintColor: '#fff',
      tabBarStyle: { backgroundColor: 'rgba(34,36,40,1)' },
    }}
      initialRouteName='AISearch'
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="home" size={24} color={focused ? '#CD3C44' : '#999797'} />
          ),
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-search" size={24} color={focused ? '#CD3C44' : '#999797'} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="settings-sharp" size={24} color={focused ? '#CD3C44' : '#999797'} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator

const styles = StyleSheet.create({})