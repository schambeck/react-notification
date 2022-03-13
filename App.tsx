import React, {  } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Home from './HomeScreen'
import * as Notification from './NotificationScreen'

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home.HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="NotificationList" component={Notification.NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};
