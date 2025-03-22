const defaultCoords = '55.753215,37.622504'; // Москва
import { setCoordsLS } from "./localStorageControl";

export const getUserPosition = (setUserCoords, noDefault = false) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            let currentCoords = position.coords.latitude + "," + position.coords.longitude 
            setUserCoords(currentCoords)
            setCoordsLS(currentCoords)
        },
        () => {
            alert('Не смогли определить ваше мостоположение. Выберите город вручную.')
            if(!noDefault) {
                setUserCoords(defaultCoords)
            }
        }
    )
}