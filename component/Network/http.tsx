import axios from 'axios';
import {Artical} from '../../models/Artical';

const _apiKey = 'b5b81d395dd145fda65c188d3f79c294';

const api = 'https://newsapi.org/v2/everything?q=google';

export const fetchNews = async (pageNumber: number) => {
  const url = `${api}&apiKey=${_apiKey}&page=${pageNumber}`;

  const response = await axios.get(url);
  console.log('status: ' + response.status);

  if (!response.status) {
    throw new Error('Something went wrong!');
  }

  const articals: Artical[] = response.data.articles
    .filter((artical: Artical) => artical.title !== `[Removed]`)
    .map(
      (artical: Artical) =>
        new Artical(
          artical.source,
          artical.author,
          artical.title,
          artical.description,
          artical.url,
          artical.urlToImage ?? 'https://via.placeholder.com/150',
          artical.publishedAt,
          artical.content,
        ),
    );

  return articals;
};
