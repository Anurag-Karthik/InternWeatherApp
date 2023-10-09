import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetWeatherService {
  city: string;
  gotCity: boolean = false;

  constructor(private HTTP: HttpClient) {}

  async getCity(): Promise<void> {}
}
