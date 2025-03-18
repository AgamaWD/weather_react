export const determinationDirection = (deg) => {
    let direction = '';

    if(deg >= 0 && deg <= 22.5 || deg >= 337.5 && deg <= 360) {
        direction = 'северный'
    } else if(deg > 22.5 && deg < 67.5) {
        direction = 'северо-восточный'
    } else if(deg >= 67.5 && deg <= 112.5) {
        direction = 'восточный'
    } else if(deg > 112.5 && deg < 157.5) {
        direction = 'юго-восточный'
    } else if(deg >= 157.5 && deg <= 202.5) {
        direction = 'южный'
    } else if(deg > 202.5 && deg < 247.5) {
        direction = 'юго-западный'
    } else if(deg >= 247.5 && deg <= 292.5) {
        direction = 'западный'
    } else if(deg > 292.5 && deg < 337.5) {
        direction = 'северо-западный'
    } 

    return direction
}