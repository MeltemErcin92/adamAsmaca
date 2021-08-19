import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hrApp';
  wordIndex = -1;
  targetWordArray: number[] = [];
  letter = '';
  constructor() {}
  ngOnInit(): void {
    this.wordIndex = Math.floor(
      Math.random() *
        (JSON.parse(localStorage.getItem('wordList') || '{}') as []).length
    );

    var arrayLength = (
      (
        (JSON.parse(localStorage.getItem('wordList') || '{}') as [])[
          this.wordIndex
        ] as any
      ).text as string
    ).length;
    for (let index = 0; index < arrayLength; index++) {
      this.targetWordArray.push(0);
    }
    console.log(this.wordIndex);
  }

  Guess(letter: string): void {
    var wordToFind = (
      JSON.parse(localStorage.getItem('wordList') || '{}') as []
    )[this.wordIndex];
    var isLetterExist = ((wordToFind as any).text as string).includes(letter);
    if (isLetterExist == false) {
      console.log(' Yanlış tahmin.');
    } else {
      console.log('Doğru Tahmin.');
    }
  }
}
