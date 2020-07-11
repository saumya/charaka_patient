// Action
// login_action.js
//

import ApiObj from './api_conf'

import {update_app_status_as_busy} from './messages_action'


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
        call_LoginPatientAPI(loginObj).then(success=>{
            success.json().then(result=>{
                console.log('Login : Success', result)
                if(result.success===false){
                    dispatch( updateLoginStatus(false) )
                  }else{
                    dispatch( updateLoginStatusAndData({ isLoggedIn: true, loginUserObj: result.data}) )
                  }
                  dispatch( update_app_status_as_busy(false) )
            },error_2=>{
                console.log('Login : ERROR : 2 : ',error_2)
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
