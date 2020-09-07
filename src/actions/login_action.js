// Action
// login_action.js
//

import ApiObj from './api_conf'

import {update_message, update_app_status_as_busy} from './messages_action'


export const updateLoginStatus = isLoggedIn=>({
    type: 'UPDATE_LOGIN_STATUS',
    payload: isLoggedIn
})

export const updateLoginUserObject = loggedInUser=>({
    type: 'UPDATE_LOGIN_USER_OBJECT',
    payload: loggedInUser
})

export const updateLoginStatusAndData = loginDataObj=>({
    type: 'UPDATE_LOGIN_STATUS_AND_DATA',
    payload: loginDataObj
})

// ---------------------------- LOG IN ---------------------------------------------
const call_LoginPatientAPI = (loginObj) => {
    const url_1 = ApiObj.endpoint + ApiObj.version + ApiObj.post.login
    const fetch_data = {
        method: 'POST', 
        mode: 'cors', headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(loginObj)
    }
    return fetch(url_1, fetch_data)
}
export const loginAction = loginObj=>{
    return function (dispatch) {
        dispatch( update_app_status_as_busy(true) )
        dispatch( update_message('Validating the Login. Please Wait ...') )
        call_LoginPatientAPI(loginObj).then(success=>{
            success.json().then(result=>{
                console.log('Login : Success', result)
                if(result.success===false){
                    dispatch( updateLoginStatus(false) )
                    dispatch( update_message('Login Failed. Try again.') )
                  }else{
                    dispatch( updateLoginStatusAndData({ isLoggedIn: true, loginUserObj: result.data}) )
                    dispatch( update_message('Login Success.') )
                  }
                  dispatch( update_app_status_as_busy(false) )
            },error_2=>{
                console.log('Login : ERROR : 2 : ',error_2)
                dispatch( update_app_status_as_busy(false) )
            })
        },error=>{
            console.log('Login : ERROR : ',error)
            dispatch( update_app_status_as_busy(false) )
        })
    }
}
// ---------------------------- LOG IN / ---------------------------------------------
// ---------------------------- UPDATE PROFILE ---------------------------------------
const call_UpdateProfileAPI = userObj=>{
    const url_1 = ApiObj.endpoint + ApiObj.version + ApiObj.put.update_patient_profile
    const fetch_data = {
        method: 'PUT',
        mode: 'cors', headers: new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(userObj)
    }
    return fetch(url_1, fetch_data)
}
export const updateProfileAction = userObj=>{
    return function(dispatch){
        dispatch( update_app_status_as_busy(true) )
        call_UpdateProfileAPI(userObj).then(success=>{
            console.log('UpdateProfile : SUCCESS :', success)
            dispatch( update_app_status_as_busy(false) )
        },error=>{
            console.log('UpdateProfile : ERROR : ',error)
            dispatch( update_app_status_as_busy(false) )
        })
    }
}
// ---------------------------- UPDATE PROFILE / -------------------------------------
// ---------------------------- UPDATE HEALTH PROFILE ---------------------------------------
const call_updateHealthProfileAPI = profileObj => {
    const url_1 = ApiObj.endpoint + ApiObj.version + ApiObj.put.update_patient_health_profile
    const fetch_data = {
        method : 'PUT',
        mode: 'cors', headers: new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(profileObj)
    }
    return fetch(url_1, fetch_data)
}
export const updateHealthProfileAction = userProfile => {
    return function(dispatch){
        dispatch( update_app_status_as_busy(true) )
        call_updateHealthProfileAPI(userProfile).then(success=>{
            console.log('UpdateHealthProfile : SUCCESS : ', success)
            dispatch( update_app_status_as_busy(false) )
        },error=>{
            console.log('UpdateHealthProfile : ERROR : ', error)
            dispatch( update_app_status_as_busy(false) )
        })
    }
}
// ---------------------------- UPDATE HEALTH PROFILE / ---------------------------------------


// ------------- GET : Clinic Details : ----------------------
const updateClinicDetailsAction = (clinic)=>({
    type: 'CLINIC_DETAILS_UPDATE',
    payload: clinic
})
const call_getClinicDetails_API = (clinicId)=>{
    const url_1 = ApiObj.endpoint + ApiObj.version + ApiObj.get.clinic_by_id + clinicId
    return fetch( url_1 )
}
export const getClinicDetailsAction = (clinicId)=>{
    return dispatch=>{
        //dispatch( update_app_status_as_busy(true) )
        call_getClinicDetails_API(clinicId).then(success=>{
            //dispatch( update_app_status_as_busy(false) )
            success.json().then(result=>{
                console.log('getClinicDetailsAction : RESULT : ', result)
                dispatch( updateClinicDetailsAction(result) )
            },error2=>{
                console.log('getClinicDetailsAction : ERROR : 2 : ', error2)
            })
        },error=>{
            console.log('getClinicDetailsAction : ERROR : ', error)
            //dispatch( update_app_status_as_busy(false) ) 
        })
    }
}
// ------------- GET : Clinic Details : / ----------------------