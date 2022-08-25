import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Translations from '@/config/translations';

import HeaderSection from './header-section.component';

const HomeContainer = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <HeaderSection />
      <View style={styles.mb} />
      <Text>{t('example.helloUser', { name: 'John' })}</Text>
      <Text>{t('welcome')}</Text>
      <View style={styles.mb} />
      <Button
        title="Change to Bahasa"
        color="red"
        onPress={() => Translations.changeLanguage('id')}
      />
      <View style={styles.mb} />
      <Button
        title="Change to English"
        onPress={() => Translations.changeLanguage('en')}
      />
      <View style={styles.mb} />
      <Button title="Change Themes" color="orange" onPress={() => null} />
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
