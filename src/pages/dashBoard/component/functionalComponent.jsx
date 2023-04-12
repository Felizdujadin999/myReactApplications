import React, {useState} from "react";

function Felix(){
    let initialState = {
        InsttutionName: " ",
        Cohort: " ",
        AdmissionYear: " ",
        AdmissionMonth: " ",
    }
    const [data, setData] = useState(initialState)


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    function handleChange(event){
        if(event.target.name === 'firstName'){setFirstName(event.target.value)}
        else if (event.target.name === 'lastName'){setLastName(event.target.value)}
        else if (event.target.name === 'email'){setEmail(event.target.value)}
        else if (event.target.name === 'age'){setAge(event.target.value)}
        else{setData({...data, [event.target.name]: event.target.value})}
    }

    return(
        <React.Fragment>
            <div className="ptags">
                <p className="one">First-Name: {firstName}</p>
                <p className="two">Last-Name: {lastName}</p>
                <p className="three">Email-Address: {email}</p>
                <p className="four">Age: {age}</p>
                <p className="five">Institution-Name: {data.InsttutionName}</p>
                <p className="six">Cohort: {data.Cohort}</p>
                <p className="seven">Admission-Month: {data.AdmissionMonth}</p>
                <p className="eight">Admission-Year: {data.AdmissionYear}</p>
            </div>
            
            <label htmlFor="fName">
            FirstName: <input type="text" name="firstName" id="fName" value={firstName} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="lName">
            LastName: <input type="text" name="lastName" id="lName" value={lastName} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="eMail">
            EmailAddress: <input type="text" name="email" id="eMail" value={email} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="Age">
            Age: <input type="text" name="Age" id="Age" value={age} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="InstName">
            InstitutionName: <input type="text" name="InstitutionName" id="InstName" value={data.InsttutionName} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="Coht">
            Cohort: <input type="text" name="Cohort" id="Coht" value={data.Cohort} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="AddMon">
            AddmissionMonth: <input type="text" name="AddmissionMonth" id="AddMon" value={data.AdmissionMonth} onChange={handleChange}/>
            </label><br/><br/>

            <label htmlFor="AddYr">
            AddmissionYear: <input type="text" name="AddmissionYear" id="AddYr" value={data.AdmissionYear} onChange={handleChange}/>
            </label><br/><br/>
        </React.Fragment>
    )
}
export default Felix