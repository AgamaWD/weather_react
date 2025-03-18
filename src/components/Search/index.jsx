import React from 'react'
import { SearchContext } from '../../App'
import './search.scss'
import { setCoordsLS } from '../../scripts/localStorageControl'

function Search({ setUserCoords }) {

    const { searchActive, setSearchActive } = React.useContext(SearchContext)
    const searchInput = React.useRef()
    const [promptsList, setPromptsList] = React.useState([])
    const [promptsListEmpty, setPromptsListEmpty] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')
    const [citiesList, setCitiesList] = React.useState([])
    const searchClasses = searchActive ? "search active" : "search"

    let trigger = true

    React.useEffect(() => {
        function fetchCitiesList() {
            fetch('https://raw.githubusercontent.com/AgamaWD/weather_react/refs/heads/master/src/public/data/cities_russia.json', {
                method: 'GET'
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    setCitiesList(data.cities)
                })
        }

        if (trigger) {
            fetchCitiesList()
            trigger = false
        }
    }, [])

    const onChangeInput = (value) => {
        setSearchValue(value)
        setPrompts(value)
    }

    const onChoosePrompt = (coords) => {
        setSearchValue('')
        setSearchActive(false)
        setUserCoords(coords)
        setCoordsLS(coords)
    }

    const setPrompts = (value) => {
        let searchValue = value.toLowerCase()
        setPromptsList([])

        if (searchValue.length < 2) {
            setPromptsListEmpty(false)
            return
        }

        let count = 0;
        let promptsListArr = []

        for (let i = 0; i < citiesList.length; i++) {
            let currentCity = citiesList[i]
            let currentCityName = currentCity.city

            if (currentCityName.toLowerCase().startsWith(searchValue)) {

                promptsListArr.push({
                    id: i,
                    coords: currentCity.lat + ',' + currentCity.lng,
                    cityName: currentCityName
                })

                if (currentCityName.toLowerCase() === searchValue) break

                count++

                if (count == 10) {
                    break
                }
            }
        }

        if (promptsListArr.length < 1) {
            setPromptsListEmpty(true)
        } else {
            setPromptsListEmpty(false)
        }

        setPromptsList(promptsListArr)

    }

    return (
        <div className={searchClasses}>
            <div onClick={() => { setSearchActive(false) }} className="search__overlay"></div>
            <button type="button" onClick={() => { setSearchActive(false) }} className="search__close">
                <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor" /></svg>
            </button>
            <div className="search__modal">
                <input ref={searchInput} placeholder='Название города' value={searchValue} onChange={(e) => onChangeInput(e.target.value)} className="search__line" type="text" />
                <div className="search__prompts">
                    {
                        promptsList.length &&
                        promptsList.map(prompt =>
                            <div key={prompt.id} className="search__prompt" onClick={function () { onChoosePrompt(prompt.coords) }}>{prompt.cityName}</div>
                        )
                    }
                    {
                        promptsListEmpty &&
                        <div className='search__empty'>
                            Ничего не найдено. Попробуйте другой запрос
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Search