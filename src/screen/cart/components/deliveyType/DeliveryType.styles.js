import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  instantCard: {
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderColor: '#D8D8D8',
  },
  scheduledCard: {
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: '#08C25D',

    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    color: '#08C25D',
  },
  instantTitle: {fontSize: 16, color: '#D8D8D8'},
});
