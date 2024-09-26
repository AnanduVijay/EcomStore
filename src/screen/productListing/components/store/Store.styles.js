import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
  },
  storeImage: {
    width: 73,
    height: 66,
    borderRadius: 8,
  },
  storeDetails: {
    width: '80%',
    gap: 5,
  },
  storeTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  storeText: {
    color: 'grey',
  },
});
