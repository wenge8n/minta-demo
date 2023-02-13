import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationRef} from './NavigationService';

import Spinner from '../components/Spinner';

import MenuList from '../screens/MenuList';
import Checkout from '../screens/Checkout';

const Stack = createNativeStackNavigator();

const RootNavigation = props => {
  const {theme} = props;

  const coreLoading = useSelector(state => state.coreReducer.loading);

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer ref={navigationRef} theme={theme}>
        <StatusBar barStyle="dark-content" />

        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MenuList" component={MenuList} />
          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>

        <Spinner isVisible={coreLoading} />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});
