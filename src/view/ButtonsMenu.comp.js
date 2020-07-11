// View
// ButtonsMenu.comp.js
//

import React from 'react'


const ButtonsMenu = (props)=>{
    return(
        <React.Fragment>
            <div className="buttons has-addons">
                <button className="button is-info" onClick={()=>props.newView('NEW_SCHEDULE')}> Schedule An Appointment </button>
                <button className="button is-link" onClick={props.logout}> Logout </button>
            </div>
            <div className="buttons has-addons">
                <button className="button is-info" onClick={()=>props.newView('PROFILE')}> Profile </button>
                <button className="button is-info" onClick={()=>props.newView('SCHEDULES')}> Schedules </button>
                <button className="button is-info" onClick={()=>props.newView('PRESCRIPTIONS')}> Prescriptions </button>
            </div>
        </React.Fragment>
    )
}

export default ButtonsMenu