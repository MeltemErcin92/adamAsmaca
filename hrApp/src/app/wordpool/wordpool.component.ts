import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpool',
  templateUrl: './wordpool.component.html',
  styleUrls: ['./wordpool.component.css'],
})
export class WordpoolComponent implements OnInit {
  word = { text: '', meaning: '' };
  wordList: any[] = [];
  isEditing: boolean = false;
  indexToEdit: number = -1;
  constructor() {}

  ngOnInit(): void {
    this.wordList =
      localStorage.getItem('wordList') != null
        ? JSON.parse(localStorage.getItem('wordList') || '{}')
        : [];
  }
  Save(): void {
    if (this.word.text.length < 4) {
      alert('Please  dont do  this. At least 4 letters accepted...');
      return;
    }
    if (this.isEditing == false) {
      this.wordList.push(this.word);
      localStorage.setItem('wordList', JSON.stringify(this.wordList));
      console.log(this.word);
      console.log(this.wordList);
      this.word = { text: '', meaning: '' };
    } else {
      this.wordList[this.indexToEdit] = this.word;
      localStorage.setItem('wordList', JSON.stringify(this.wordList));
      this.word = { text: '', meaning: '' };
    }
  }
  deleteRecord(item: any): void {
    var index = this.wordList.findIndex((x) => x.text == item.text);
    this.wordList.splice(index, 1);
    localStorage.setItem('wordList', JSON.stringify(this.wordList));
  }
  editRecord(item: any): void {
    this.indexToEdit = this.wordList.findIndex((x) => x.text == item.text);
    Object.assign(this.word, item);
    this.isEditing = true;
  }
}
