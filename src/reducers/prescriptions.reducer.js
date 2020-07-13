// Reducer
// prescriptions.reducer.js
//

const initialState = {
    name: 'PrescriptionsReducer',
    patient_prescriptions: []
}

const PrescriptionReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'UPDATE_PATIENT_PRESCRIPTIONS':
            return ({ ...state, patient_prescriptions:action.payload })
            break
        default:
            return state
            break
    }
}

export default PrescriptionReducer