import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ChevronDownIcon, MapPinIcon} from 'react-native-heroicons/outline';
import styles from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MapPinIcon color={'green'} size={34} />
      </TouchableOpacity>
      <View style={styles.addressContainer}>
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>Work</Text>
          <ChevronDownIcon color={'black'} size={25} />
        </View>
        <Text style={styles.subText}>
          P.O.Box 3625. Sheikh khalefa Bin Saeed Street Dubai.P.O.Box 901
        </Text>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../../../../assets/images/profile.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
