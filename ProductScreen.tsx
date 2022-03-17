import React from 'react';
import { SafeAreaView, Image, View, StyleSheet, Text, TextInput } from 'react-native';

export const ProductScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.card}>
      <View style={styles.item}>
        <View style={styles.container}>
          <Image style={styles.image} source={product.image} />
        </View>
        <Text style={styles.label}>Product:</Text>
        <TextInput style={styles.input} value={product.name} />
        <Text style={styles.label}>Category:</Text>
        <TextInput style={styles.input} value={product.category.name} />
        <Text style={styles.label}>Price:</Text>
        <TextInput style={styles.input} value={product.price} />
        <Text style={styles.label}>Unit:</Text>
        <TextInput style={styles.input} value={product.unit.name} />
      </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 10,
    elevation: 7,
    backgroundColor: '#f9c2ff',
  },
  item: {
    padding: 20
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    paddingTop: 10,
  },
  input: {
    height: 40,
    padding: 12,
    borderWidth: 1,
  },
  image: {
    width: '48px',
    height: '48px',
    alignItems: 'center'
  }
});
