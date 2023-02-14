import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import MenuItem from '../../components/MenuItem';
import {getMenuListRequest} from '../../redux/modules/core/actions';

const MenuListScreen = () => {
  const dispatch = useDispatch();

  const menuList = useSelector(state => state.coreReducer.menuList);

  useEffect(() => {
    // Fetch menu list
    dispatch(getMenuListRequest());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Menu List</Text>

      <FlatList
        data={menuList}
        renderItem={({item}) => <MenuItem item={item} />}
        style={styles.flatList}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MenuListScreen;
