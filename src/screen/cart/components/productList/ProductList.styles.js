import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 10,
    gap: 5,
  },
  ProductImage: {
    width: 50,
    height: 36,
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'black',
    fontWeight: '900',
  },
  addButton: {
    backgroundColor: '#08C25D',
    width: 'auto',
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
