import React from 'react'

const Hourcast = (props) => {

    const dayarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const { array } = props;

    function toMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber);

        return date.toLocaleString('en-US', {
            month: 'long',
        });
    }
    let nowtime = new Date().getTime();

    return (
        <div>
            <div className="row">
                <h1 className='text-center my-2'>5-Day Forcast</h1>
                <div className="col-sm-1"></div>
                {array.map((e, ind) => {
                    let date = new Date(e.dt * 1000);
                    let url = `http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`
                    return (
                        ((-nowtime + e.dt * 1000) / 1000 / 3600) % 24 < 3 && ((-nowtime + e.dt * 1000) / 1000 / 3600) % 24 >= 0 && <div key={ind} className="col-sm-2 my-2">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title text-center">{dayarray[new Date(e.dt * 1000).getUTCDay()]}</h5>
                                    <p className="card-body text-muted text-center" style={{ fontSize: "0.6rem", padding: "0" }}>
                                        {toMonthName(date.getMonth()) + " " + date.getDate() + ", " + date.getHours() + ":" + date.getMinutes()}
                                    </p>
                                    <div className="text-center">
                                        <img src={url} alt={e.weather[0].description} />

                                    </div>
                                    <p className='text-center'>{e.main.temp}&#8451;</p>
                                    <p className='text-center'>{e.weather[0].description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="col-sm-1"> </div>
            </div>
        </div>
    )
}

export default Hourcast