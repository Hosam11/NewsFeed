import {StyleSheet, Text, View} from 'react-native';
import UserForm from './UserForm';
import language from '../Strings';
import ThemeText from '../UI/ThemeText';

const UserInfoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ThemeText style={styles.title}>{language.addYourData}</ThemeText>
      <UserForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    padding: 16,
    marginTop: 16,
    color: 'Black',
  },
});

export default UserInfoScreen;
