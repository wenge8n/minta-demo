import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Modal from 'react-native-modal';
import {MaterialIndicator} from 'react-native-indicators';

const Spinner = ({isVisible, text}) => {
  return (
    <Modal isVisible={isVisible} animationIn="pulse" animationOut="fadeOut">
      <View style={styles.content}>
        <View style={styles.indicator}>
          <MaterialIndicator color="orange" size={45} />
        </View>
        {text != null && text !== '' && <Text style={styles.text}>{text}</Text>}
      </View>
    </Modal>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  indicator: {
    height: 45,
  },
  text: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    marginLeft: 16,
  },
});
