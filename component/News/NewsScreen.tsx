import {StyleSheet, View} from 'react-native';

import ArticalList from './ArticalList';
import {ArticlesProvider} from '../../store/articals-context';

const NewsScreen: React.FC = () => {
  return (
    <ArticlesProvider>
      <View style={styles.container}>
        <ArticalList />
      </View>
    </ArticlesProvider>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
