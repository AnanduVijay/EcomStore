import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  morningContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    padding: 10,
  },
  EveningContainer: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  timeText: {
    color: 'grey',
  },
  titleText: {
    color: 'black',
  },
  titlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
