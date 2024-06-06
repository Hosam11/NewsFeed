import {StyleSheet} from 'react-native';

import ArticalList from './ArticleList';
import {ArticlesProvider} from '../../../store/articals-context';
import SearchComponent from '../SearchComponent';
import ThemeView from '../../UI/ThemeView';

const NewsScreen: React.FC = () => {
  return (
    <ArticlesProvider>
      <ThemeView style={styles.container}>
        <SearchComponent />
        <ArticalList />
      </ThemeView>
    </ArticlesProvider>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
