// View
// ScheduleCreate.comp.js

import React, {useState} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'
import {createScheduleAction, getDoctorSchedulesPerDayAction} from '../actions/schedule_action'

import BusyComp from './Busy.comp'



const ScheduleCreateComponent = ()=>{

    const dispatch = useDispatch()

    const appMessages = useSelector( state=> state.messages )
    const loggedInUser = useSelector(state=> state.loginData.loginUserObj)
    const doctorsForClinic = useSelector(state=> state.doctorsData.doctors)
    const doctorSchedules = useSelector(state=> state.schedulesData.doctor_schedules_per_day)
    const doctorNumSchedules = useSelector(state=> state.schedulesData.doctor_num_schedules_per_day)

    const[selectedDoctorId, setSelectedDoctorId] = useState(-1)
    const[doctorSelected, setDoctorSelected] = useState(true) // for UI only
    const[onDate, setOnDate] = useState('2020-07-05')
    const[selectionIsMorning, setSelectionIsMorning] = useState(false)
    const[selectedDoctorDetails, seSelectedDoctorDetails] = useState({})

    const onDateSelection = (event)=>{
        //console.log(event.target.value)
        setOnDate(event.target.value)
    }


    const onTimeSelection = (event)=>{
        //console.log(event.target.value)
        if(event.target.value==='morning'){
            setSelectionIsMorning(true)
        }else{
            setSelectionIsMorning(false)
        }
    }

    const onDoctorSelectionDone = (event)=>{
        setSelectedDoctorId(event.target.value)
        const doctor = doctorsForClinic.find(doctor=>doctor.id==event.target.value)
        seSelectedDoctorDetails(doctor)
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

    const onCheckMyChanceClick = ()=>{
        if(selectedDoctorId=="-1"){
            setDoctorSelected(false)
        }else{
            setDoctorSelected(true)
        }
        // Since we are making for ClinicId = 1
        dispatch( getDoctorSchedulesPerDayAction( 1,selectedDoctorId,onDate ) )
    }



    return(
        <div className="container">
            <div className="title"> Schedule </div>
            <div className="subtitle">A New Appointment</div>
            
            {/* JSON.stringify(loggedInUser) */}
            {/* JSON.stringify(doctorSchedules) */}

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
                        <select value={selectedDoctorId} onChange={(event)=>onDoctorSelectionDone(event)}>
                            <option value='-1'>Select Doctor</option>
                            {
                                doctorsForClinic.map(doctor=>(<option key={doctor.id} value={doctor.id}>{doctor.name}-{doctor.specialization}</option>))
                            }
                        </select>
                    </div>
                </div>

                { (selectedDoctorId==(-1) ? "" : 
                
                <div className="has-background-white" style={{"margin":"1em"}}>

                    <div className="control">
                        <button className="button" onClick={onCheckMyChanceClick}> Check My Chance </button>
                    </div>
                    
                    <span className="is-size-6">{ new Date(onDate).toDateString() }</span>
                    <span className="is-size-6"> | </span>
                    <span className="is-size-6">{selectedDoctorDetails.name}</span>

                    <div>
                        Number of Schedules, 
                        <p> Morning - <span className="is-size-6 has-text-weight-bold"> {doctorNumSchedules.morning} </span> </p>
                        <p> Evening - <span className="is-size-6 has-text-weight-bold"> {doctorNumSchedules.evening} </span> </p>
                    </div>
                    
                </div>

                )}
                    
                    
                
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link" onClick={onScheduleItClick}> Schedule It</button>
                </div>
            </div>
            <div>
                {/*
                    doctorSchedules.map((schedule,index)=>(
                        <div key={index}>
                            <span> {JSON.stringify(schedule)} </span>
                        </div>
                    ))
                */}
            </div>

            <BusyComp isBusy={ appMessages.app_is_busy }/>
        </div>
    )
}

export default connect()(ScheduleCreateComponent)