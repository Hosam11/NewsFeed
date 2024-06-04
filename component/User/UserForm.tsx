import {Button, StyleSheet, View} from 'react-native';
import Input from '../UI/Input';
import language from '../Strings';
import CustomDropDown from '../UI/CustomDropDown';
import CustomDatePicker from '../UI/CustomDatePicker';
import {useState} from 'react';
import {saveUserInfo, userInfoKey} from '../../Storage';
import {UserInfo} from '../../models/UserInfo';

export type GenderType = {label: string; value: string} | null;

const genderOptions = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];

type FormDataType = {
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

const formDataKeys = {
  fName: 'fName',
  phoneNumber: 'phoneNumber',
  gender: 'gender',
  bDate: 'bDate',
};

const phoneRegex = /^[0-9]{11}$/;

const UserForm: React.FC = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    fName: {value: '', isValid: false},
    phoneNumber: {value: '', isValid: false},
    gender: {value: null, isValid: false},
    bDate: {value: new Date(), isValid: false},
  });

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
      userInfoKey,
      new UserInfo(
        formData.fName.value,
        formData.phoneNumber.value,
        formData.gender.value?.value ?? '',
        formData.bDate.value,
      ),
    );
  };

  console.log('isFormValid: ' + isFormValid);
  return (
    <View style={styles.form}>
      <Input
        placeholder={language.fName}
        onChange={fNameHandler}
        errorText={formData.fName.isValid ? undefined : language.invalidName}
      />
      <Input
        placeholder={language.phoneNumber}
        keyboardType="phone-pad"
        onChange={phoneNumberHandler}
        errorText={
          formData.phoneNumber.isValid ? undefined : language.invalidPhone
        }
      />
      <CustomDropDown
        itemtOptions={genderOptions}
        placeholder={language.selectGender}
        gender={formData.gender.value}
        onChange={genderHandler}
        errorText={formData.gender.isValid ? undefined : language.invalidGender}
      />
      <CustomDatePicker
        date={formData.bDate.value}
        onDatePress={() => setOpen(true)}
        onCancel={() => setOpen(false)}
        open={open}
        onConfirm={bDateHandler}
        errorText={formData.bDate.isValid ? undefined : language.invalidDate}
      />
      <View style={styles.submitButton}>
        <Button
          title={language.submit}
          onPress={sumbitHandler}
          disabled={!isFormValid}
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
