import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import language from '../Strings';
import {formatDate} from '../../Util/utils';
import ErrorView from './ErrorView';

const CustomDatePicker: React.FC<{
  date: Date;
  open: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  onDatePress: () => void;
  errorText?: string;
}> = props => {
  return (
    <Pressable onPress={props.onDatePress}>
      <Text style={styles.dateText}>
        {`${language.bDate}: ${formatDate(props.date)}`}
      </Text>
      <ErrorView errorText={props.errorText} />
      <DatePicker
        modal
        open={props.open}
        date={props.date}
        mode="date"
        onConfirm={props.onConfirm}
        onCancel={props.onCancel}
      />
    </Pressable>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  dateText: {
    fontSize: 18,
    backgroundColor: '#fff',
    padding: 10,
    color: 'black',
    borderColor: 'grey',
  },
});