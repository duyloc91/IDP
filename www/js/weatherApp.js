var app = angular.module("app", []);

app.controller("AppCtrl", function($http) {
    var app = this;
    
    app.weatherIcon = function(number){
        switch (number){
            case 200, 201, 202, 210: return "ion-ios7-thunderstorm-outline";break;
            case 211, 212, 221, 230, 231, 232: return "ion-ios7-thunderstorm";break;
            case 300, 301, 302, 310, 311, 312, 313, 314, 321: return "ion-ios7-rainy-outline";break;
            case 500, 501, 502, 503, 504, 511, 520, 521, 522, 531: return "ion-ios7-rainy-outline";break;
            case 600, 601, 602, 611, 612, 615, 616, 620, 621, 622: return "ion-ios7-snowy-outline";break;
            case 701, 711, 721, 731, 741, 751, 761, 762, 771, 781: return "ion-ios7-cloud-outline";break;
            case 800: return "ion-ios7-sunny-outline";break;
            case 801: return "ion-ios7-partlysunny-outline" ;break;
            case 803: return "ion-ios7-cloud-outline";break;
            case 804: return "ion-ios7-cloud-outline";break;
            default: return "ion-ios7-partlysunny-outline";break;
        }
    }
    
    $http.get("http://api.openweathermap.org/data/2.5/forecast?id=1880252")
      .success(function(data) {
        app.weather = data;
        app.todayTemp = Math.round((data.list[0].main.temp - 273.15)*10)/10;
        app.tmrTemp = Math.round((data.list[8].main.temp - 273.15)*10)/10;
        app.tmr1Temp = Math.round((data.list[16].main.temp - 273.15)*10)/10;
        app.tmr2Temp = Math.round((data.list[24].main.temp - 273.15)*10)/10;
        
        app.todayWeather = app.weatherIcon(data.list[0].weather[0].id);
        app.tmrWeather = app.weatherIcon(data.list[8].weather[0].id);
        app.tmr1Weather = app.weatherIcon(data.list[16].weather[0].id);
        app.tmr2Weather = app.weatherIcon(data.list[24].weather[0].id);
      })
      
    
    var today = new Date().getDay();
    switch (today)
    {
        case 1: app.today = "Monday";app.tmr = "Tuesday";app.tmr1 = "Wednesday"; app.tmr2 = "Thursday";
        break;
        case 2: app.today = "Tuesday";app.tmr = "Wednesday";app.tmr1 = "Thursday"; app.tmr2 = "Friday";
        break;
        case 3: app.today = "Wednesday";app.tmr = "Thursday";app.tmr1 = "Friday"; app.tmr2 = "Saturday";
        break;
        case 4: app.today = "Thursday";app.tmr = "Friday";app.tmr1 = "Saturday"; app.tmr2 = "Sunday";
        break;
        case 5: app.today = "Friday";app.tmr = "Saturday";app.tmr1 = "Sunday"; app.tmr2 = "Monday";
        break;
        case 6: app.today = "Saturday";app.tmr = "Sunday";app.tmr1 = "Monday"; app.tmr2 = "Tuesday";
        break;
        case 7: app.today = "Sunday";app.tmr = "Monday";app.tmr1 = "Tuesday"; app.tmr2 = "Wednesday";
        break;
        default: app.today = "Today";app.tmr = "Tomorrow";app.tmr1 = "Next"; app.tmr2 = "Next";
    }
})