import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import {image} from 'react-native';
import logo from '../assets/images/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import StoryScreen from '../screens/StoryScreen';
const HomeStack = createStackNavigator();
const HomeRoutes=()=>(
    <HomeStack.Navigator>
    <HomeStack.Screen 
    name="Home" 
    component={HomeScreen}
    options={{
      title:'Instargram',
      headerLeftContainerStyle:{
        marginleft:15,
      },
      headerRightContainerStyle:{
        marginright:15,
      },
      
    headerLeft: () => (
        <Feather name = "camera"  size={25} color={'#000'}/>
    ),
    headerTitle:()=>(
      <Image source={logo} resizeMode="contain" style={{width:130}} />
    ),
    headerRight:()=>(
      <Ionicons name='paper-plane-outline' size={27} color={"#545454"}/>
    )
    }}
    />
    <HomeStack.Screen 
    name="Story"
    options={StoryScreen}
    />
  </HomeStack.Navigator>
)

export default HomeRoutes;