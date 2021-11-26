const plugin = {
    name: 'buienradar-paraplu'
};

let head = document.getElementsByTagName('head')[0];
let jqueryScript = document.createElement('script');

jqueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';

head.appendChild(jqueryScript);

function launchPlugin() {

    console.log('mounting plugin', plugin.name);

    let element = $("#plugin-buienradar-paraplu");

    $.getJSON("https://data.buienradar.nl/2.0/feed/json", function (data) {
        let norain = '😎';
        let rain = '☔';

        let indicator = (data.forecast.fivedayforecast[0].mmRainMax > 5) ? rain : norain;

        element.append("<h1>Morgen: " + indicator + "</h1>");
    });
}

window.registerPlugin({ plugin }, launchPlugin);
