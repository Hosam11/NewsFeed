import axios from 'axios';
import {Artical} from '../../models/Artical';

// https://newsapi.org/v2/everything?q=google&apiKey=d9ce33babd9e4d7eb85815d7c3a84f6c&page=1&pageSize=50

const _apiKey = 'b5b81d395dd145fda65c188d3f79c294';

const api = 'https://newsapi.org/v2/everything?q=google';
const postmanApi =
  'https://5851a8e1-1266-4e1f-b678-a8a9edce080e.mock.pstmn.io/news-api';

export const fetchNews = async (pageNumber: number) => {
  console.log('pageNumber: ' + pageNumber);
  if (pageNumber > 8) throw new Error('Page number increment rapidlly');
  // const url = `${postmanApi}?page=${pageNumber}`;
  const url = `${api}&apiKey=${_apiKey}&page=${pageNumber}`;
  console.log('fetchNews() >> url: ' + url);

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
          artical.urlToImage,
          artical.publishedAt,
          artical.content,
        ),
    );
  console.log(
    `fetchNews() >> page: ${pageNumber} articals.length: ${articals.length}`,
  );

  return articals;
};
