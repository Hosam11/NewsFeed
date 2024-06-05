import React, {createContext, useState, PropsWithChildren} from 'react';
import {Artical} from '../models/Artical';

export const ArticlesContext = createContext<{
  articles: Artical[];
  setNewArticles: (articles: Artical[]) => void;
  updateArticales: (articles: Artical[]) => void;
}>({
  articles: [],
  setNewArticles: (articles: Artical[]) => {},
  updateArticales: (articles: Artical[]) => {},
});

export const ArticlesProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [articles, assignArticales] = useState<Artical[]>([]);

  const setNewArticles = (articles: Artical[]) => {
    assignArticales(articles);
  };

  const updateArticales = (articles: Artical[]) => {
    assignArticales((prevArticles: Artical[]) => [
      ...prevArticles,
      ...articles,
    ]);
  };

  return (
    <ArticlesContext.Provider
      value={{articles, setNewArticles, updateArticales}}>
      {children}
    </ArticlesContext.Provider>
  );
};
