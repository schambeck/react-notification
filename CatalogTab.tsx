import React, { } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Catalog from './CatalogScreen'
import * as Product from './ProductScreen'

const Stack = createNativeStackNavigator();

export const CatalogTab = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Catalog" component={Catalog.CatalogScreen} />
      <Stack.Screen name="Product" component={Product.ProductScreen} />
    </Stack.Navigator>
  );

};
