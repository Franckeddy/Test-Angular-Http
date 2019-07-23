import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isAuth = false;

  devices = [
    {
      name: 'Télévision',
      status: 'Off'
    },
    {
      name: 'Ordinateur',
      status: 'On'
    },
    {
      name: 'Tablette',
      status: 'Off'
    }
  ];

  Status1 = 'On';
  Status2 = 'Off';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onTurnon() {
    console.log('on allume tout');
  }
}
