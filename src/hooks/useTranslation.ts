import { NativeModules, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { InitState, setLanguage } from '@/store/init';

export default function () {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const deviceLanguage: string =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  const currentLanguage = useSelector(
    (state: { init: InitState }) => state.init.language,
  );

  const setDefaultLanguage = () => {
    const transDeviceLanguage = deviceLanguage.includes('id') ? 'id' : 'en';
    const language = currentLanguage || transDeviceLanguage;

    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
  };

  const changeLanguage = (language: Language): void => {
    if (language === currentLanguage) {
      return;
    }

    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
  };

  return {
    t,
    currentLanguage,
    setDefaultLanguage,
    changeLanguage,
  };
}

type Language = 'id' | 'en';
