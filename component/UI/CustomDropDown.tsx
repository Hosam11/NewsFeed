import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import InputErrorView from './InputErrorView';
import { GenderType } from '../../Util/types';

const CustomDropDown: React.FC<{
  itemtOptions: {label: string; value: string}[];
  placeholder: string;
  errorText?: string;
  gender?: GenderType;
  onChange: (item: {label: string; value: string}) => void;
}> = props => {
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        data={props.itemtOptions}
        labelField="label"
        valueField="value"
        placeholder={props.placeholder}
        value={props.gender}
        onChange={props.onChange}
      />
      <InputErrorView errorText={props.errorText} />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1.5,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    fontSize: 18,
    color: 'black',
  },

  textItem: {
    color: 'black', // Set your desired text color here
    fontSize: 18,
    padding: 16,
  },
});

export default CustomDropDown;
