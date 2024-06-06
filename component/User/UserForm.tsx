import {Button, StyleSheet, View} from 'react-native';
import Input from '../UI/Input';
import CustomDropDown from '../UI/CustomDropDown';
import CustomDatePicker from '../UI/CustomDatePicker';
import {useContext, useState} from 'react';
import {saveUserInfo} from '../Storage/Storage';
import {UserInfo} from '../../models/UserInfo';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FormDataType, GenderType, RootStackParamList} from '../../Util/types';
import {ThemeContext} from '../../store/theme-context';
import {colors} from '../UI/Colors';
import {getLocalizationText} from '../../Util/lang';

const formDataKeys = {
  fName: 'fName',
  phoneNumber: 'phoneNumber',
  gender: 'gender',
  bDate: 'bDate',
};

const phoneRegex = /^[0-9]{11}$/;

const UserForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigation: NativeStackNavigationProp<RootStackParamList> =
    useNavigation();

  const [formData, setFormData] = useState<FormDataType>({
    fName: {value: '', isValid: false},
    phoneNumber: {value: '', isValid: false},
    gender: {value: null, isValid: false},
    bDate: {value: new Date(), isValid: false},
  });
  const themeContext = useContext(ThemeContext);

  const genderOptions = [
    {label: getLocalizationText('male'), value: 'male'},
    {label: getLocalizationText('female'), value: 'female'},
  ];

  const {fName, phoneNumber, gender, bDate} = formData;
  const isFormValid =
    fName.isValid && phoneNumber.isValid && gender.isValid && bDate.isValid;

  const handleFormData = (
    key: string,
    value: string | GenderType | Date,
    isValid: boolean,
  ) => {
    setFormData(prevState => {
      return {
        ...prevState,
        [key]: {
          value: value,
          isValid: isValid,
        },
      };
    });
  };

  const fNameHandler = (fName: string) => {
    handleFormData(formDataKeys.fName, fName, fName.trim().length > 5);
  };

  const phoneNumberHandler = (phoneNumber: string) => {
    handleFormData(
      formDataKeys.phoneNumber,
      phoneNumber,
      phoneRegex.test(phoneNumber),
    );
  };

  const genderHandler = (item: GenderType) => {
    handleFormData(formDataKeys.gender, item, true);
  };

  const bDateHandler = (selectedDate: Date) => {
    const ten10ago = new Date();
    ten10ago.setFullYear(new Date().getFullYear() - 10);
    console.log(selectedDate < ten10ago);
    handleFormData(formDataKeys.bDate, selectedDate, selectedDate < ten10ago);
    setOpen(false);
  };

  const sumbitHandler = () => {
    console.log(formData);
    saveUserInfo(
      new UserInfo(
        formData.fName.value,
        formData.phoneNumber.value,
        formData.gender.value?.value ?? '',
        formData.bDate.value,
      ),
    );
    navigation.replace('BottomNavigator');
  };

  console.log('isFormValid: ' + isFormValid);
  return (
    <View style={styles.form}>
      <Input
        placeholder={getLocalizationText('fName')}
        onChange={fNameHandler}
        errorText={
          formData.fName.isValid
            ? undefined
            : getLocalizationText('invalidName')
        }
      />
      <Input
        placeholder={getLocalizationText('phoneNumber')}
        keyboardType="phone-pad"
        onChange={phoneNumberHandler}
        errorText={
          formData.phoneNumber.isValid
            ? undefined
            : getLocalizationText('invalidPhone')
        }
      />
      <CustomDropDown
        itemtOptions={genderOptions}
        placeholder={getLocalizationText('selectGender')}
        gender={formData.gender.value}
        onChange={genderHandler}
        errorText={
          formData.gender.isValid
            ? undefined
            : getLocalizationText('invalidGender')
        }
      />
      <CustomDatePicker
        date={formData.bDate.value}
        onDatePress={() => setOpen(true)}
        onCancel={() => setOpen(false)}
        open={open}
        onConfirm={bDateHandler}
        errorText={
          formData.bDate.isValid
            ? undefined
            : getLocalizationText('invalidDate')
        }
      />
      <View style={styles.submitButton}>
        <Button
          title={getLocalizationText('submit')}
          onPress={sumbitHandler}
          disabled={!isFormValid}
          color={
            themeContext.isDarkTheme()
              ? colors.dark.header
              : colors.light.header
          }
        />
      </View>
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 20,
    marginTop: 8,
  },
  container: {
    justifyContent: 'center',
  },
  dateText: {
    marginTop: 20,
    fontSize: 18,
  },
  submitButton: {
    marginTop: 40,
  },
});
