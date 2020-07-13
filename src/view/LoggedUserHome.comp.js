// View
// LoggedUserHome.comp.js
//

import React, {useState, useEffect} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'

import ButtonsMenuComp from './ButtonsMenu.comp'
import UserProfileComp from './UserProfile.comp'
import ScheduleCreateComp from './ScheduleCreate.comp'
import SchedulesList1 from './SchedulesList1.comp'
import PrescriptionList1 from './PrescriptionList1.comp'

import {update_message} from '../actions/messages_action'
import {getDoctorsForClinicAction} from '../actions/doctor_action'
import {getClinicDetailsAction} from '../actions/login_action'


const LoggedUserHome = (props)=>{
    const dispatch = useDispatch()
    //dispatch( update_message('User Login Avtive View') )

    const loggedInUser = useSelector(state=> state.loginData)
    //const doctorsForClinic = useSelector(state=> state.doctorsData.doctors)

    // PROFILE / SCHEDULES / PRESCRIPTIONS / NEW_SCHEDULE
    const [activeView, setActiveView] = useState('')
    const updateView = (viewName)=>setActiveView(viewName)

    //
    let calledDoctorsAPI = true
    useEffect(()=>{
        dispatch( getDoctorsForClinicAction(1) ) // 1 = Since we are making it for this clinic
    },['calledDoctorsAPI'])

    let calledClinicDetailsAPI = true
    useEffect(()=>{
        dispatch( getClinicDetailsAction(1) )
    },['calledClinicDetailsAPI'])
    
    return(
        <React.Fragment>
            <div className="container is-fluid">
                {/* <p className="mb-4 is-size-3"> {loggedInUser.loginUserObj.name} </p> */}
                <p className="mb-1 is-size-3"> {loggedInUser.loginUserObj.name} </p>
                
                

                {/* <ButtonsMenuComp newView={updateView} logout={props.onLogout}/> */}

                { (props.activeViewName==='NEW_SCHEDULE') ? <ScheduleCreateComp /> : "" }
                { (props.activeViewName==='PROFILE') ? <UserProfileComp /> : "" }
                { (props.activeViewName==='SCHEDULES') ? <SchedulesList1 /> : "" }
                { (props.activeViewName==='PRESCRIPTIONS') ? <PrescriptionList1 /> : "" }

            

            </div>
        </React.Fragment>
    )
}

export default connect()(LoggedUserHome)