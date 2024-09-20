import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../ApiResponse/root';
import { Weather } from '../Result/weather';
import { WeatherBodyComponent } from '../weather-body/weather-body.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(private http: HttpClient, private weatherResponseReturnObj : Weather) { }

  units : string = "";

  baseUrl : string = "https://api.openweathermap.org/data/2.5/weather";
  appid : string = `&appid=${environment.API_KEY}`;

  url2 = "&units=metric";


  getWeatherFromLatLong(lat: number, lng: number) : Weather {

    // https://api.openweathermap.org/data/2.5/weather?lat=17.3753&lon=78.474&appid=0c3c357cbb2ceacfc2544131a21c4cdd

    this.url2 = this.units == "farenheit"? "&units=imperial" : "&units=metric";

    let link = `${this.baseUrl}?lat=${lat}&lon=${lng}${this.appid}${this.url2}`;

    console.log("🚀 ~~ file: weatherapi.service.ts:25 ~~ link:", link);

    let observableResponse = this.http.get<Root>(link, {  } );

    this.processResponse(observableResponse);
    console.log("🚀 ~~ file: weatherapi.service.ts:31 ~~ this.weatherResponseReturnObj:", this.weatherResponseReturnObj);

    return this.weatherResponseReturnObj;

  }



  getWeatherFromCity(city : string) : Weather {

    this.url2 = this.units == "farenheit"? "&units=imperial" : "&units=metric";

    let link =  `${this.baseUrl}?q=${city}${this.appid}${this.url2}`;
    console.log("🚀 ~~ file: weatherapi.service.ts:30 ~~ link:", link);

    let observableResponse = this.http.get<Root>(link, {  } );

    this.processResponse(observableResponse);
    console.log("🚀 ~~ file: weatherapi.service.ts:31 ~~ this.weatherResponseReturnObj:", this.weatherResponseReturnObj);
    return this.weatherResponseReturnObj;

  }







  processResponse(observableResponse : Observable<Root>) {


    // deprecated subscribe method


    // observableResponse.subscribe(
    //   result => {
    //     console.log(result);
    //     this.weatherResponseReturnObj.description = result.weather[0].main;
    //     this.weatherResponseReturnObj.icon = result.weather[0].icon;
    //     this.weatherResponseReturnObj.name = result.name;
    //     this.weatherResponseReturnObj.feel_like = result.main.feels_like;
    //     this.weatherResponseReturnObj.max_temp = result.main.temp_max;
    //     this.weatherResponseReturnObj.min_temp = result.main.temp_min;
    //     this.weatherResponseReturnObj.temp = result.main.temp;
    //     this.weatherResponseReturnObj.speed = result.wind.speed;

    //   },
    //   error => {
    //     console.log(error);

    //   },
    //   () => {
    //     console.log("Fetch Completed !");

    //   }
    // );

    observableResponse.subscribe({
      next : result => {
        console.log(result);
        this.weatherResponseReturnObj.description = result.weather[0].main;
        this.weatherResponseReturnObj.icon = result.weather[0].icon;
        this.weatherResponseReturnObj.name = result.name;
        this.weatherResponseReturnObj.feel_like = result.main.feels_like;
        this.weatherResponseReturnObj.max_temp = result.main.temp_max;
        this.weatherResponseReturnObj.min_temp = result.main.temp_min;
        this.weatherResponseReturnObj.temp = result.main.temp;
        this.weatherResponseReturnObj.speed = result.wind.speed;
      },
      error : error => {
        console.log(error);
      },
      complete : () => {
        console.log("Fetch Completed !");
      }
    }
    )


  }




}
