import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpool',
  templateUrl: './wordpool.component.html',
  styleUrls: ['./wordpool.component.css'],
})
export class WordpoolComponent implements OnInit {
  word = { text: '', meaning: '' };
  wordList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.wordList =
      localStorage.getItem('wordList') != null
        ? JSON.parse(localStorage.getItem('wordList') || '{}')
        : [];
  }
  Save(): void {
    this.wordList.push(this.word);
    localStorage.setItem('wordList', JSON.stringify(this.wordList));
    console.log(this.word);
    console.log(this.wordList);
    this.word = { text: '', meaning: '' };
  }
}
