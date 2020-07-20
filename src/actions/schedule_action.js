// Action
// schedule_action.js
//

import ApiObj from './api_conf'
import {update_app_status_as_busy} from './messages_action'


const updatePatientShedulesAction = schedules=>{
    return({
        type: 'UPDATE_PATIENT_SCHEDULES',
        payload: schedules
    })
}
const updateDoctorSchedulesPerDayAction = schedules=>({
    type: 'UPDATE_DOCTOR_SCHEDULES_PER_DAY',
    payload: schedules
})

// ----------------- CREATE SCHEDULE --------------------------
const call_createSchedule_api = (scheduleObj) => {
    const url_1 = ApiObj.endpoint + ApiObj.version + ApiObj.post.create_schedule
    const fetch_data = {
        method: 'POST', 
        mode: 'cors', headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(scheduleObj)
    }
    return fetch(url_1, fetch_data)
}
export const createScheduleAction = schedule=>{
    return dispatch=>{
        dispatch( update_app_status_as_busy(true) )
        call_createSchedule_api(schedule).then(success=>{
            dispatch( update_app_status_as_busy(false) )
            success.json().then(result=>{
                console.log('call_createSchedule_api : RESULT :', result)
            },error2=>{
                console.log('call_createSchedule_api : ERROR :', error2)    
            })
        },error=>{
            dispatch( update_app_status_as_busy(false) )
            console.log('call_createSchedule_api : ERROR :', error)
        })
    }
}
// ----------------- CREATE SCHEDULE / ------------------------
// ----------------- GET ALL SCHEDULES ------------------------
const call_getAllSchedulesOfPatient_api = (patientId)=>{
    const url_1 = ApiObj.endpoint + ApiObj.version + ApiObj.get.all_schedules_by_patient_id + patientId
    return fetch(url_1)
}
export const getMySchedulesAction = patientId=>{
    return dispatch=>{
        dispatch( update_app_status_as_busy(true) )
        call_getAllSchedulesOfPatient_api(patientId).then(success=>{
            dispatch( update_app_status_as_busy(false) )
            //console.log('call_getAllSchedulesOfPatient_api : SUCCESS :', success)
            success.json().then(result=>{
                console.log('call_getAllSchedulesOfPatient_api : SUCCESS :', result)
                dispatch( updatePatientShedulesAction(result) )
            },error2=>{
                console.log('call_getAllSchedulesOfPatient_api : SUCCESS :', error2)   
            })
        },error=>{
            dispatch( update_app_status_as_busy(false) )
            console.log('call_getAllSchedulesOfPatient_api : ERROR :', error)
        })
    }
}
// ----------------- GET ALL SCHEDULES / ----------------------
// ---- GET ALL SCHEDULES : FOR A DCOTOR FOR A DAY ------------
const call_getAllSchedulesForADcotorForADay_api = (clinicId,doctorId,onDate)=>{
    const url_1 = ApiObj.endpoint + ApiObj.version 
                    + ApiObj.get.all_schedules_by_clinic_by_doctor_on_date 
                    + clinicId + '/' + doctorId + '/' + onDate
    return fetch(url_1)
}
export const getDoctorSchedulesPerDayAction = (clinicId,doctorId,onDate)=>{
    return dispatch=>{
        dispatch( update_app_status_as_busy(true) )
        call_getAllSchedulesForADcotorForADay_api( clinicId, doctorId, onDate  ).then(success=>{
            dispatch( update_app_status_as_busy(false) )
            //console.log('call_getAllSchedulesOfPatient_api : SUCCESS :', success)
            success.json().then(result=>{
                console.log('call_getAllSchedulesOfPatient_api : SUCCESS :', result)
                dispatch( updateDoctorSchedulesPerDayAction(result) )
            },error2=>{
                console.log('call_getAllSchedulesOfPatient_api : SUCCESS :', error2)   
            })
        },error=>{
            dispatch( update_app_status_as_busy(false) )
            console.log('call_getAllSchedulesOfPatient_api : ERROR :', error)
        })
    }
}
// ---- GET ALL SCHEDULES : FOR A DCOTOR FOR A DAY / ----------