import React, {useContext, useEffect, useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import ThemeText from '../UI/ThemeText';
import {ThemeContext} from '../../store/theme-context';
import {colors} from '../UI/Colors';
import {getLocalizationText} from '../../Util/lang';
import {LanguageContext} from '../../store/language-context';
import {getLocalizationCode} from '../Storage/Storage';
const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const themeContext = useContext(ThemeContext);
  const langContext = useContext(LanguageContext);

  useEffect(() => {
    const loadLanguageCode = async () => {
      const code = await getLocalizationCode();

      if (code) {
        setSelectedLanguage(code as string);
      }
    };

    loadLanguageCode();
  });

  const languages = [
    {label: 'English', value: 'en'},
    {label: 'Español', value: 'es'},
  ];
  const onPressLanguage = (value: string) => {
    setSelectedLanguage(value);
    langContext.selectLocalization(value);
    console.log('value: ' + value);
  };
  return (
    <View style={styles.container}>
      <ThemeText style={styles.title}>
        {getLocalizationText('selectLanguage')}
      </ThemeText>
      {languages.map(language => (
        <TouchableOpacity
          key={language.value}
          style={styles.radioButton}
          onPress={() => onPressLanguage(language.value)}>
          <View style={styles.outerCircle}>
            {selectedLanguage === language.value && (
              <View
                style={[
                  styles.innerCircle,
                  {
                    backgroundColor: themeContext.isDarkTheme()
                      ? colors.dark.header
                      : colors.light.header,
                  },
                ]}
              />
            )}
          </View>
          <ThemeText style={styles.label}>{language.label}</ThemeText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LanguageSelection;
