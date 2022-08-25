import { View, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { navigateAndSimpleReset } from '@/Navigators/utils';

const WelcomeContainer = () => {
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
    <View style={styles.container}>
      <Image
        source={require('@/Assets/Images/logo.png')}
        style={styles.img}
        borderRadius={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default WelcomeContainer;