import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';

import ArticalList from './ArticleList';
import {ArticlesProvider} from '../../../store/articals-context';
import SearchComponent from '../SearchComponent';

const NewsScreen: React.FC = () => {
  return (
    <ArticlesProvider>
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <View>
          <SearchComponent />
          <ArticalList />
        </View>
      </KeyboardAvoidingView>
    </ArticlesProvider>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
