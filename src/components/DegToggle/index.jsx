import { useContext } from 'react'
import './deg-toggle.scss'
import { UnitsContext } from '../../App'

function DegToggle({ elClasses = '' }) {

    const { tempUnits, setTempUnits } = useContext(UnitsContext)
    const toggleUnits = function (e) {
        setTempUnits(e.target.value)
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