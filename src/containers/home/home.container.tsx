import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Translations from '@/config/translations';

import HeaderSection from './header-section.component';
import { useDispatch } from 'react-redux';
import { changeTheme, ThemeState } from '@/store/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@/hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@/components/ui';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { Common, Fonts, Gutters } = useTheme();

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
      <TouchableOpacity
        onPress={() => Translations.changeLanguage('id')}
        style={Common.button.outline}>
        <Text style={Fonts.textSmall}>Change to Bahasa</Text>
      </TouchableOpacity>
      <View style={Gutters.regularBMargin} />
      <TouchableOpacity
        onPress={() => Translations.changeLanguage('en')}
        style={Common.button.base}>
        <Text style={Fonts.textSmall}>Change to English</Text>
      </TouchableOpacity>
      <View style={Gutters.regularBMargin} />
      <TouchableOpacity
        onPress={() => onPressChangeTheme({ darkMode: true })}
        style={Common.button.outlineRounded}>
        <Text style={Fonts.textSmall}>Change to Dark Mode</Text>
      </TouchableOpacity>
      <View style={Gutters.regularBMargin} />
      <TouchableOpacity
        onPress={() => onPressChangeTheme({ darkMode: false })}
        style={Common.button.rounded}>
        <Text style={Fonts.textSmall}>Change to Light Mode</Text>
      </TouchableOpacity>
      <View style={Gutters.regularBMargin} />
    </SafeAreaView>
  );
};

export default HomeContainer;
