// Reducer
//

import {combineReducers} from 'redux'

import messages from './messages.reducer'
import loginReducer from './login.reducer'
import doctorsReducer from './doctors.reducer'
import schedulesReducer from './schedules.reducer'
import prescriptionsReducer from './prescriptions.reducer'

const theReducer = combineReducers({
    messages : messages,
    loginData : loginReducer,
    doctorsData : doctorsReducer,
    schedulesData : schedulesReducer,
    prescriptionsData : prescriptionsReducer
})

export default theReducer