import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import language from '../Strings';
import {formatDate} from '../../Util/utils';
import InputErrorView from './InputErrorView';
import ThemeText from './ThemeText';
import {ThemeContext} from '../../store/theme-context';
import {colors} from './Colors';

const CustomDatePicker: React.FC<{
  date: Date;
  open: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  onDatePress: () => void;
  errorText?: string;
}> = props => {
  const themeContext = useContext(ThemeContext);
  return (
    <Pressable onPress={props.onDatePress}>
      <ThemeText
        style={[
          styles.dateText,
          {
            borderColor: themeContext.isDarkTheme()
              ? colors.dark.title
              : colors.light.title,
          },
        ]}>
        {`${language.bDate}: ${formatDate(props.date)}`}
      </ThemeText>

      <InputErrorView errorText={props.errorText} />
      <DatePicker
        modal
        theme={themeContext.isDarkTheme() ? 'dark' : 'light'}
        open={props.open}
        date={props.date}
        mode="date"
        onConfirm={props.onConfirm}
        onCancel={props.onCancel}
        style={{
          backgroundColor: 'green',
        }}
      />
    </Pressable>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  dateText: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
  },
});
