// Reducer
// messages.reducer.js

const initialState = {
    app_is_busy : false,
    msg_info : "General Application Information",
    should_show_prescription : false,
    clinic: {},
    prescription: {}
}

const Messages = (state=initialState, action)=>{
    switch(action.type){
        case 'NEW_MESSAGE' :
            return ({...state, msg_info: action.payload})
            break
        case 'NEW_APP_STATUS' :
            return ({...state, app_is_busy: action.payload})
            break
        case 'CLINIC_DETAILS_UPDATE' :
            return ({ ...state, clinic: action.payload})
            break
        case 'PRESCRIPTION_DISPLAY_STATUS' :
            return ({ ...state, 
                should_show_prescription: action.payload.isVisible, 
                prescription: action.payload.prescription })
            break
        default:
            return state
            break
    }
}

export default Messages