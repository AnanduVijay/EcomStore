import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 30,
  },
  dayWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeWraper: {},
  dayButton1: {
    backgroundColor: 'green',
    paddingHorizontal: 70,
    paddingVertical: 15,
    borderRadius: 10,
  },
  dayButton2: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText1: {
    color: 'white',
    fontSize: 14,
  },
  buttonText2: {
    color: 'black',
    fontSize: 14,
  },
});
