import { View, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { navigateAndSimpleReset } from '@/navigators/utils';
import { AppImage } from '@/assets';
import { useTheme } from '@/hooks';

const WelcomeContainer = () => {
  const { NavigationTheme } = useTheme();
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );

    navigateAndSimpleReset('Main');
  };

  useEffect(() => {
    init();
  });

  return (
    <View
      testID="welcome"
      style={[
        styles.container,
        { backgroundColor: NavigationTheme.colors.background },
      ]}>
      <Image source={AppImage.logo.app} style={styles.img} borderRadius={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default WelcomeContainer;
