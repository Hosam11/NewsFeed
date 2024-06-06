import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import InputErrorView from './InputErrorView';
import {GenderType} from '../../Util/types';
import {useContext} from 'react';
import {ThemeContext} from '../../store/theme-context';
import {colors} from './Colors';

const CustomDropDown: React.FC<{
  itemtOptions: {label: string; value: string}[];
  placeholder: string;
  errorText?: string;
  gender?: GenderType;
  onChange: (item: {label: string; value: string}) => void;
}> = props => {
  const themeContext = useContext(ThemeContext);
  const textColor = themeContext.isDarkTheme()
    ? colors.dark.title
    : colors.light.title;

  const valueColor = themeContext.isDarkTheme()
    ? colors.dark.value
    : colors.light.value;

  const backgroundColor = themeContext.isDarkTheme()
    ? colors.dark.background
    : colors.light.background;
  return (
    <View>
      <Dropdown
        style={[styles.dropdown, {borderColor: textColor}]}
        data={props.itemtOptions}
        labelField="label"
        valueField="value"
        placeholder={props.placeholder}
        value={props.gender}
        onChange={props.onChange}
        iconColor={valueColor}
        selectedTextStyle={{color: textColor, backgroundColor: backgroundColor}}
        placeholderStyle={{color: valueColor}}
        itemTextStyle={{color: valueColor}}
        itemContainerStyle={{backgroundColor: backgroundColor}}
        containerStyle={{backgroundColor: backgroundColor}}
      />
      <InputErrorView errorText={props.errorText} />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderWidth: 1.5,
    paddingHorizontal: 8,
    fontSize: 18,
  },

  textItem: {
    fontSize: 18,
    padding: 16,
  },
});

export default CustomDropDown;
