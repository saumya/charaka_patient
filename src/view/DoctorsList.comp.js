// View
// DoctorsList.comp.js

import React from 'react'
import {useSelector} from 'react-redux'


const DoctorsListComponent = ()=>{

    const appMessages = useSelector( state=> state.messages )
    const doctorsList = useSelector(state=> state.doctorsData.doctors)

    return(
        <React.Fragment>
            <div className="container">
                <div className="title"> Doctors </div>
                <div className="subtitle"> All the doctors of this clinic { appMessages.app_is_busy ? "Please Wait ..." : "" } </div>
                <div className="container">
                    {/* JSON.stringify(doctorsList) */}
                    {
                    doctorsList.map( doctor=>(
                        <div key={doctor.id}>
                            <div className="is-size-4 has-text-weight-bold">{doctor.name}</div>
                            <div className="is-size-6">{doctor.specialization}</div> 
                        </div>
                    ) )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default DoctorsListComponent