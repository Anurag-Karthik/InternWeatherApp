import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css'],
})
export class CityFormComponent implements OnInit {
  @Output() onGetCityWeather: EventEmitter<string> = new EventEmitter();
  cityText: string;

  ngOnInit(): void {}

  getCityWeather(): void {
    if (!this.cityText) {
      alert('Please Enter a City');
      return;
    }

    this.onGetCityWeather.emit(this.cityText);

    this.cityText = '';
  }
}
