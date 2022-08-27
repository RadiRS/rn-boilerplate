import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Translations from '@/config/translations';

import HeaderSection from './header-section.component';
import { useDispatch } from 'react-redux';
import { changeTheme, ThemeState } from '@/store/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@/hooks';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { Common, Fonts } = useTheme();

  const onPressChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  return (
    <View style={styles.container}>
      <HeaderSection />
      <View style={styles.mb} />
      <Text style={Fonts.textRegular}>
        {t('example.helloUser', { name: 'John' })}
      </Text>
      <Text style={Fonts.textSmall}>{t('welcome')}</Text>
      <View style={styles.mb} />
      <TouchableOpacity
        onPress={() => Translations.changeLanguage('id')}
        style={Common.button.outline}>
        <Text style={Fonts.textSmall}>Change to Bahasa</Text>
      </TouchableOpacity>
      <View style={styles.mb} />
      <TouchableOpacity
        onPress={() => Translations.changeLanguage('en')}
        style={Common.button.base}>
        <Text style={Fonts.textSmall}>Change to English</Text>
      </TouchableOpacity>
      <View style={styles.mb} />
      <TouchableOpacity
        onPress={() => onPressChangeTheme({ darkMode: true })}
        style={Common.button.outlineRounded}>
        <Text style={Fonts.textSmall}>Change to Dark Mode</Text>
      </TouchableOpacity>
      <View style={styles.mb} />
      <TouchableOpacity
        onPress={() => onPressChangeTheme({ darkMode: false })}
        style={Common.button.rounded}>
        <Text style={Fonts.textSmall}>Change to Light Mode</Text>
      </TouchableOpacity>
      <View style={styles.mb} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  mb: {
    marginBottom: 16,
  },
});

export default HomeContainer;
