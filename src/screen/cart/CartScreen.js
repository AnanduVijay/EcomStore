import {View, Text, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './CartScreen.styles';
import CartItems from './components/cartItems/ CartItems';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import DeliveryType from './components/deliveyType/DeliveryType';
import DeliveryDay from './components/deliveryDay/DeliveryDay';
import DeliveryTime from './components/deliveryTime/DeliveryTime';
import AddressBox from './components/addressBox/AddressBox';
import PriceCard from './components/priceCard/PriceCard';
import ProceedCard from './components/proceedCard/ProceedCard';
import {CartContext} from '../../context/CartContext';
import {foodlist} from '../../assets/assets';

const CartScreen = ({navigation}) => {
  const {cartItems, removeFromCart, setCartItems} = useContext(CartContext);
  const [touchedProduct, setTouchedProduct] = useState('');

  const handleOnTouch = product => setTouchedProduct(product);
  const incrementItem = product => {
    const updatedCartItems = cartItems.map(item =>
      item.id === product.id ? {...item, quantity: item.quantity + 1} : item,
    );
    setCartItems(updatedCartItems);
  };
  const decrementItem = product => {
    if (product.quantity === 1) {
      removeFromCart(product.id);
    } else {
      const updatedCartItems = cartItems.map(item =>
        item.id === product.id ? {...item, quantity: item.quantity - 1} : item,
      );
      setCartItems(updatedCartItems);
    }
  };
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.navigate('Home')} />
      <ScrollView contentContainerStyle={styles.wraper}>
        {cartItems.map(item => (
          <CartItems
            key={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            offerPrice={item.offerPrice}
            onPress={() => handleOnTouch(item.id)}
            selected={item.id === touchedProduct}
            onDecrementItem={() => decrementItem(item)}
            onIncrementItem={() => incrementItem(item)}
          />
        ))}

        <Text style={styles.recomentationTitle}>Recommented</Text>
        <ScrollView horizontal={true}>
          {foodlist.map(item => (
            <ProductList
              key={item._id}
              id={item._id}
              title={item.name}
              image={item.image}
              offerPrice={item.offerPrice}
              price={item.price}
            />
          ))}
        </ScrollView>
        <DeliveryType />
        <DeliveryDay />
        <DeliveryTime />
        <AddressBox />
        <PriceCard />
        <ProceedCard />
      </ScrollView>
    </View>
  );
};

export default CartScreen;
