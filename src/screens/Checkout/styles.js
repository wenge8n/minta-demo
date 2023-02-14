import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
  },
  backButton: {
    height: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 8,
  },

  content: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
});
