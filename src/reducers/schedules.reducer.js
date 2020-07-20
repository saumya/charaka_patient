// Reducer
// schedules.reducer.js

const intialState = {
    name: 'SchedulesReducer',
    patient_schedules:[],
    doctor_schedules_per_day:[],
    doctor_num_schedules_per_day: { morning:0, evening:0}
}

const SchedulesReducer = (state=intialState, action)=>{
    switch(action.type){
        case 'UPDATE_PATIENT_SCHEDULES':
            return ({ ...state, patient_schedules: action.payload })
            break
        case 'UPDATE_DOCTOR_SCHEDULES_PER_DAY':
            const numSchedues = action.payload.length
            const morningSchedules = action.payload.filter( schedule=>(schedule.is_morning===true) )

            const numMorningSchedules = morningSchedules.length
            const numEveningSchedules = numSchedues - numMorningSchedules

            return ({ ...state, 
                        doctor_schedules_per_day: action.payload, 
                        doctor_num_schedules_per_day:{
                            morning: numMorningSchedules,
                            evening: numEveningSchedules
                        } 
                    })
            break
        default:
            return state
            break
    }
}

export default SchedulesReducer