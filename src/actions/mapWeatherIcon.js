export default function mapWeatherIcon(code) {
 switch(code) {
   case "0": //'tornado'
   case "1": //tropical storm
   case "2": //hurricane
   case "3": //severe thunderstorms
   case "4": // thunderstorms
     return "owi-11d";
   case "5": //	mixed rain and snow
   case "6": //	mixed rain and sleet
   case "7": //	mixed snow and sleet
   case "18": //	sleet
     return "owi-09d";
   case "8": //	freezing drizzle
   case "10": //	freezing rain
     return "owi-01d";
   case "9": //	drizzle
   case "11": // showers
   case "12": //	showers
   case "39": //	scattered thunderstorms
   case "40": //	scattered showers
     return "owi-01d";
   case "17": //	hail
   case "35": //	mixed rain and hail
     return "owi-01d";
   case "19": //	dust
     return "owi-01d";
   case "20": //	foggy
     return "owi-01d";
   case "21": //	haze
   case "22": //	smoky
     return "owi-01d";
   case "15": //blowing snow
   case "23": //	blustery
   case "24": //	windy
     return "owi-01d";
   case "26": //	cloudy
   case "27": //	mostly cloudy (night)
   case "28": //	mostly cloudy (day)
     return "owi-03d";
   case "29": //	partly cloudy (night)
     return "owi-02n";
   case "30": //	partly cloudy (day)
   case "44": //	partly cloudy
     return "owi-02d";
   case "31": //	clear (night)
   case "33": //	fair (night)
     return "owi-01n";
   case "25": //	cold
   case "32": //	sunny
   case "34": //	fair (day)
   case "36": //	hot
     return "owi-01d";
   case "37": //	isolated thunderstorms
   case "38": //	scattered thunderstorms
   case "45": //	thundershowers
   case "47": //	isolated thundershowers
     return "owi-11d";
   case "13": //	snow flurries
   case "14": //	light snow showers
   case "16": //	snow
   case "41": //	heavy snow
   case "42": //	scattered snow showers
   case "43": //	heavy snow
   case "46": //	snow showers
     return "owi-13d";
   case "3200": //	not available
   default:
     return "";
 }
}
