const defaultCoords = '55.753215,37.622504'; // Москва

export const getUnitsLS = () => {
    let lsResult = localStorage.getItem('degUnits')
    const units = lsResult ? lsResult : '1';
    return units
}

export const setUnitsLS = (units) => {
    localStorage.setItem('degUnits', units);
}

export const getCoordsLS = () => {
    let lsResult = localStorage.getItem('userCoords');
    const coords =  lsResult ? lsResult : defaultCoords;
    return coords
}

export const setCoordsLS = (coords) => {
    localStorage.setItem('userCoords', coords);
}