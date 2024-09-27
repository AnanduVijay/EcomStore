import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 25,
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey',
    marginBottom: 20,
  },
  addressContainer: {
    width: 260,
  },
  mainTextContainer: {
    flexDirection: 'row',
  },
  mainText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subText: {
    color: 'grey',
    fontSize: 13,
  },
  image: {
    width: 37,
    height: 36,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#08C25D',
  },
});
