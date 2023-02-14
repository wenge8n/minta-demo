import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';

const MenuItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <FastImage source={{uri: item.image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
