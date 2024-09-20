import { Component, OnInit } from '@angular/core';
import { Weather } from '../Result/weather';
import { WeatherapiService } from '../Service/weatherapi.service';


@Component({
  selector: 'app-weather-body',
  templateUrl: './weather-body.component.html',
  styleUrls: ['./weather-body.component.css']
})


export class WeatherBodyComponent implements OnInit {

  icon : string = "09d";
  city : string = "New York";
  response : any | undefined;
  temp_type : string = "celsius";
  temp_symbol : string = "C";

  constructor(private weatherService : WeatherapiService, public obj : Weather) {    }



  ngOnInit(): void {
    // this.setCity("Karimnagar");
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        if (position) {

          console.log("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude + "\nAccuracy: " + position.coords.accuracy/1000);
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;

          this.response = this.weatherService.getWeatherFromLatLong(lat,lng)

        }
      },
        (error: GeolocationPositionError) => {
          console.log(error);
          // alert("Location permission denied. Defaulting to Karimnagar.!");
          this.toastMessage();
          this.getWeatherForCity("Kukatpally");
        })

    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }



  getWeatherForCity(cityName : string){

    this.temp_symbol = this.temp_type == "celsius"? "C" : "F";

    console.log("🚀 ~~ file: weather-body.component.ts ~~ line 24 ~~ cityName", cityName);
    console.log("Celcius or Farenheit : ", this.temp_type);
    console.log("temp_symbol : ", this.temp_symbol);
    this.weatherService.units = this.temp_type;
    this.obj = this.weatherService.getWeatherFromCity(cityName.replace(" ", "%20"));



  }


  toastMessage() {
    let x = document.getElementById("snackbar");
    x!.className = "show";
    setTimeout(
      function() {
        x!.className = x!.className.replace("show", "");
      }, 3000);
  }
}

