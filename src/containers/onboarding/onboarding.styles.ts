import { Dimensions, StyleSheet } from 'react-native';

export const { width } = Dimensions.get('screen');

export const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width / 2,
    height: width / 2,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 100,
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    margin: 5,
  },
  sliderItemContainer: {
    flex: 1,
    width,
    alignItems: 'center',
    padding: 20,
  },
  sliderImageContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  sliderTextContainer: {
    flex: 0.3,
    alignItems: 'center',
  },
  sliderTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  sliderSubtitle: {
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    padding: 30,
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default styles;
