import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-heading',
  templateUrl: './general-heading.component.html',
  styleUrls: ['./general-heading.component.css'],
})
export class GeneralHeadingComponent implements OnInit {
  @Input() text: string;

  ngOnInit(): void {}
}
