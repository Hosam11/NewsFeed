import {useCallback, useContext, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import {fetchNews} from '../Network/http';
import {Artical} from '../../models/Artical';
import ArticalItem from './ArticalItem';
import ErrorView from '../UI/ErrorView';
import {ArticlesContext} from '../../store/articals-context';

const ArticalList: React.FC = () => {
  const [error, setError] = useState<string>('');

  // const [articals, setArticals] = useState<Artical[]>([]);
  const articalesContext = useContext(ArticlesContext);
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
      // setArticals((prevArtical: Artical[]) => {
      //   return [...prevArtical, ...initalArticals];
      // });
      articalesContext.updateArticales(initalArticals);
    };
    fetchInitalData();
  }, [page, fetchData]);

  const handleRefresh = async () => {
    setRefreshing(true);
    const newArticals = await fetchData(1);
    // setArticals(newArticals);
    articalesContext.setNewArticles(newArticals);

    setRefreshing(false);
  };

  const handleLoadingMore = () => {
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

  return (
    <>
      <FlatList
        data={articalesContext.articles}
        renderItem={({item}) => <ArticalItem artical={item} />}
        keyExtractor={index =>
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

      {error && !loading && !refreshing && (
        <ErrorView errorMessage={error} onPress={handleRefresh} />
      )}
    </>
  );
};

export default ArticalList;
