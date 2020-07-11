// Reducer
// doctors.reducer.js
//

const initialState = {
    doctors:[]
}

const doctorsReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'UPDATE_DOCTOR_LIST':
            return({...state, doctors:action.payload})
            break
        default:
            return state
            break
    }
}

export default doctorsReducer
