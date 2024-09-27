import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Category.styles';
const Category = ({category, image, onPress, selected}) => {
  return (
    <TouchableOpacity style={styles.categoryContainer} onPress={onPress}>
      <Image
        style={[
          styles.categoryImage,
          {borderColor: selected ? 'orange' : 'green'},
        ]}
        source={image}
      />
      <Text style={styles.categoryText}>{category}</Text>
    </TouchableOpacity>
  );
};

export default Category;
