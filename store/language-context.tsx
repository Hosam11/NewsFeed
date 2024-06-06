import {PropsWithChildren, createContext, useEffect, useState} from 'react';
import {
  getLocalizationCode,
  saveLocalizationCode,
} from '../component/Storage/Storage';
import en from '../assets/en.json';
import es from '../assets/es.json';

export const languagesCodes = {
  en: 'en',
  es: 'es',
};

export const LanguageContext = createContext({
  localization: en,
  selectLocalization: (languageCode: string) => {},
  langCode: languagesCodes.en,
});

const LocalizationProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [localization, setLocalization] = useState(en);
  const [langCode, setLangCode] = useState(languagesCodes.en);
  useEffect(() => {
    async function loadLocaliztion() {
      const languageCode = await getLocalizationCode();
      console.log('languageCodeL: ' + languageCode);
      if (languageCode === languagesCodes.es) {
        setLocalization(es);
        setLangCode(languagesCodes.es);
      } else {
        setLocalization(en);
        setLangCode(languagesCodes.en);
      }
    }
    loadLocaliztion();
  }, []);

  const selectLocalization = async (languageCode: string) => {
    await saveLocalizationCode(languageCode);
    setLangCode(languageCode);

    if (languageCode === languagesCodes.es) {
      setLocalization(es);
    } else {
      setLocalization(en);
    }
  };

  return (
    <LanguageContext.Provider
      value={{localization, selectLocalization, langCode}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LocalizationProvider;
