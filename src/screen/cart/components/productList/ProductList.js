import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './ProductList.styles';
import {CartContext} from '../../../../context/CartContext';

const ProductList = ({id, title, price, image, offerPrice}) => {
  const {setCartItems, addToCart, cartItems} = useContext(CartContext);
  const product = {
    id,
    title,
    price,
    offerPrice,
    quantity: 1,
  };
  const handleOnPress = product => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCartItems = cartItems.map(item =>
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item,
      );
      setCartItems(updatedCartItems);
    } else {
      addToCart({...product, quantity: 1});
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.ProductImage} source={image} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>
        {'\u20B9'} {offerPrice}
      </Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleOnPress(product)}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductList;
