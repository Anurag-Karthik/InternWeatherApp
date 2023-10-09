import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from './get-weather.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  city = '';
  temp = '0';
  showLoadingSpinner: boolean = true;
  constructor(
    private spinner: NgxSpinnerService,
    private getWeatherService: GetWeatherService,
    private HTTP: HttpClient
  ) {}

  ngOnInit(): void {
    this.getCityTemp(this.city);
  }

  async getCityTemp(city: string): Promise<void> {
    if (city == '') {
      this.spinner.show();
      let observableCity = await this.HTTP.get('https://ipapi.co/json/');

      observableCity
        .pipe(
          map((data: any) => data['city']),
          catchError((err: HttpErrorResponse) => {
            alert('An Error Has Occured!');
            this.getCityTemp('');
            return of(null);
          })
        )
        .subscribe((city) => {
          this.city = city;
          this.getTemp();
        });
    } else {
      this.city = city;
      this.getTemp();
    }
  }

  async getTemp(): Promise<void> {
    let observableWeather = await this.HTTP.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        this.city +
        '&appid=bde2e96fd21f5d9a95c51dd9522acebe&units=metric'
    );

    observableWeather
      .pipe(
        map((data: any) => data),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 404) {
            alert('Invalid City. Please Enter a Proper City Name');
          } else {
            alert('An Error Has Occured!');
          }
          this.getCityTemp('');
          return of(null);
        })
      )
      .subscribe((temp) => {
        if (temp) {
          this.spinner.hide();
          this.temp = temp.main.temp + '';
          this.temp = this.temp.split('.')[0];
        }
      });
  }

  getCityfromUser(data: any): void {
    this.city = data;
  }
}
