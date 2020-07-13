// Action
//

export const update_message = message=>({
    type: 'NEW_MESSAGE',
    payload: message
})

export const update_app_status_as_busy = isBusy=>({
    type: 'NEW_APP_STATUS',
    payload: isBusy
})

// prescriptionSatusObj = {isVisible:true, prescription:dataObject }
export const update_prescription_display_action = prescriptionSatusObj=>({
    type: 'PRESCRIPTION_DISPLAY_STATUS',
    payload: prescriptionSatusObj
})
