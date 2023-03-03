export class ContentCardModel {
  constructor(image, title, provider, publishedDate = new Date()) {
    this.image = image;
    this.title = title;
    this.provider = provider;
    this.publishedDate = publishedDate;
  }
}
