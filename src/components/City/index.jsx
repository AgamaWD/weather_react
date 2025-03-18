import React from 'react';
import './city.scss'
import Btn from '../Btn'
import { SearchContext } from '../../App';

function City({ elClasses = '', userCity }) {

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
                    onClick={() => alert('Эта функция в разработке')}
                />
            </div>
        </div>
    )
}

export default City