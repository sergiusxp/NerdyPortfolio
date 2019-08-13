import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portfolio-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comments;

  constructor(
  ) { }

  ngOnInit() {
  }

}
