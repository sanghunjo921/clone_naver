export class ContentCardModel {
  constructor(image, title, provider, publishedDate = new Date()) {
    this.image = image;
    this.title = title;
    this.provider = provider;
    this.publishedDate = publishedDate;
  }

  convertDate() {
    const today = new Date();
    return this.calculateDte(today, this.publishedDate);
  }

  calculateDte(curr, target) {
    const dateDifference =
      Math.floor(Math.abs(curr - target)) / (1000 * 60 * 60);
    if (dateDifference > 24) {
      dateDifference = dateDifference / 24;
    }
    return dateDifference;
  }
}
