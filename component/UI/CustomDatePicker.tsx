import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import language from '../Strings';
import {formatDate} from '../../Util/utils';
import {sharedStyles} from './SharedStyles';

const CustomDatePicker: React.FC<{
  date: Date;
  open: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  onDatePress: () => void;
  errorText?: string;
}> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>
        {`${language.bDate}: ${formatDate(props.date)}`}
      </Text>
      <Button title="Select brith date" onPress={props.onDatePress} />
      <DatePicker
        modal
        open={props.open}
        date={props.date}
        mode="date"
        onConfirm={props.onConfirm}
        onCancel={props.onCancel}
      />
      {props.errorText && <Text style={sharedStyles.error}>Error</Text>}
    </View>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  dateText: {
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#fff',
    padding: 10,
    borderColor: 'grey',
  },
});
