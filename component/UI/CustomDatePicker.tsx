import React, {useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {formatDate} from '../../Util/utils';
import InputErrorView from './InputErrorView';
import ThemeText from './ThemeText';
import {ThemeContext} from '../../store/theme-context';
import {colors} from './Colors';
import {getLocalizationText} from '../../Util/lang';
import {LanguageContext} from '../../store/language-context';

const CustomDatePicker: React.FC<{
  date: Date;
  open: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  onDatePress: () => void;
  errorText?: string;
}> = props => {
  const themeContext = useContext(ThemeContext);
  const localContext = useContext(LanguageContext);
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
        {`${getLocalizationText('bDate')}: ${formatDate(props.date)}`}
      </ThemeText>

      <InputErrorView errorText={props.errorText} />
      <DatePicker
        modal
        theme={themeContext.isDarkTheme() ? 'dark' : 'light'}
        open={props.open}
        date={props.date}
        locale={localContext.langCode}
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
