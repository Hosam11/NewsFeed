import {useEffect, useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {getUserInfo} from '../Storage/Storage';
import {UserInfo} from '../../models/UserInfo';
import {formatDate} from '../../Util/utils';

const SettingScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    console.log('SettingScreen useEffect');
    const getUserData = async () => {
      const user = await getUserInfo();
      if (user instanceof UserInfo) {
        setUserInfo(user);
      }
    };
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <Text style={styles.value}>{userInfo?.fName}</Text>

      <Text style={styles.label}>Phone Number</Text>
      <Text style={styles.value}>{userInfo?.phoneNumber}</Text>

      <Text style={styles.label}>Gender</Text>
      <Text style={styles.value}>{userInfo?.gender}</Text>

      <Text style={styles.label}>Birth Date</Text>
      <Text style={styles.value}>
        {formatDate(userInfo?.bDate ?? new Date())}
      </Text>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Language</Text>
        <Switch value={true} onValueChange={() => {}} />
      </View>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Theme</Text>
        <Switch value={false} onValueChange={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#000',
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  toggleLabel: {
    fontSize: 18,
    color: '#000',
  },
});

export default SettingScreen;
