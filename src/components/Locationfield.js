import React, { useEffect, useState } from 'react'
import Showoptions from './Showoptions'

const Locationfield = (props) => {

    const [array, setArray] = useState([{ "name": "Chennai", "local_names": { "te": "చెన్నై", "ru": "Ченнаи", "bn": "চেন্নাই", "kn": "ಚೆನ್ನೈ", "de": "Chennai", "en": "Chennai", "hi": "चेन्नई", "ur": "چینائی", "zh": "金奈", "cs": "Čennaí", "pl": "Ćennaj", "uk": "Ченнаї", "lt": "Čenajus", "fr": "Chennai", "tr": "Madras", "ml": "ചെന്നൈ", "ar": "تشيناي", "ko": "첸나이", "ta": "சென்னை", "ja": "チェンナイ", "he": "צ'נאי" }, "lat": 13.0836939, "lon": 80.270186, "country": "IN", "state": "Tamil Nadu" }, { "name": "La Chennaie", "lat": 48.2422922, "lon": 3.446027, "country": "FR", "state": "Bourgogne-Franche-Comté" }])
    const [show, setShow] = useState(false);

    const fetchData = async () => {
        const apikey = "";
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${props.city}&limit=5&appid=${apikey}`
        const data = await fetch(url);
        const arr = await data.json();
        await setArray(arr);
    }

    useEffect(() => {
        fetchData();
        setShow(false)
        // eslint-disable-next-line
    }, [props])

    return (
        <div className="container my-3">
            <Showoptions show={show} array={array} />
        </div>
    )
}

export default Locationfield