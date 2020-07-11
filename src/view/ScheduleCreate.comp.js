// View
// ScheduleCreate.comp.js

import React, {useState} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'
import {createScheduleAction} from '../actions/schedule_action'

import BusyComp from './Busy.comp'



const ScheduleCreateComponent = ()=>{

    const dispatch = useDispatch()

    const appMessages = useSelector( state=> state.messages )
    const loggedInUser = useSelector(state=> state.loginData.loginUserObj)
    const doctorsForClinic = useSelector(state=> state.doctorsData.doctors)

    const[selectedDoctorId, setSelectedDoctorId] = useState(-1)
    const[doctorSelected, setDoctorSelected] = useState(true) // for UI only
    const[onDate, setOnDate] = useState('2020-07-05')
    const[selectionIsMorning, setSelectionIsMorning] = useState(false)

    const onDateSelection = (event)=>{
        //console.log(event.target.value)
        setOnDate(event.target.value)
    }


    const onTimeSelection = (event)=>{
        console.log(event.target.value)
        if(event.target.value==='morning'){
            setSelectionIsMorning(true)
        }else{
            setSelectionIsMorning(false)
        }
    }

    const onScheduleItClick = ()=>{
        console.log('doctor id', selectedDoctorId)
        console.log('isMorning', selectionIsMorning)
        // UI only
        if(selectedDoctorId=="-1"){
            setDoctorSelected(false)
        }else{
            setDoctorSelected(true)
            // API call for scheduling
            // clinic id =1 //since this application is for Clinic id 1
            // person id = loggedInUser.id

            const newSchedule = {
                name: 'Appointment',
                on_date: onDate,
                is_morning: selectionIsMorning,
                doctorId: (selectedDoctorId*1),
                personId: loggedInUser.id,
                groupId: 1
            }
            dispatch( createScheduleAction(newSchedule) )
        }
    }



    return(
        <div className="section">
            <div className="title"> Schedule </div>
            <div className="subtitle">A New Appointment</div>
            
            {/* JSON.stringify(loggedInUser) */}

            <div className="field">
                <label className="label">On date</label>
                <div className="control">
                    <input className="input" type="date" placeholder="Date" onChange={onDateSelection}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Morning / Evening</label>
                <div className="control">
                    <div className="select">
                        <select onChange={onTimeSelection}>
                            <option value='-1'>Select Time</option>
                            <option value='morning'>Morning</option>
                            <option value='evening'>Evening</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">Doctor {doctorSelected ? '' : <span className="tag is-danger">Select A Doctor</span> } </label>
                
                <div className="control">
                    <div className="select">
                        <select value={selectedDoctorId} onChange={(event)=>setSelectedDoctorId(event.target.value)}>
                            <option value='-1'>Select Doctor</option>
                            {
                                doctorsForClinic.map(doctor=>(<option key={doctor.id} value={doctor.id}>{doctor.name}-{doctor.specialization}</option>))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link" onClick={onScheduleItClick}> Schedule It</button>
                </div>
            </div>
            <BusyComp isBusy={ appMessages.app_is_busy }/>
        </div>
    )
}

export default connect()(ScheduleCreateComponent)