import React from 'react';
import './city.scss'
import Btn from '../Btn'
import { SearchContext } from '../../App';
import { getUserPosition } from '../../scripts/geoPositionControl';

function City({ elClasses = '', userCity, setUserCoords }) {

    const { setSearchActive } = React.useContext(SearchContext);
    const classes = "city" + ' ' + elClasses

    return (
        <div className={classes}>
            <div className="city__header">
                <div className="city__name js-city-name">{userCity}</div>
            </div>
            <div className='city__btns'>
                <Btn
                    name='Выбрать город'
                    onClick={() => setSearchActive(true)}
                />
                <Btn
                    name='Моё местоположение'
                    icon='true'
                    onClick={() => getUserPosition(setUserCoords, true)}
                />
            </div>
        </div>
    )
}

export default City