import React, {useState} from "react";
import Moment from "moment";
import "../style/TrackPage.css"

function TrackPeriod() {
    const [lastFlowDate, setLastFlowDate] = useState("");
    const [cycleLength, setCycleLength] = useState("");
    const [period, setNextPeriod] = useState("")
    const handleLastFlowDateFormat = (event) => {
        const date = Moment(event.target.value).format('YYYY-MM-DD');
        setLastFlowDate(date);
    };

    const calculatePeriod = () => {
        const date = Moment(lastFlowDate);
        const date2 = date.add(cycleLength, "days");

        setNextPeriod(date2.format("dddd, MMMM YYYY"));
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="form-container">
                <p className="text">YOUR <span>FLOW</span> IS OUR CARE</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="lastFlowDate"> Enter first day of flow:</label>
                            <input
                                type="date"
                                id="lastFlowDate"
                                value={lastFlowDate}
                                onChange={(e) => setLastFlowDate(e.target.value)}
                            />
                            {/<br/><br/>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="cycleLength">Enter cycle duraton::</label>
                            <input type="number"
                                   id="cycleLength"
                                   value={cycleLength} onChange={(e) => setCycleLength(e.target.value)}
                            />
                        </div>

                        <button type="button" onClick={calculatePeriod}>SUBMIT</button>
                    </form>
                    {period && (
                        <p className="result">Your next period will start on <strong>{period}</strong></p>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}

export default TrackPeriod