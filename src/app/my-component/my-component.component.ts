import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.sass']
})
export class MyComponentComponent implements OnInit {

  public title: string;

  public updateTitle() {
    this.title = 'toto';
  }

  constructor() {
  }

  ngOnInit() {
    this.title = 'titi';
  }

}
