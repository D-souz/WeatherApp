import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: 'lightblue'
          },
          headerStyle:{
            backgroundColor: 'lightblue'
          },
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            color: 'tomato',
          }
        }}
      >
        <Tab.Screen name='Current' 
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon 
                name={'droplet'}
                size={25}
                color={focused ? 'tomato': 'black'}
              />
            )
          }}
        >
          {() => <CurrentWeather weatherData={weather.list[0]} />}
        </Tab.Screen>
        <Tab.Screen name='Upcoming'
           options={{
            tabBarIcon: ({ focused }) => (
              <Icon 
                name={'clock'}
                size={25}
                color={focused ? 'tomato': 'black'}
              />
            )
          }}
        >
         {() => <UpcomingWeather weatherData={weather.list} />}
        </Tab.Screen>
        <Tab.Screen name='City'
           options={{
            tabBarIcon: ({ focused }) => (
              <Icon 
                name={'home'}
                size={25}
                color={focused ? 'tomato': 'black'}
              />
            )
          }}
        >
          {() => <City weatherData={weather.city} />}
        </Tab.Screen>
      </Tab.Navigator>
  )
}

export default Tabs;