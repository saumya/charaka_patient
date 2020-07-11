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
    }
}
export default apiObj