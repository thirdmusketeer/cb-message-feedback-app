export class Suggestion {
  text: string;
  index: number;
  logprobs?: any;
  finish_reason: string;

  rating?: boolean;
  rated?: boolean;
  loading?: boolean;

  constructor(
    text: string,
    index: number,
    logprobs: string,
    finish_reason: string
  ) {
    this.text = text;
    this.index = index;
    this.logprobs = logprobs;
    this.finish_reason = finish_reason;
  }
}
