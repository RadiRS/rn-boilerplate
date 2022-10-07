import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNWebview, {
  WebViewProps as RNWebviewProps,
} from 'react-native-webview';

import { useTheme } from '@/hooks';

interface WebviewProps extends RNWebviewProps {
  uri?: string;
}

const Webview: React.FC<WebviewProps> = (props: WebviewProps) => {
  const styles = useStyles();
  const navigation = useNavigation();
  const refWebview = useRef<RNWebview>(null);
  const [isCanGoBack, setCanGoBack] = useState(false);
  const { uri = 'https://google.com', ...extraProps } = props;

  useEffect(() => {
    const onPressBack = () => {
      if (isCanGoBack) {
        refWebview.current?.goBack();
      } else {
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          return false;
        }
      }

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onPressBack,
    );

    return () => backHandler.remove();
  }, [isCanGoBack, navigation]);

  return (
    <RNWebview
      ref={refWebview}
      containerStyle={styles.container}
      style={styles.webview}
      source={{ uri }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      allowsFullscreenVideo
      onNavigationStateChange={({ canGoBack }) => {
        setCanGoBack(canGoBack);
      }}
      {...extraProps}
    />
  );
};

const useStyles = () => {
  const { Colors } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 0,
      height: '100%',
      width: '100%',
      backgroundColor: Colors.background,
    },
    webview: {
      backgroundColor: Colors.background,
    },
  });
};

export default Webview;
