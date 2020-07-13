// API Configuration
// 
//

const apiObj = {
    endpoint : 'http://localhost:3000/api',
    version : '/v1',
    /* =============================== POST ================================== */
    post: {
        login: '/loginPatient',
        create_schedule : '/createSchedule/',
    },
    /* =============================== PUT ================================== */
    put: {
        update_patient_profile : '/updatePerson/',
    },
    /* =============================== DELETE ================================== */
    delete: {},
    /* =============================== GET ================================== */
    get: {
        all_doctors_by_clinic : '/getAllDoctorsByGroup/',
        
        all_schedules_by_patient_id : '/getSchedulesByPatientId/',
        all_prescription_by_patient_id: '/getPrescriptionsByPatientId/',
        all_bills_by_patient_id: '/getBillsByPatientId/',

        clinic_by_id : '/getGroupWithId/',
        doctor_by_id : '/getDoctorWithId/',
    }
}
export default apiObj