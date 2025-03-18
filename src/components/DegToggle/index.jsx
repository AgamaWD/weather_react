import './deg-toggle.scss'
import { setUnitsLS } from '../../scripts/localStorageControl'

function DegToggle({ elClasses = '', tempUnits, setTempUnits }) {

    const toggleUnits = function (e) {
        let currentVal = e.target.value
        setTempUnits(currentVal)
        setUnitsLS(currentVal)
    }

    const classes = "deg-toggle" + ' ' + elClasses

    return (
        <div className={classes} >
            <div className="deg-toggle__btn">
                <input id="C" className="deg-toggle__radio js-units_toggle" type="radio" name="deg" value="1" checked={tempUnits == "1" ? true : false} onChange={toggleUnits} />
                <label className="deg-toggle__label" htmlFor="C">C</label>
                <input id="F" className="deg-toggle__radio js-units_toggle" type="radio" name="deg" value="2" checked={tempUnits == '2' ? true : false} onChange={toggleUnits} />
                <label className="deg-toggle__label" htmlFor="F">F</label>
            </div>
        </div>
    )
}

export default DegToggle