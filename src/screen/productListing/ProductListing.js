import {View, SafeAreaView, Image, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import styles from './ProductListing.styles';
import Header from './components/header/Header';
import Store from './components/store/Store';
import PromoCode from './components/promocode/PromoCode';
import Category from './components/category/Category';
import ProductCard from './components/productCard/ProductCard';
import CheckOutBar from './components/checkoutBar/CheckOutBar';
import {categoryList, foodlist} from '../../assets/assets';
import {CartContext} from '../../context/CartContext';

const ProductListing = ({navigation}) => {
  const mainImage = require('../../assets/images/wall.jpg');
  const {cartItems} = useContext(CartContext);

  const totalProducts = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <Header />
        <Image style={styles.mainImageContainer} source={mainImage} />
        <Store />
        <View>
          <ScrollView horizontal={true}>
            <PromoCode />
            <PromoCode />
            <PromoCode />
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 25,
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          {categoryList.map(item => (
            <Category
              key={item.menu_name}
              category={item.menu_name}
              image={item.menu_image}
            />
          ))}
        </View>
        {foodlist.map(item => (
          <ProductCard
            key={item._id}
            id={item._id}
            title={item.name}
            image={item.image}
            price={item.price}
            offerPrice={item.offerPrice}
          />
        ))}
      </ScrollView>
      {totalProducts !== 0 ? (
        <CheckOutBar onPress={() => navigation.navigate('Cart')} />
      ) : null}
    </SafeAreaView>
  );
};

export default ProductListing;
