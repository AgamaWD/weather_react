import React from 'react';
import './App.scss'
import City from './components/City'
import DegToggle from './components/DegToggle'
import { getUnitsLS, getCoordsLS } from './scripts/localStorageControl';
import { determinationDirection } from './scripts/serviceFunctions';
import Search from './components/Search';
import { getUserPosition } from './scripts/geoPositionControl';

const API_KEY = '8aa2ce2bb24245d7ad3160220251403';
const tempUnitsArr = [
	{
		name: 'temp_c',
		fill: 'feelslike_c',
		symbol: '°C'
	},
	{
		name: 'temp_f',
		fill: 'feelslike_f',
		symbol: '℉'
	}
]

export const SearchContext = React.createContext('')

function App() {
	const [weatherData, setWeatherData] = React.useState();
	const [userCoords, setUserCoords] = React.useState(getCoordsLS());
	const [userCity, setUserCity] = React.useState('');
	const [tempUnits, setTempUnits] = React.useState(getUnitsLS());
	const [searchActive, setSearchActive] = React.useState(false);

	React.useEffect(() => {
		if (!userCoords) {
			console.log('userCoords ' + userCoords)
			getUserPosition(setUserCoords)
		}
	}, [])

	React.useEffect(() => {
		function fetchWeather() {
			try {
				fetch(`http://api.weatherapi.com/v1/current.json?q=${userCoords}&key=${API_KEY}&lang=ru`)
					.then(function (response) {
						return response.json();
					})
					.then(function (data) {
						setWeatherData(data)
						setUserCity(data.location.name)
						console.log(data)
					})


			} catch (error) {
				alert('Данные не получены. Попробуйте позже.')
			}
		}

		fetchWeather()
	}, [userCoords])

	return (
		<>
			<main>
				<div className="page-layout">
					<div className="weather-controls">
						<SearchContext.Provider value={{ searchActive, setSearchActive }}>
							<City userCity={userCity} setUserCoords={setUserCoords} elClasses='weather-controls__city' />
						</SearchContext.Provider>

						<DegToggle elClasses='weather-controls__toggle' tempUnits={tempUnits} setTempUnits={setTempUnits} />
					</div>

					<div className="weather-body">
						{weatherData &&
							<>
								<div className="weather-body__temp">
									<div className="weather-body__deg">{Math.round(weatherData.current[tempUnitsArr[tempUnits - 1].name]) + ' ' + tempUnitsArr[tempUnits - 1].symbol}</div>
									<div className="weather-body__feel">Ощущается как {Math.round(weatherData.current[tempUnitsArr[tempUnits - 1].fill]) + ' ' + tempUnitsArr[tempUnits - 1].symbol}</div>
								</div>
								<div className="weather-body__bottom">
									<div className="weather-body__icon">
										<img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
									</div>
									<div className="weather-body__desc">{weatherData.current.condition.text}</div>
								</div>
							</>
						}
					</div>

					<div className="weather-params">
						{weatherData &&
							<>
								<div className="weather-params__item param">
									<div className="param__name">Ветер</div>
									<div className="param__value">{Math.round(weatherData.current.wind_kph / 3.6 * 100) / 100 + 'м/с, ' + determinationDirection(weatherData.current.wind_degree)}</div>
								</div>
								<div className="weather-params__item param">
									<div className="param__name">Давление</div>
									<div className="param__value">{Math.round(weatherData.current.pressure_mb * 0.75006) + ' мм рт. ст.'}</div>
								</div>
								<div className="weather-params__item param">
									<div className="param__name">Влажность</div>
									<div className="param__value">{Math.round(weatherData.current.humidity) + '%'}</div>
								</div>
								<div className="weather-params__item param">
									<div className="param__name">Осадки</div>
									<div className="param__value">{Math.round(weatherData.current.precip_mm) + 'мм'}</div>
								</div>
							</>
						}
					</div>
				</div>
			</main>
			<SearchContext.Provider value={{ searchActive, setSearchActive }}>
				<Search setUserCoords={setUserCoords} />
			</SearchContext.Provider>
		</>
	)
}

export default App
