import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'harfAppWithBulma';
  guney = 'correct';

  randomText= faker.lorem.sentence(5);
  enteredText = '';

  getInputValue(value: string)
  {
    console.log(this.randomText.split(''));
    this.enteredText=value;

  }

  compare(randomLetter: string , enteredLetter: string)
  {
   if(!enteredLetter)
   {
     return 'pending';
   }

   return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
