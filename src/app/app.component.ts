import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular kurs - property binding';
  inputText = "Pole tekstowe";
  inputText2Way = "";
  button = true;
  showClick = '';

  click(event) {
    this.showClick = 'Przycisk aktywny';
    this.button = false;
  }
}
