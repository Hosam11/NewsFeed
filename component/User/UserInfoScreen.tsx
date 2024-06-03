import {StyleSheet, Text, View} from 'react-native';
import UserForm from './UserForm';
import language from '../Strings';

const UserInfoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{language.addYourData}</Text>
      <UserForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
  },
  title: {
    fontSize: 26,
    padding: 16,
    marginTop: 16,
    textAlign: 'center',
    color: 'Black',
  },
});

export default UserInfoScreen;
