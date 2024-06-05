import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserInfo} from '../../models/UserInfo';

const userInfoKey = 'userInfoKey';

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
