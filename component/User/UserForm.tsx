import {Button, StyleSheet, Text, View} from 'react-native';
import Input from '../UI/Input';
import language from '../Strings';
import CustomDropDown from '../UI/CustomDropDown';
import CustomDatePicker from '../UI/CustomDatePicker';
import {useState} from 'react';
const UserForm: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const genderOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];

  return (
    <View style={styles.form}>
      <Input placeholder={language.fName} />
      <Input placeholder={language.phoneNumber} keyboardType="phone-pad" />
      <CustomDropDown
        itemtOptions={genderOptions}
        placeholder={language.selectGender}
      />
      <CustomDatePicker
        date={date}
        onDatePress={() => setOpen(true)}
        onCancel={() => setOpen(false)}
        open={open}
        onConfirm={selectedDate => {
          setOpen(false);
          setDate(selectedDate);
        }}
      />
      <View style={styles.submitButton}>
        <Button title={language.submit} />
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
