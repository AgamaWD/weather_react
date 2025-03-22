const defaultCoords = '55.753215,37.622504'; // Москва

export const getUserPosition = (setUserCoords, noDefault = false) => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            setUserCoords(position.coords.latitude + "," + position.coords.longitude)
        },
        () => {
            alert('Не смогли определить ваше мостоположение. Выберите город вручную.')
            if(!noDefault) {
                setUserCoords(defaultCoords)
            }
        }
    )
}