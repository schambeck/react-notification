import React from 'react';
import { Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Notifications List"
      onPress={() => navigation.navigate('NotificationList')}
    />
  );
};
