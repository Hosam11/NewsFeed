import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {sharedStyles} from './SharedStyles';

const CustomDropDown: React.FC<{
  itemtOptions: {label: string; value: string}[];
  placeholder: string;
  errorText?: string;
}> = props => {
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        data={props.itemtOptions}
        labelField="label"
        valueField="value"
        placeholder={props.placeholder}
        // value={gender}
        onChange={item => {
          console.log('item.value: ' + item.value);
        }}
      />
      {props.errorText && <Text style={sharedStyles.error}>Error</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 0.5,
    paddingHorizontal: 8,
    marginBottom: 20,
    backgroundColor: 'white',
    fontSize: 18,
  },
});

export default CustomDropDown;
