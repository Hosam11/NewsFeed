import {useCallback, useContext, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, View} from 'react-native';
import {fetchNews} from '../../Network/http';
import ArticalItem from './ArticleItem';
import ErrorView from '../../UI/ErrorView';
import {ArticlesContext} from '../../../store/articals-context';

const ArticalList: React.FC = () => {
  const articalesContext = useContext(ArticlesContext);
  const [error, setError] = useState<string>('');
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (page: number) => {
    console.log('fetchData called');
    try {
      const articlesData = await fetchNews(page);
      setError('');
      return articlesData;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setError(message);
      setRefreshing(false);
      setLoading(false);
      return [];
    }
  }, []);

  useEffect(() => {
    const fetchInitalData = async () => {
      setLoading(true);
      const initalArticals = await fetchData(page);
      setLoading(false);
      console.log('useEffect called');
      articalesContext.updateArticales(initalArticals);
    };
    fetchInitalData();
  }, [page, fetchData]);

  const handleRefresh = async () => {
    setRefreshing(true);
    const newArticals = await fetchData(1);
    articalesContext.setNewArticles(newArticals);

    setRefreshing(false);
  };

  const handleLoadingMore = () => {
    console.log('handleLoadingMore called: ' + page);
    setPage((prevPage: number) => prevPage + 1);
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <ActivityIndicator
        style={{marginVertical: 20}}
        size="large"
        color="#0000ff"
      />
    );
  };
  console.log('error: ' + error);
  console.log('currentArticalesLen: ' + articalesContext.articles.length);
  const showError = error && !loading && !refreshing;
  console.log(' showError >> ' + showError);
  return (
    <>
      {showError && <ErrorView errorMessage={error} onPress={handleRefresh} />}
      {!showError && (
        <FlatList
          data={articalesContext.filtredArticles}
          renderItem={({item}) => <ArticalItem article={item} />}
          keyExtractor={() =>
            `{${Math.random().toString()}${new Date().toISOString()}}`
          }
          onEndReached={handleLoadingMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={['#9Bd35A', '#689F38']}
              progressBackgroundColor="#fff"
            />
          }
        />
      )}
    </>
  );
};

export default ArticalList;
