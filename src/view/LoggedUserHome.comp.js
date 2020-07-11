// View
// LoggedUserHome.comp.js
//

import React, {useState, useEffect} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'

import ButtonsMenuComp from './ButtonsMenu.comp'
import UserProfileComp from './UserProfile.comp'
import ScheduleCreateComp from './ScheduleCreate.comp'

import {update_message} from '../actions/messages_action'
import {getDoctorsForClinicAction} from '../actions/doctor_action'


const LoggedUserHome = (props)=>{
    const dispatch = useDispatch()
    //dispatch( update_message('User Login Avtive View') )

    const loggedInUser = useSelector(state=> state.loginData)
    //const doctorsForClinic = useSelector(state=> state.doctorsData.doctors)

    // PROFILE / SCHEDULES / PRESCRIPTIONS / NEW_SCHEDULE
    const [activeView, setActiveView] = useState('NEW_SCHEDULE')
    const updateView = (viewName)=>setActiveView(viewName)

    //
    let calledDoctorsAPI = true
    useEffect(()=>{
        //dispatch( update_message('User Login Avtive View') )
        dispatch( getDoctorsForClinicAction(1) ) // 1 = Since we are making it for this clinic
    },['calledDoctorsAPI'])
    
    return(
        <React.Fragment>
            <div className="container is-fluid">
                <p className="mb-4 is-size-3"> {loggedInUser.loginUserObj.name} </p>
                
                

                <ButtonsMenuComp newView={updateView} logout={props.onLogout}/>

                { (activeView==='NEW_SCHEDULE') ? <ScheduleCreateComp /> : "" }
                { (activeView==='PROFILE') ? <UserProfileComp /> : "" }
                { (activeView==='SCHEDULES') ? <div>Schedules</div> : "" }
                { (activeView==='PRESCRIPTIONS') ? <div>Prescription</div> : "" }

            

            </div>
        </React.Fragment>
    )
}

export default connect()(LoggedUserHome)