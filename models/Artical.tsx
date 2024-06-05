type NewsSource = {id: string | null; name: string};

export class Artical {
  source: NewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;

  constructor(
    source: NewsSource,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: Date,
    content: string,
  ) {
    this.source = source;
    this.author = author;
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
    this.publishedAt = publishedAt;
    this.content = content;
  }
}
