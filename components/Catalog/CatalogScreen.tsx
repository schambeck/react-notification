import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView, View } from 'react-native';
import * as ProductRepository from './ProductRepository'

export const CatalogScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const getCatalog = () => {
    return ProductRepository.products;
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate('Product', { product: item });
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={getCatalog()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={[{ flexDirection: "row" }]}>
      <Image style={styles.image} source={item.image} />
      <View style={[styles.detail]}>
        <Text style={[styles.name, textColor]}>{item.name}</Text>
        <Text style={[styles.category, { color: item.category.textColor }]}>{item.category.name}</Text>
      </View>
      <View style={[styles.values]}>
        <Text style={[styles.price, textColor]}>${item.price}</Text>
        <Text style={[styles.unit, textColor]}>{item.unit.name}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 10,
    elevation: 7,
  },
  image: {
    width: '48px',
    height: '48px',
    marginRight: 10
  },
  detail: {
    flex: 1
  },
  name: {
    flex: 1,
    fontSize: 20,
  },
  category: {
    flex: 1,
    fontWeight: 'bold',
  },
  values: {
    alignItems: 'flex-end',
  },
  price: {
    flex: 1,
    fontSize: 15,
  },
  unit: {
    flex: 1,
    fontSize: 10,
  }
});
