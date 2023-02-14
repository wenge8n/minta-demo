import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: 90,
    aspectRatio: 1,
  },
  content: {
    marginLeft: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 15,
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
});
