// View
// Prescription1.comp.js
//

import React, {useState,useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'

import {update_prescription_display_action} from '../actions/messages_action'

const Prescription_1_Comp = ()=>{

    const dispatch = useDispatch()
    const appMessages = useSelector( state=> state.messages )
    const loginUserObj = useSelector( state=> state.loginData.loginUserObj )
    const doctors = useSelector( state=> state.doctorsData.doctors )

    const [doctor, setDoctor] = useState({})
    const [clinic, setClinic] = useState({})

    let calledAllTheAPI = true
    useEffect(()=>{
        console.log('Prescription_1_Comp : useEffect :')
        //dispatch( getMySchedulesAction(loginData.id) )
    },[calledAllTheAPI])

    // Get the Doctor Details for this prescription
    useEffect(()=>{
        //appMessages.prescription.doctorId
        //doctor.id
        console.log('Prescription_1_Comp : useEffect :')
        const d = doctors.find( oneDoctor=> (oneDoctor.id==appMessages.prescription.doctorId) )
        setDoctor(d)
    })

    const onPrescriptionCloseClick = ()=>{
        dispatch( update_prescription_display_action({
            isVisible: false,
            prescription: {}
        }) )
    }

    return(
        <React.Fragment>
            <section className="section">
                <div className="box has-background-light">

                    <nav className="level">
                        <div className="level-left">Prescription</div>
                        <div className="level-right">
                            <div className="container">  
                                <button className="delete is-large" onClick={onPrescriptionCloseClick}></button> 
                            </div>
                        </div>
                    </nav>
                    
                    <div className="has-text-centered">
                        <p className="title">{appMessages.clinic.group_name}</p>
                        <p className="subtitle"></p>
                    </div>
                    <div className="has-text-left">
                        <div>
                            <div>Prescription Id - <strong>{appMessages.prescription.id}</strong> </div>
                            <div>On - <strong>{ new Date(appMessages.prescription.onDate).toDateString() }</strong> </div>
                        </div>
                        <div> &nbsp; </div>
                        <div>
                            {/* <div>Patient Id - {loginUserObj.id}</div> */}
                            <div>Patient</div>
                            <div> <strong>{loginUserObj.name}</strong> </div>
                            <div>Ph-{loginUserObj.phone}, Email-{loginUserObj.email}</div>
                            <div>Addresss-{loginUserObj.address}</div>
                        </div>
                        <div className="section">
                            <div> <strong>Observations -</strong> {appMessages.prescription.observations}</div>
                            <div> <strong>Tests -</strong> {appMessages.prescription.tests}</div>
                            <div> <strong>Medicines -</strong> {appMessages.prescription.medicines}</div>
                            <div> <strong>Advice -</strong> {appMessages.prescription.advice}</div>
                            <div> <strong>FollowUp Date -</strong> { new Date(appMessages.prescription.followupDate).toDateString() }</div>
                        </div>

                       
                        
                    </div>
                    
                    <div className="has-text-right">
                        Doctor
                        <div>
                            {/* <div> Doctor Id - {doctor.id}</div> */}
                            <div> <strong>{doctor.name}</strong> </div>
                            <div> {doctor.phone}</div>
                            <div> {doctor.email}</div>
                            <div> {doctor.address}</div>
                        </div>
                    </div>
                </div>
            </section> 
        </React.Fragment>
    )
}

export default connect()(Prescription_1_Comp)