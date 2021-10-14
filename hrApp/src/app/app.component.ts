import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hrApp';
  wordIndex = -1;
  //çizilecek kutucuk sayısı
  targetWordArray: any[] = [];
  hintWordArray: any[] = [];
  letter = '';
  constructor() { }
  ngOnInit(): void {
    this.wordIndex = Math.floor(
      Math.random() *
      (JSON.parse(localStorage.getItem('wordList') || '{}') as []).length
    );
    // burda rasgele seçilen kelimenin harf uzunluğu hesaplanıyor.
    var arrayLength = (
      (
        (JSON.parse(localStorage.getItem('wordList') || '{}') as [])[
        this.wordIndex
        ] as any
      ).text as string
    ).length;
    for (let index = 0; index < arrayLength; index++) {
      this.targetWordArray.push({ index: index, letter: "" });
    }
    console.log(this.wordIndex);
  }

  Guess(letter: string): void {
    var wordToFind = (
      JSON.parse(localStorage.getItem('wordList') || '{}') as []
    )[this.wordIndex];
    if (letter != "") {
      var isLetterExist = ((wordToFind as any).text as string).toLocaleUpperCase().includes(letter.toLocaleUpperCase());
      if (isLetterExist == false) {
        console.log(' Yanlış tahmin.');
      } else {
        console.log('Doğru Tahmin.');
        for (let index = 0; index < (wordToFind as any).text.length; index++) {
          const element = (wordToFind as any).text[index];
          if (element.toLocaleUpperCase() == letter.toLocaleUpperCase()) {
            this.targetWordArray[index].letter = letter.toLocaleUpperCase();

          }
        }
        this.letter = "";
      }
    } else {
      console.log('Bir şeyler yaz :)');
    }

  }

  Hint(): void {
    var word = (
      (JSON.parse(localStorage.getItem('wordList') || '{}') as [])[
      this.wordIndex
      ] as any
    ).text as string;
    var randomLetterIndex = Math.floor(Math.random() * word.length);
    if (this.targetWordArray[randomLetterIndex].letter != "") {
      this.Hint();
    }
    this.targetWordArray[randomLetterIndex].letter = word[randomLetterIndex];
  }
}
