import {useLayoutEffect, useState} from 'react';
import {getUserInfo} from '../Storage/Storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsScreen from '../News/NewsScreen/NewsScreen';
import SettingScreen from '../Settings/SettingScreen';
import UserInfoScreen from '../User/UserInfoScreen';
import Loading from '../UI/Loading';
import NewsDetailsScreen from '../News/NewsDetailsScreen/NewsDetailsScreen';
import {RootStackParamList} from '../../Util/types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{
          headerLeft: () => null,
          tabBarLabel: 'News',
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          headerLeft: () => null,
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

const Root: React.FC = () => {
  const [firstTime, setFirstTime] = useState(false);
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    const checkIfUserExists = async () => {
      const data = await getUserInfo();
      const isFirstTime = data === false;
      setFirstTime(isFirstTime);
      setLoading(false);
    };
    checkIfUserExists();
  }, []);

  const mainView = (
    <NavigationContainer>
      <Stack.Navigator>
        {firstTime && (
          <Stack.Screen
            name="UserInfoScreen"
            component={UserInfoScreen}
            options={{
              title: 'User information',
            }}
          />
        )}
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="NewsDetailsScreen" component={NewsDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  return loading ? <Loading /> : mainView;
};

export default Root;
