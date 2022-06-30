import React, { useEffect, useState } from 'react'
import Hourcast from './Hourcast';

const Showoptions = (props) => {

    const [check, setCheck] = useState(0);
    const [show, setShow] = useState(false);
    const onChange = () => {
        setShow(true);
        const len = props.array.length;
        for (let i = 0; i < len; ++i) {
            const e1 = document.getElementById(`${i}`)
            if (e1.checked) {
                setCheck(i);
                fetchWeatherData(i);
                break;
            }
        }
    }

    useEffect(() => {
        if(check!==undefined){
            const e1 = document.getElementById(`${check}`);
            e1.checked = false;
        }
        setCheck(0);
        setShow(false)
        // eslint-disable-next-line
    }, [props])

    const [weather, setWeather] = useState([]);

    const fetchWeatherData = async (ind) => {

        const apikey = "";
        const lat = props.array[ind].lat;
        const lon = props.array[ind].lon;
        const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
        const data = await fetch(url);
        const json = await data.json();
        setWeather(json.list)
        console.log(array)
    }

    const { array } = props;

    return (

        <>
            {array.length &&
                (<div>
                    <div className="container">
                        <h4>Select one of these cities</h4>
                        {array.map((e, ind) => {
                            return (
                                <div key={ind} className="form-check">
                                    <input onChange={onChange} className="form-check-input" type="radio" name="rad" id={ind} />
                                    <label className="form-check-label" htmlFor={ind}>
                                        <p>{e.name}, {e.state}</p>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                    {show && (<div>
                        {weather.length && (<div className='container'>
                            <Hourcast array={weather} />
                        </div>)}
                    </div>
                    )}
                </div>)}
            {!array.length && <>
                <div className="container">
                    <h4>Sorry, no results matching the city name</h4>
                </div>
            </>}
        </>
    )
}

export default Showoptions
