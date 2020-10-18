// Action
// prescription_action.js
//

import ApiObj from './api_conf'
import {update_app_status_as_busy} from './messages_action'



const updatePatientPrescriptionsAction = prescriptions=>{
    return({
        type: 'UPDATE_PATIENT_PRESCRIPTIONS',
        payload: prescriptions
    })
}

// ----------------- GET ALL PRESCRIPTIONS ------------------------
const call_getAllPrescriptionsOfPatient_api = (patientId)=>{
    const url_1 = ApiObj.endpoint + ApiObj.version + ApiObj.get.all_prescription_by_patient_id + patientId
    return fetch(url_1)
}
export const getMyPrescriptionsAction = patientId=>{
    return dispatch=>{
        dispatch( update_app_status_as_busy(true) )
        call_getAllPrescriptionsOfPatient_api(patientId).then(success=>{
            dispatch( update_app_status_as_busy(false) )
            
            success.json().then(result=>{
                console.log('call_getAllPrescriptionsOfPatient_api : SUCCESS :', result)
                dispatch( updatePatientPrescriptionsAction(result) )
            },error2=>{
                console.log('call_getAllPrescriptionsOfPatient_api : SUCCESS :', error2)   
            })
        },error=>{
            dispatch( update_app_status_as_busy(false) )
            console.log('call_getAllPrescriptionsOfPatient_api : ERROR :', error)
        })
    }
}
// ----------------- GET ALL PRESCRIPTIONS / ----------------------

// ----------------- DELETE PRESCRIPTION ------------------------
const call_deletePrescriptionWithId_api = prescriptionId=>{
    const url_1 = ApiObj.endpoint + ApiObj.version + ApiObj.delete.prescription_with_id
    const fetch_data = {
        method: 'DELETE', 
        mode: 'cors', headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(prescriptionId)
    }
    return fetch(url_1, fetch_data)
}
export const deletePrescriptionWithIdAction = prescriptionId => {
    return dispatch=>{
        dispatch( update_app_status_as_busy(true) )
        call_deletePrescriptionWithId_api(prescriptionId).then(success=>{
            dispatch( update_app_status_as_busy(false) )
            
            success.json().then(result=>{
                console.log('RESULT : call_deletePrescriptionWithId_api', result)
            },error2=>{
                console.log('ERROR: 2 : call_deletePrescriptionWithId_api', error2)
            })

        }, error=>{
            dispatch( update_app_status_as_busy(false) )
            console.log('ERROR: 1 : call_deletePrescriptionWithId_api', error)
        })
    }
}
// ----------------- DELETE PRESCRIPTION / ------------------------