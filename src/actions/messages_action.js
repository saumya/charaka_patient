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