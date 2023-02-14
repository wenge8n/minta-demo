import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';

import styles from './styles';
import NavigationService from '../../navigation/NavigationService';
import {createOrderRequest} from '../../redux/modules/core/actions';

const CheckoutScreen = ({route}) => {
  const {menu} = route.params;
  const dispatch = useDispatch();

  const createOrder = () => {
    dispatch(createOrderRequest({menu}));
  };

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

        <View style={styles.space} />

        <TouchableOpacity style={styles.orderButton} onPress={createOrder}>
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutScreen;
