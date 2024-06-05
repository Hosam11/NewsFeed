import React, {
  createContext,
  useState,
  PropsWithChildren,
  useCallback,
} from 'react';
import {Artical} from '../models/Artical';

export const ArticlesContext = createContext<{
  articles: Artical[];
  filtredArticles: Artical[];
  setNewArticles: (articles: Artical[]) => void;
  updateArticales: (articles: Artical[]) => void;
  filterArticlesHandler: (articles: string) => void;
}>({
  articles: [],
  filtredArticles: [],
  setNewArticles: (articles: Artical[]) => {},
  updateArticales: () => {},
  filterArticlesHandler: (articles: string) => {},
});

export const ArticlesProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [articles, assignArticales] = useState<Artical[]>([]);
  const [filtredArticles, assignFiltredArticles] = useState<Artical[]>([]);

  const setNewArticles = (articles: Artical[]) => {
    assignArticales(articles);
    assignFiltredArticles(articles);
  };

  const updateArticales = useCallback((articles: Artical[]) => {
    assignArticales((prevArticles: Artical[]) => [
      ...prevArticles,
      ...articles,
    ]);
    assignFiltredArticles(prevArticles => [...prevArticles, ...articles]);
  }, []);

  const setFiltredArticales = (searchText: string) => {
    if (searchText === '') {
      assignFiltredArticles(articles);
    } else {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      assignFiltredArticles(filtered);
    }
  };

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        filtredArticles,
        setNewArticles,
        updateArticales,
        filterArticlesHandler: setFiltredArticales,
      }}>
      {children}
    </ArticlesContext.Provider>
  );
};
