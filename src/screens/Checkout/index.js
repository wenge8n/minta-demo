import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import NavigationService from '../../navigation/NavigationService';

const CheckoutScreen = ({route}) => {
  const {menu} = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={NavigationService.goBack}>
          <Feather name="arrow-left" color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Checkout</Text>
      </View>

      <FastImage source={{uri: menu.image}} style={styles.image} />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.name}>{menu.name}</Text>
        <Text style={styles.price}>{menu.price}</Text>
      </View>
    </View>
  );
};

export default CheckoutScreen;
