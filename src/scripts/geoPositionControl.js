/*const defaultCoords = '55.753215,37.622504'; // Москва

export const getUserGeoPosition = () => {
    let userCoords = getUserCoords()

    
    return userCoords
    
}

function getUserCoords() {
    let coords

    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        coords = lat + ',' + lon
    }, () => {
        alert(`Доступ к местоположению запрещён настройками браузера. Мы покажем вам погоду в Москве.`)
        coords = defaultCoords
    });

    return coords

}

function geoSuccessHandler(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    coords = lat + ',' + lon

};

function geoErrorHandler() {
    alert(`Доступ к местоположению запрещён настройками браузера. Мы покажем вам погоду в Москве.`)
};*/
