import { View, Text } from 'react-native';
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
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>
    </View>
  );
};

export default WelcomeContainer;
