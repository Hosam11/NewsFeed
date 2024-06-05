import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserInfo} from '../../models/UserInfo';

const userInfoKey = 'userInfoKey';
const themeKey = 'theme';

const storage = new Storage({
  storageBackend: AsyncStorage,
  defaultExpires: null,
});

export const saveUserInfo = async (user: UserInfo) => {
  await storage.save({
    key: userInfoKey,
    data: user,
  });
};

export const getUserInfo = async (): Promise<UserInfo | boolean> => {
  try {
    const data = await storage.load({
      key: userInfoKey,
    });
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
  await storage.save({
    key: themeKey,
    data: theme,
  });
};

export const getTheme = async () => {
  try {
    return await storage.load({
      key: themeKey,
    });
  } catch (e) {
    console.error('Error retrieving theme from storage:', e);
  }
};
