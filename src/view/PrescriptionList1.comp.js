// View
// PrescriptionList1.comp.js
//

import React, {useState} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'

import ModalGeneralComponent from './ModalGeneral.comp'
import ModalDeleteConfirmComp from './ModalDeleteConfirmPrescription.comp'

import {    getMyPrescriptionsAction, 
            deletePrescriptionWithIdAction } from '../actions/prescription_action'
import {update_prescription_display_action} from '../actions/messages_action'


const PrescriptionList_1_Component = ()=>{
    
    const dispatch = useDispatch()
    const appMessages = useSelector( state=> state.messages )
    const loginData = useSelector( state=> state.loginData.loginUserObj )
    const allPrescriptionsData = useSelector( state=> state.prescriptionsData.patient_prescriptions )

    const getMyPrescriptions = ()=>dispatch( getMyPrescriptionsAction(loginData.id) ) 

    const [ isModalConfirmationVisible, setModalVisibility ] = useState(false)
    const [ prescriptionToDelete, setPrescriptionToDelete] = useState(null)

    const onPrescriptionDetailClick = (prescription)=>{
        console.log('onPrescriptionDetailClick :',prescription)
        //dispatch( getMyPrescriptionsAction(loginData.id) )
        //dispatch( update_prescription_display_action(true) )
        dispatch( update_prescription_display_action({
            isVisible: true,
            prescription: prescription
        }) )
    }

    const onDeleteClick = (prescription)=> { 
        setPrescriptionToDelete(prescription)
        setModalVisibility(true)
    }
    const onModalCloseClick = ()=> {
        setPrescriptionToDelete(null)
        setModalVisibility(false)
    }
    const onModalYesClick = ()=> { 
        console.log('TODO: Delete This prescription') 
        console.log('Prescription', prescriptionToDelete)
        dispatch( deletePrescriptionWithIdAction(prescriptionToDelete) )
        //
        if(appMessages.app_is_busy){
            //
        }else{
            setModalVisibility(false)
            //getMyPrescriptions()
        }
    }
    
    

    return(
        <React.Fragment>
            <ModalDeleteConfirmComp showIt={isModalConfirmationVisible} closeIt={onModalCloseClick} deleteIt={onModalYesClick} />
            <div className="container">
                <div className="title"> My Prescriptions </div>
                <div className="subtitle"> All the prescriptions { appMessages.app_is_busy ? "Please Wait ..." : "" } </div> 
                <div className="field">
                    <div className="control">
                        <button className="button" onClick={getMyPrescriptions}>Get My Prescriptions</button>
                    </div>
                </div>

                <div className="container">
                    {/* JSON.stringify(allPrescriptionsData) */}
                    {
                        allPrescriptionsData.map(prescription=>(
                            <div className="container has-background-light" key={prescription.id}>
                                <div className="notification">
                                    <div>Prescription Id- {prescription.id}</div>
                                    <div>Date- { new Date(prescription.onDate).toDateString() }</div>
                                    <div>Medicines- {prescription.medicines}</div>
                                    <div>Tests- {prescription.tests}</div>
                                    <div>Observations- {prescription.observations}</div>
                                    <div>Advice- {prescription.advice}</div>
                                    <div>Note- {prescription.details}</div>
                                </div>
                                <div className="level">  
                                    <div className="level-left">
                                        <div style={{paddingLeft:'1em'}}>
                                            Follow Up - { new Date(prescription.followupDate).toDateString() }
                                        </div>
                                    </div>
                                    <div className="level-right">
                                        <div style={{paddingRight:'0.1em'}}>
                                            <button className="button is-info" onClick={()=>onPrescriptionDetailClick(prescription)}>Details</button> 
                                        </div>
                                        <div style={{paddingRight:'1em'}}>
                                            <button className="button is-danger" onClick={()=>onDeleteClick(prescription)}>Delete</button> 
                                        </div>
                                    </div>
                                </div>
                                <div className="has-background-dark has-text-centered has-text-light" style={{height:"0.2em"}} />
                            </div>
                        ))
                    }
                    
                </div>

            </div>
        </React.Fragment>
    )
}

export default connect()(PrescriptionList_1_Component)