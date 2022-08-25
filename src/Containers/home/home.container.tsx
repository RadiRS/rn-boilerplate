import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import Translations from '@/config/translations';

import HeaderSection from './header-section.component';

const HomeContainer = () => {
  const { t } = useTranslation();

  return (
    <View>
      <HeaderSection />
      <Text>HomeContainer</Text>
      <Text>{t('example.helloUser', { name: 'Radi' })}</Text>
      <Button
        title="Ganti Bahasa Indonesia"
        onPress={() => Translations.changeLanguage('id')}
      />
      <Button
        title="Ganti Bahasa Inggris"
        onPress={() => Translations.changeLanguage('en')}
      />
    </View>
  );
};

export default HomeContainer;
