import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import * as myJson from '../../../../assets/portfolio.json';
import { IContact } from '../models/contact.interface';
import { PortfolioSettings } from 'src/app/models/portfoliosettings';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: IContact;
  errorMessage: string;
  settings: PortfolioSettings;

  constructor(
    public contactService: ContactService
  ) {
    this.settings = myJson['default']['settings'] as PortfolioSettings;
    this.model = { name: "", surname: "", email: "", choice: "general", comment: "" };
  }

  ngOnInit() {
  }

  onSubmit() {
    let x = 
    this.contactService.contactForm(this.model)
      .subscribe(
        data => {
          this.errorMessage = "";
        },
        error => { this.errorMessage = error.message; }
      );
    return x;
  }

  retry() {
    this.errorMessage = undefined;
  }
}
