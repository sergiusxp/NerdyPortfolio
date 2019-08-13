import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import * as myJson from '../../../../assets/portfolio.json';
import { IContact } from '../models/contact.interface';
import { PortfolioSettings } from 'src/app/models/portfoliosettings.js';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  errorData: {};
  settings: PortfolioSettings;

  constructor(private http: HttpClient) {
    this.settings = myJson['default']['settings'] as PortfolioSettings;
  }

  contactForm(formData: IContact): Observable<any> {
    return this.http.post(this.settings.apiBaseUrl + this.settings.apiContact, formData)
  }
}