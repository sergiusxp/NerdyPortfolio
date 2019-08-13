import { Component, OnInit, Input } from '@angular/core';
import * as myJson from '../../../assets/portfolio.json';
import { Portfolio } from '../../models/portfolio';
import { PortfolioSettings } from 'src/app/models/portfoliosettings.js';

@Component({
  selector: 'portfolio-mainclass',
  templateUrl: './mainclass.component.html',
  styleUrls: ['./mainclass.component.scss']
})
export class MainclassComponent implements OnInit {

  public portfolio: Portfolio;
  public settings: PortfolioSettings;
  
  constructor(
  ) {
    this.portfolio = myJson['default'] as Portfolio;
    this.settings = this.portfolio.settings;
  }

  ngOnInit() {
  }

}
