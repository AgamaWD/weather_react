import './city.scss'
import Btn from '../Btn'
import Search from '../Search'

function City({ elClasses = '' }) {

    const classes = "city" + ' ' + elClasses

    return (
        <div className={classes}>
            <div className="city__header">
                <div className="city__name js-city-name">Петропавловск-Камчатский</div>
                <Search />
            </div>
            <div className='city__btns'>
                <Btn
                    name='Выбрать город'
                />
                <Btn
                    name='Моё местоположение'
                    icon='true'

                />
            </div>
        </div>
    )
}

export default City