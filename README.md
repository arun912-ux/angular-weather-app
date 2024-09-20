# AngularWeatherApp

# Angular Weather App

## Overview

This is a simple Angular Weather App that fetches and displays weather information using the OpenWeatherMap API. Users can search for a city and get real-time weather updates, including temperature, humidity, and weather conditions.

## Features

- Search for current weather by city name
- Displays temperature in Celsius or Fahrenheit
- Shows humidity and weather conditions
<!-- - Responsive design for various devices -->

## Technologies Used

- **Angular**: Frontend framework for building the application
- **OpenWeatherMap API**: Provides weather data
- **HTML/CSS**: For structuring and styling the application

## Prerequisites

- Node.js (v14 or later)
- Angular CLI (v12 or later)

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/angular-weather-app.git
   cd angular-weather-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Obtain an OpenWeatherMap API key**:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) and get your API key.

4. **Configure the API key**:
   - Open `src/app/services/weather.service.ts` and replace `YOUR_API_KEY` with your actual OpenWeatherMap API key.

5. **Run the application**:
   ```bash
   ng serve
   ```

6. **Open your browser**:
   - Navigate to `http://localhost:4200` to view the app.

## Usage

1. Enter a city name in the search box.
2. Click the "Search" button to retrieve the weather information.
3. The app will display the current temperature, humidity, and weather conditions.

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, please create an issue or submit a pull request.

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/api) for providing weather data.
- [Angular](https://angular.io/) for the frontend framework.

