import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hello: string = 'Hello World !!!';
  isHidden: boolean = true;
  name: string = "Anonyme";
  fruits: string[] = ["pomme", "banane", "kiwi", "pomme", "fraise"];
  colorText: string = "blue";

  constructor() {}

  clickMe(){
    this.hello = "Phrase hello modifiée par le binding";
    this.isHidden = !this.isHidden;
  }
}
