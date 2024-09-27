import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  notch: {
    width: 20,
    height: 20,
    backgroundColor: '#08C25D',
    transform: [{rotate: '45deg'}],
    marginBottom: -10,
    zIndex: 1,
  },
  container: {
    backgroundColor: '#08C25D',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 17,
    justifyContent: 'space-between',
    padding: 15,
  },
  checkoutbutton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 5,
    gap: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
});
