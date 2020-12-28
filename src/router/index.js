import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StatusBar,View,Image } from 'react-native';
import HomeStackScreen from './home.route';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import logo from './src/assets/images/logo.png';  
const Tab = createBottomTabNavigator();

const Router=() =>(
    <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Ionicons name ="home-outline"  size={size} color={color}/>;
          } 
          if (route.name === 'Discovery') {
            return <Feather name ="search"  size={size} color={color}/>;
          } 
          if (route.name === 'Post') {
            return <Feather name ="plus-square"  size={size} color={color}/>;
          } 
          if (route.name === 'Notifications') {
            return <AntDesign name ="hearto"  size={size} color={color}/>;
          }
          if (route.name === 'Profile') {
            return <Ionicons name ="person-outline"  size={size} color={color}/>;
          }  
        },
      })}
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="Discovery" component={DiscoveryScreen}/>
        <Tab.Screen name="Post" component={CreatePostScreen}/>
        <Tab.Screen name="Notifications" component={NotificationsScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
      </Tab.Navigator>

)
export default Router;