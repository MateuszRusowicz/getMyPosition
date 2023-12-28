//gets the current position from the browser
const position = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
};


const whereAmI = function () {
    //1. takes the geolocation coordinates from the location object
    position().then(data => {
        const { latitude, longitude } = data.coords;
        return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=180429801986635657109x11857`)
    })
        //uses a API to reverse geocoding (read your location based on the coordinates)
        .then(resp => resp.json()).then(data => console.log(`you are in ${data.city}, ${data.country}`)).catch(err => console.log(`${err.message} request failed`))

};
whereAmI()