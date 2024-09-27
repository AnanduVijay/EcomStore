import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: 210,
    padding: 5,
    marginRight: 10,
  },
  detailsContainer: {
    justifyContent: 'center',
    gap: 5,
  },
  mainTitle: {
    fontWeight: '900',
    color: '#000',
  },
  subTitle: {
    color: '#000',
  },
  offerImgText: {
    color: '#08C25D',
    fontWeight: 'bold',
    fontSize: 25,
  },
  offerImg: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#08C25D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
