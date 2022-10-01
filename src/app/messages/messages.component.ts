import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  loading: boolean = false;
  messages: Message[] = [];
  constructor(private _apiService: ApiService) {}

  getMessags() {
    this.loading = true;
    this._apiService.getMessages().subscribe((response: any) => {
      this.messages = <Message[]>response;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.getMessags();
  }
}
