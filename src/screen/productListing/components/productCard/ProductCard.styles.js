import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 18,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 18,
    marginLeft: 10,
  },
  detailsContainer: {
    marginRight: 20,
    paddingVertical: 10,
  },
  productTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
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
  priceContainer: {
    flexDirection: 'row',
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
    marginTop: 10,
    padding: 5,
    justifyContent: 'space-between',
  },
  qtyButton: {
    backgroundColor: '#ffff',
    padding: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    paddingHorizontal: 10,
  },
  qtyText: {
    color: 'grey',
    fontSize: 16,
  },
  addTocartButton: {
    alignItems: 'center',
    backgroundColor: '#08C25D',
    borderRadius: 10,
    marginTop: 10,
    padding: 12,
  },
  cartText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
