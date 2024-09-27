import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    // borderColor: 'green',
    marginTop: 25,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  detailsContainer: {
    gap: 5,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  productTitle: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'black',
    fontWeight: 'bold',
  },
  originalPrice: {
    color: 'grey',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  offerText: {
    color: '#ffff',
  },
  offContainer: {
    backgroundColor: '#FFC700',
    borderRadius: 5,
    padding: 2,
    marginLeft: 40,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 5,
    gap: 15,
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  qtyButton: {
    backgroundColor: '#ffff',
    paddingHorizontal: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  qtyText: {
    color: 'grey',
    fontSize: 16,
  },
  quantityWraper: {
    alignItems: 'flex-end',
  },
  totalText: {
    color: 'black',
    fontSize: 16,
  },
});
