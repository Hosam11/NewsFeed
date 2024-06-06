import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Artical} from '../models/Artical';
import {ColorValue, TextProps} from 'react-native';

export type Props = NativeStackScreenProps<
  RootStackParamList,
  'NewsDetailsScreen'
>;

export interface ThemeViewProps extends TextProps {
  darkColor?: ColorValue;
  lightColor?: ColorValue;
}

export type RootStackParamList = {
  UserInfoScreen: undefined;
  NewsScreen: undefined;
  SettingScreen: undefined;
  NewsDetailsScreen: {article: Artical};
  BottomNavigator: undefined;
};

export type FormDataType = {
  fName: {
    value: string;
    isValid: boolean;
  };
  phoneNumber: {
    value: string;
    isValid: boolean;
  };
  gender: {
    value: GenderType;
    isValid: boolean;
  };
  bDate: {
    value: Date;
    isValid: boolean;
  };
};

export type GenderType = {label: string; value: string} | null;
