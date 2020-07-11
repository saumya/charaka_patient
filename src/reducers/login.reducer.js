// Reducer
// login.reducer.js
//


const initilState = {
    isLoggedIn : false,
    loginUserObj : {}
}

const LoginReducer = (state=initilState,action)=>{
    switch(action.type){
        case 'UPDATE_LOGIN_STATUS':
            return({...state, isLoggedIn:action.payload})
            break
        case 'UPDATE_LOGIN_USER_OBJECT':
            return({...state, loginUserObj:action.payload})
            break
        case 'UPDATE_LOGIN_STATUS_AND_DATA':
            return({isLoggedIn: action.payload.isLoggedIn, loginUserObj: action.payload.loginUserObj})
            break
        default:
            return state
            break
    }
}

export default LoginReducer