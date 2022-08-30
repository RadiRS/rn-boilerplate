import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks';
import { changeTheme, ThemeState } from '@/store/theme';
import Translations from '@/config/translations';
import { Button, Text } from '@/components/ui';

import HeaderSection from './header-section.component';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { Fonts, Gutters } = useTheme();

  const onPressChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  return (
    <SafeAreaView style={[Gutters.regularVPadding, Gutters.regularHPadding]}>
      <HeaderSection />
      <View style={Gutters.regularBMargin} />
      <Text style={Fonts.textRegular}>
        {t('example.helloUser', { name: 'John' })}
      </Text>
      <Text style={Fonts.textSmall}>{t('welcome')}</Text>
      <View style={Gutters.regularBMargin} />
      <Button
        onPress={() => Translations.changeLanguage('id')}
        appearance="outlined"
        style={Gutters.regularBMargin}>
        Change to Bahasa
      </Button>
      <Button
        onPress={() => Translations.changeLanguage('en')}
        style={Gutters.regularBMargin}>
        Change to English
      </Button>
      <Button
        appearance="outlined"
        onPress={() => onPressChangeTheme({ darkMode: true })}
        style={Gutters.regularBMargin}>
        Change to Dark Mode
      </Button>
      <Button onPress={() => onPressChangeTheme({ darkMode: false })}>
        Change to Light Mode
      </Button>
    </SafeAreaView>
  );
};

export default HomeContainer;
