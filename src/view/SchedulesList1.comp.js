// View 
// SchedulesList1.comp.js
//

import React, {useEffect} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'

import {getMySchedulesAction} from '../actions/schedule_action'

import BusyComp from './Busy.comp'


const SchedulesList1Component = ()=>{

    const dispatch = useDispatch()

    const appMessages = useSelector( state=> state.messages )
    const loginData = useSelector( state=> state.loginData.loginUserObj )
    const allSchedulesData = useSelector( state=> state.schedulesData.patient_schedules )

    let calledMySchedulesAPI = true
    useEffect(()=>{
        console.log('SchedulesList1Component : useEffect :')
        dispatch( getMySchedulesAction(loginData.id) )
    },[calledMySchedulesAPI])

    const getMySchedules = ()=>dispatch( getMySchedulesAction(loginData.id) )
    const joinWebConference = (url)=>{
        //console.log('joinWebConference : url :',url)
        const windowFeatures = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no"
        const newWindow = window.open(url, 'FH:WebConferencing', windowFeatures)
        window.console.log('newWindow:', newWindow )
    }
    


    return(
        <React.Fragment>
            <div className="container">
                <div className="title"> My Schedules </div>
                <div className="subtitle"> All the appointments { appMessages.app_is_busy ? "Please Wait ..." : "" } </div> 
                
                <div className="field">
                    <div className="control">
                        <button className="button" onClick={getMySchedules}>Get My Schedules</button>
                    </div>
                </div>
                
                <BusyComp isBusy={ appMessages.app_is_busy }/>

                <div className="container">
                    {/* appMessages.msg_info */}
                    {/* JSON.stringify(allSchedulesData) */}
                    {
                        allSchedulesData.map(schedule=>(
                            
                            <div className="level has-background-light" key={schedule.id} style={{}}>
                                <div className="level-left">
                                    <div className="level-item">
                                        <div className="is-size-7">Id-{schedule.id}</div>
                                    </div>
                                    <div className="level-item">
                                        <div className="is-size-5">{schedule.on_date}</div>
                                    </div>
                                    <div className="level-item">
                                        <div>{schedule.is_morning ? <span className="tag is-medium is-success">Morning</span> : <span className="tag is-medium is-danger">Evening</span>  }</div>
                                    </div>
                                    <div className="level-item">
                                        <div className="is-size-5">{schedule.isWeb ? <span>Online at-{schedule.web_at_time}</span> : ""}</div>
                                    </div>
                                </div>
                                <div className="level-right">
                                    <div className="level-item">
                                        <div>{schedule.isWeb ?  <button className="button is-info" onClick={()=>joinWebConference(schedule.webURL)}>Join Web</button> : ""}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </React.Fragment>
    )
}

export default connect()(SchedulesList1Component)