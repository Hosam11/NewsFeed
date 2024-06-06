import {useContext, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {getUserInfo} from '../Storage/Storage';
import {UserInfo} from '../../models/UserInfo';
import {formatDate} from '../../Util/utils';
import {ThemeContext, themes} from '../../store/theme-context';
import ThemeText from '../UI/ThemeText';
import ThemeView from '../UI/ThemeView';
import {colors} from '../UI/Colors';
import Toggle from '../UI/Toggle';
import LanguageSelection from './Language';
import {getLocalizationText} from '../../Util/lang';

const SettingScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const themeContext = useContext(ThemeContext);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log('SettingScreen useEffect');
    const getUserData = async () => {
      const user = await getUserInfo();
      if (user instanceof UserInfo) {
        setUserInfo(user);
      }
      setDarkMode(themeContext.theme === themes.dark);
    };
    getUserData();
  }, []);

  const toggleTheme = (value: boolean) => {
    themeContext.toggleTheme();
    setDarkMode(value);
  };

  return (
    <ThemeView style={styles.container}>
      <ThemeText style={styles.label}>{getLocalizationText('fName')}</ThemeText>
      <ThemeText
        style={styles.value}
        darkColor={colors.dark.value}
        lightColor={colors.light.value}>
        {userInfo?.fName}
      </ThemeText>

      <ThemeText style={styles.label}>
        {getLocalizationText('phoneNumber')}
      </ThemeText>
      <ThemeText
        style={styles.value}
        darkColor={colors.dark.value}
        lightColor={colors.light.value}>
        {userInfo?.phoneNumber}
      </ThemeText>

      <ThemeText style={styles.label}>
        {getLocalizationText('gender')}
      </ThemeText>
      <ThemeText
        style={styles.value}
        darkColor={colors.dark.value}
        lightColor={colors.light.value}>
        {userInfo?.gender}
      </ThemeText>

      <ThemeText style={styles.label}>
        {getLocalizationText('gender')}
      </ThemeText>
      <ThemeText
        style={styles.value}
        darkColor={colors.dark.value}
        lightColor={colors.light.value}>
        {formatDate(userInfo?.bDate ?? new Date())}
      </ThemeText>

      <LanguageSelection />

      <Toggle
        onValueChange={toggleTheme}
        label={
          themeContext.isDarkTheme()
            ? getLocalizationText('dark')
            : getLocalizationText('light')
        }
        value={isDarkMode}>
        {getLocalizationText('theme')}
      </Toggle>
    </ThemeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  toggleLabel: {
    fontSize: 18,
    color: '#000',
  },
});

export default SettingScreen;
