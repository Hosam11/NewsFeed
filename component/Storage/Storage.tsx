import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserInfo} from '../../models/UserInfo';

export const userInfoKey = 'userInfoKey';

const storage = new Storage({
  storageBackend: AsyncStorage,
});

export const saveUserInfo = async (key: string, user: UserInfo) => {
  await storage.save({
    key,
    data: user,
  });
};

export const getUserInfo = async (key: string): Promise<UserInfo | boolean> => {
  try {
    const data = await storage.load({
      key,
    });
    console.log('userInfo: ' + JSON.stringify(data));
    return data;
  } catch (e) {
    console.log('error getUserInfo: ' + e);
    return false;
  }
};
