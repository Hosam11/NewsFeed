import {useContext} from 'react';
import {LanguageContext} from '../store/language-context';

export const getLocalizationText = (key: string): string => {
  return useContext(LanguageContext).localization[key];
};
