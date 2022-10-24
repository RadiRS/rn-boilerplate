import React from 'react';
import { useDispatch } from 'react-redux';

import { useTheme, useTranslation } from '@/hooks';
import { changeTheme, ThemeState } from '@/store/theme';
import { Button, Text, SafeArea, View } from '@/components/ui';

import HeaderSection from './header-section.component';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { t, changeLanguage } = useTranslation();
  const { Fonts, Gutters } = useTheme();

  function onPressChangeTheme({ theme, darkMode }: Partial<ThemeState>) {
    dispatch(changeTheme({ theme, darkMode }));
  }

  return (
    <SafeArea padder>
      <HeaderSection />
      <View style={Gutters.regularBMargin} />
      <Text style={Fonts.textRegular}>
        {t('example.helloUser', { name: 'John' })}
      </Text>
      <Text style={Fonts.textSmall}>{t('welcome')}</Text>
      <View style={Gutters.regularBMargin} />
      <Button
        onPress={() => changeLanguage('id')}
        appearance="outlined"
        style={Gutters.regularBMargin}>
        Change to Bahasa
      </Button>
      <Button
        onPress={() => changeLanguage('en')}
        style={Gutters.regularBMargin}>
        Change to English
      </Button>
      <Button
        testID="dark-button"
        appearance="outlined"
        onPress={() => onPressChangeTheme({ darkMode: true })}
        style={Gutters.regularBMargin}>
        Change to Dark Mode
      </Button>
      <Button
        testID="light-button"
        onPress={() => onPressChangeTheme({ darkMode: false })}>
        Change to Light Mode
      </Button>
    </SafeArea>
  );
};

export default HomeContainer;
