import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserInfo} from '../../models/UserInfo';

const userInfoKey = 'userInfoKey';
const themeKey = 'theme';
const localizationKey = 'localization';

export const saveUserInfo = async (user: UserInfo) => {
  await AsyncStorage.setItem(userInfoKey, JSON.stringify(user));
};

export const getUserInfo = async (): Promise<UserInfo | boolean> => {
  try {
    const data = JSON.parse((await AsyncStorage.getItem(userInfoKey)) || '');
    return new UserInfo(
      data.fName,
      data.phoneNumber,
      data.gender,
      new Date(data.bDate),
    );
  } catch (e) {
    console.log('error getUserInfo: ' + e);
    return false;
  }
};

export const saveTheme = async (theme: string) => {
  await AsyncStorage.setItem(themeKey, theme);
};

export const getTheme = async () => {
  try {
    const data = await AsyncStorage.getItem(themeKey);
    return data;
  } catch (e) {
    console.error('Error retrieving theme from storage:', e);
  }
};

export const saveLocalizationCode = async (localization: string) => {
  await AsyncStorage.setItem(localizationKey, localization);
};

export const getLocalizationCode = async () => {
  try {
    return await AsyncStorage.getItem(localizationKey);
  } catch (e) {
    console.error('Error retrieving LocalizationCode from storage:', e);
  }
};
