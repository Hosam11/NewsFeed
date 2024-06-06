import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Artical} from '../../../models/Artical';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../Util/types';
import ThemeView from '../../UI/ThemeView';
import ThemeText from '../../UI/ThemeText';

const ArticalItem: React.FC<{article: Artical}> = ({article}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('NewsDetailsScreen', {article});
      }}>
      <ThemeView style={styles.card}>
        <Image source={{uri: article.urlToImage}} style={styles.image} />
        <ThemeText style={styles.title}>{article.title}</ThemeText>
      </ThemeView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default ArticalItem;
