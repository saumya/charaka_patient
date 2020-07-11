// Action
// schedule_action.js
//

import ApiObj from './api_conf'
import {update_app_status_as_busy} from './messages_action'



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