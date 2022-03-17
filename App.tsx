import React, { } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Home from './HomeScreen'
import * as Catalog from './CatalogTab'

export default () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen
          name="Home" component={Home.HomeScreen}
          options={{ title: 'Home', tabBarIcon: ({ focused, color, size }) => <Ionicons name='home' focused={focused} color={color} size={size} />}}
        />
        <Tab.Screen
          name="CatalogTab" component={Catalog.CatalogTab}
          options={{ title: 'Catalog', headerShown: false, tabBarIcon: ({ focused, color, size }) => <Ionicons name='list' focused={focused} color={color} size={size} />}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

};
