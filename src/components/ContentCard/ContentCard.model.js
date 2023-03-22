export class ContentCardModel {
  constructor(image, title, provider, publishedDate = new Date("2023-03-09")) {
    this.image = image;
    this.title = title;
    this.provider = provider;
    this.publishedDate = publishedDate;
  }

  getDate() {
    const today = new Date();
    return this.calculateDate(today, this.publishedDate);
  }

  calculateDate(curr, target) {}
}
