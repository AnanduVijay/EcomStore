import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Category.styles';
const Category = ({category, image}) => {
  return (
    <TouchableOpacity style={styles.categoryContainer}>
      <Image style={styles.categoryImage} source={image} />
      <Text style={styles.categoryText}>{category}</Text>
    </TouchableOpacity>
  );
};

export default Category;
