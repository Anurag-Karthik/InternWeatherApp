import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-text',
  templateUrl: './temp-text.component.html',
  styleUrls: ['./temp-text.component.css'],
})
export class TempTextComponent implements OnInit {
  @Input() text: string;

  ngOnInit(): void {}

  getTemp(): void {}
}
