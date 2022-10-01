export class Message {
  id: number;
  keywords: string;
  message: string;
  rating: boolean;

  constructor(id: number, keywords: string, message: string, rating: boolean) {
    this.id = id;
    this.keywords = keywords;
    this.message = message;
    this.rating = rating;
  }
}
