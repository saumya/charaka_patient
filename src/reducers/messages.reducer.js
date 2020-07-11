// Reducer
// messages.reducer.js

const initialState = {
    app_is_busy : false,
    msg_info : "General Application Information"
}

const Messages = (state=initialState, action)=>{
    switch(action.type){
        case 'NEW_MESSAGE' :
            return ({...state, msg_info: action.payload})
            break
        case 'NEW_APP_STATUS' :
            return ({...state, app_is_busy: action.payload})
            break
        default:
            return state
            break
    }
}

export default Messages