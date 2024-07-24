import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product</Text>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={{ uri: product.thumbnail }} style={styles.image} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({ 
    image:{
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    header:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    productContainer:{
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'grey',
      
         },
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
       
    },
 });
