import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ApiService } from '../api.service';
import { Suggestion } from '../models/suggestion';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css'],
})
export class RateComponent implements OnInit {
  keywordsFormGroup: FormGroup;
  loading: boolean = false;
  suggestions: Suggestion[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService
  ) {
    this.keywordsFormGroup = this._formBuilder.group({
      keywords: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  getSuggestions() {
    this.loading = true;
    this._apiService
      .getSuggestions(this.keywordsFormGroup.value.keywords)
      .subscribe((response: any) => {
        this.loading = false;
        console.log(response);
        this.suggestions = <Suggestion[]>response;
      });
  }

  onSubmit() {
    this.getSuggestions();
  }

  onRate(_suggestion: Suggestion, rating: boolean) {
    this.suggestions[_suggestion.index].rating = rating;
    this.suggestions[_suggestion.index].rated = true;
    this.suggestions[_suggestion.index].loading = true;
    this._apiService
      .rateMessage(
        this.keywordsFormGroup.value.keywords,
        _suggestion.text,
        rating
      )
      .subscribe((response: any) => {
        this.suggestions[_suggestion.index].loading = false;
      });
  }
}
