import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './ProductCard.styles';
import {CartContext} from '../../../../context/CartContext';

const ProductCard = ({id, title, image, price, offerPrice}) => {
  const {cartItems, addToCart, removeFromCart, setCartItems} =
    useContext(CartContext);
  const product = {
    id,
    title,
    price,
    offerPrice,
    quantity: 1,
  };
  const handleOnpress = product => {
    addToCart({
      ...product,
      quantity: 1,
    });
  };
  const incrementItem = () => {
    const updatedCartItems = cartItems.map(item =>
      item.id === product.id ? {...item, quantity: item.quantity + 1} : item,
    );
    setCartItems(updatedCartItems);
  };
  const decrementItem = () => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct && existingProduct.quantity === 1) {
      removeFromCart(product.id);
    } else {
      const updatedCartItems = cartItems.map(item =>
        item.id === product.id ? {...item, quantity: item.quantity - 1} : item,
      );
      setCartItems(updatedCartItems);
    }
  };
  const currentQuantity =
    cartItems.find(item => item.id === product.id)?.quantity || 0;
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>
            {'\u20B9'}
            {offerPrice}/plt
          </Text>
          <Text style={styles.originalPrice}>
            {'\u20B9'}
            {price}
          </Text>
          <View style={styles.offContainer}>
            <Text style={styles.offerText}>-20%</Text>
          </View>
        </View>
        {cartItems.some(item => item.id === product.id) ? (
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.qtyButton} onPress={decrementItem}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{currentQuantity}Nos</Text>
            <TouchableOpacity style={styles.qtyButton} onPress={incrementItem}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.addTocartButton}
            onPress={() => handleOnpress(product)}>
            <Text style={styles.cartText}>Add to cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProductCard;
