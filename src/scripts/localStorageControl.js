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
    return lsResult
}

export const setCoordsLS = (coords) => {
    localStorage.setItem('userCoords', coords);
}