// Reducer
// schedules.reducer.js

const intialState = {
    name: 'SchedulesReducer',
    patient_schedules:[]
}

const SchedulesReducer = (state=intialState, action)=>{
    switch(action.type){
        case 'UPDATE_PATIENT_SCHEDULES':
            return ({ ...state, patient_schedules: action.payload })
            break
        default:
            return state
            break
    }
}

export default SchedulesReducer