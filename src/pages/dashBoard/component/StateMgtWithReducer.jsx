import React,{useReducer} from "react";

function StateMgtWithReducer(){
    let initialValue = {
        firstName: "",
        lastName: "",
        email: "",
        age:"",
        institute: "",
        cohort:"",
        admissionStart: "",
        admissionEnd: "",
        buttoncolor:"yellow"
}

function reducer(state, action){
    switch (action.type){
        case "handleInput":
            return{
                ...state,
                [action.field]:action.payload
            }

            case "handleButton":
                return{
                    ...state,
                    [action.field]:action.payload
                }    

        default:
            break;    
    }

}


const[state,dispatch]= useReducer(reducer,initialValue);

function handleChange(event){
    dispatch({
        type:"handleInput",
        field: event.target.name,
        payload:event.target.value
    })}

function handleButton(event){
    dispatch({
        type:"handleButton",
        field: event.target.name,
        payload:"green"
        })
    }


return(
    <React.Fragment>
        <div className='ptag'>
            <p className='one'>FirstName:{state.firstName}</p>
            <p className='two'>LastName:{state.lastName}</p>
            <p className='three'>email:{state.email}</p>
            <p className='tfour'>age:{state.age}</p>
            <p className='five'>Institute:{state.institute}</p> 
            <p className='six'>Cohort:{state.cohort}</p>
            <p className='seven'>admissionYear:{state.admissionYear}</p> 
            <p className='eight'>admissionMonth:{state.admissionMonth}</p> 
          </div>


          <label htmlFor = "fName">
            FirstName: <input type ="text" name = "firstName" id ="fName" value={state.firstName} 
            onChange ={handleChange} />
          </label><br/><br/>

          <label htmlFor = "LName">
            LastName: <input type ="text" name = "lastName" id ="LName" value={state.lastName} 
            onChange ={handleChange}/>
          </label><br/><br/>

          <label htmlFor = "mail">
            LastName: <input type ="text" name = "email" id ="email" value={state.email} 
            onChange ={handleChange}/>
          </label><br/><br/>

          <label htmlFor = "Age">
            LastName: <input type ="text" name = "Age" id ="Age" value={state.Age} 
            onChange ={handleChange}/>
          </label><br/><br/>

          <label htmlFor = "inst">
            LastName: <input type ="text" name = "institute" id ="institute" value={state.institute} 
            onChange ={handleChange}/>
          </label><br/><br/>

          <label htmlFor = "Coh">
            Cohort: <input type ="text" name = "cohort" id ="coh" value={state.cohort} onChange={handleChange}/>
          </label><br/><br/>

          <label htmlFor = "aStart">
            LastName: <input type ="text" name = "admissionYear" id ="admissionYear" value={state.admissionYear} 
            onChange ={handleChange}/>
          </label><br/><br/>

          <label htmlFor = "aMonth">
            Institution: <input type ="text" name = "admissionMonth" id ="admissionMonth" value={state.admissionMonth} 
            onChange ={handleChange}/>
          </label><br/><br/>

          <button type="submit" name = 'buttoncolor' onclick={handleButton} style={{
            backgroundColor: state.buttoncolor
          }}></button>
    </React.Fragment>)
}


export default StateMgtWithReducer