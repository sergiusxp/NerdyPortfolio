import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portfolio-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() section;

  constructor() { }

  ngOnInit() {
  }

}
