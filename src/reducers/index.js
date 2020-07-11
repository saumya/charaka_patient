// Reducer
//

import {combineReducers} from 'redux'

import messages from './messages.reducer'
import loginReducer from './login.reducer'
import doctorsReducer from './doctors.reducer'

const theReducer = combineReducers({
    messages : messages,
    loginData : loginReducer,
    doctorsData : doctorsReducer
})

export default theReducer