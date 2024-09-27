import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  redeemTitle: {
    color: 'black',
  },
  redeemText: {
    color: '#08C25D',
    fontWeight: 'bold',
  },
  redeemContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  priceDetailsBox: {
    marginTop: 20,
  },
  priceText: {
    color: 'black',
    fontSize: 18,
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalCostBox: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
