// Actions
// doctor_action.js
//

import ApiObj from './api_conf'
import {update_app_status_as_busy} from './messages_action'


export const updateDoctorsListAction = doctors=>({
    type: 'UPDATE_DOCTOR_LIST',
    payload: doctors
})

// ------------- Get Doctors of a Clinic ----------------------
const call_getDoctorsOfClinic_API = (clinicId)=>{
    const url_1 = ApiObj.endpoint + ApiObj.version + ApiObj.get.all_doctors_by_clinic + clinicId
    return fetch( url_1 )
}
export const getDoctorsForClinicAction = (clinicId)=>{
    return dispatch=>{
        dispatch( update_app_status_as_busy(true) )
        call_getDoctorsOfClinic_API(clinicId).then(success=>{
            console.log('getDoctorsForClinicAction : SUCCESS : ')
            //console.log(success)
            dispatch( update_app_status_as_busy(false) )
            success.json().then(result=>{
                console.log(result)
                dispatch( updateDoctorsListAction(result) )
            },error2=>{
                console.log('getDoctorsForClinicAction : ERROR : 2 : ', error2)
            })
        },error=>{
            console.log('getDoctorsForClinicAction : ERROR : ', error)
            dispatch( update_app_status_as_busy(false) )
        })
    }
}
// ------------- Get Doctors of a Clinic / --------------------