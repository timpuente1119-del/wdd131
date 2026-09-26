const area = "380,800 km"
document.getElementById("area-value").textContent = area;

const population = "1,144,694";
document.getElementById("population-value").textContent = population;

const capital = "Helena";
document.getElementById("capital-value").textContent = capital;

const time_zone = "UTC-7:00";
document.getElementById("time-zone-value").textContent = time_zone;

const elevation = "3,903.5 m"
document.getElementById("highest-elevation-value").textContent = elevation;

const income = "34th";
document.getElementById("income-rank-value").textContent = income;

const temperature = 59;
// used \u00B0 to get the degree symbol
const display_temp = `${temperature}\u00B0F`
document.getElementById("temperature-value").textContent = display_temp;

const conditions = "Partly Sunny";
document.getElementById("conditions-value").textContent = conditions;

const wind = 12;
const wind_display = `${wind}mph`;
document.getElementById("wind-value").textContent = wind_display;

function calculateWindChill(temp, wSpeed){
    
    if(temp <= 50 && wSpeed > 3){
        windChill = 35.74 + (0.6215 * temp) - (35.75 * (wSpeed ** 0.16)) + (0.4275 * temp * (wSpeed ** 0.16));
        windChill = Math.round(windChill);
        return windChill;
    }
     else{
        const noChill = "N/A";
        return noChill;
    }

};

document.getElementById("wind-chill-value").textContent = calculateWindChill(temperature, wind);