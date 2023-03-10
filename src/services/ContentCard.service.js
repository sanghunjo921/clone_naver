import { mockContentCards } from "./mockData";

class ContentCardService {
  constructor() {
    this.count = 9;
    this.page = 1;
    this.currentData = [];
    this.data = mockContentCards();
  }

  getCurrentData() {
    const start = (this.page - 1) * this.count + 1;
    const targetEnd = this.count * this.page;
    const end = targetEnd <= this.data.length ? targetEnd : this.data.length;
    return this.data.slice(start - 1, end);
  }

  getNextData() {
    if (this.isLastPage()) {
      return [];
    }
    this.page++;
    return this.getCurrentData();
  }

  isLastPage() {
    const currentData = this.getCurrentData();
    return (
      currentData.length !== this.count ||
      this.data[this.data.length - 1] === currentData[this.count - 1]
    );
  }
}

export const contentCardService = new ContentCardService();
