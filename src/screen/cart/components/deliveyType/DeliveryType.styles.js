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
  },
  scheduledCard: {
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
});
