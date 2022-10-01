import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL: string = 'http://0.0.0.0:8000/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getSuggestions(keywords: string) {
    return this._http.request('POST', API_URL + 'ai/message/', {
      body: {
        keywords,
      },
    });
  }

  rateMessage(keywords: string, message: string, rate: boolean) {
    return this._http.request('POST', API_URL + 'ai/rate/', {
      body: {
        keywords,
        message,
        rate,
      },
    });
  }

  getMessages() {
    return this._http.request('GET', API_URL + 'ai/messages/');
  }
}
