import { Component } from '@angular/core';
import { Link } from './models/link';
import * as myJson from '../assets/portfolio.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public links;

  constructor() {
    this.links = myJson['default']['links'] as Link[];
  }
  ngOnInit() {
  }

}
