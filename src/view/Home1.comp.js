// View
// Home1.comp.js

import React, { useState } from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'

import LoginComponent from './Login.comp'
import LoggedUserHome from './LoggedUserHome.comp'
import Prescription_1_Comp from './Prescription1.comp'

import {update_message} from '../actions/messages_action'
import {loginAction, updateLoginStatus} from '../actions/login_action'

const Home1Component = ()=>{

    const dispatch = useDispatch()

    const appMessages = useSelector( state=> state.messages )
    const loginData = useSelector( state=> state.loginData )
    //
    const[isSideMenuOpen,setOpenSideMenu] = useState(false)

    // PROFILE / SCHEDULES / PRESCRIPTIONS / NEW_SCHEDULE / DOCTORS_LIST
    const[activeViewName, setActiveViewName] = useState('NEW_SCHEDULE')

    const onLoginButtonClick = (loginObj)=>dispatch( loginAction(loginObj) )
    const onLogoutButtonClick = ()=>{
        setOpenSideMenu(false)
        dispatch( updateLoginStatus(false) )
    }


    return(
        <React.Fragment>

{ 
    appMessages.should_show_prescription ?
    <Prescription_1_Comp />
    : 

           
<section className="section">
    <div className="columns">

        { isSideMenuOpen ? 

        <div className="column is-narrow">
            <div className="box has-background-light" style={{"width": "200px"}}>
                
                <nav className="level">
                    <div className="level-left"></div>
                    <div className="level-right">
                        <div className="container">  <button className="delete is-large" onClick={()=>setOpenSideMenu( !isSideMenuOpen )}></button> </div>
                    </div>
                </nav>


                <p className="title is-5">FindHealth</p>
                <p className="subtitle">Navigation</p>
                
                <div className="field">
                    <div className="control">
                        <button className="button is-text" onClick={()=>setActiveViewName('PROFILE')}>My Profile</button>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-text" onClick={()=>setActiveViewName('SCHEDULES')}>My Schedules</button>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-text" onClick={()=>setActiveViewName('PRESCRIPTIONS')}>My Prescriptions</button>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-link" onClick={()=>setActiveViewName('NEW_SCHEDULE')}>Schedule Now</button>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-text" onClick={()=>setActiveViewName('DOCTORS_LIST')}>Doctors List</button>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-text" onClick={onLogoutButtonClick}>Logout</button>
                    </div>
                </div>
                
            </div>
        </div> 

        : "" }
        

        <div className="column">
            <div className="box">
                <nav className="level">
                    <div className="level-left">
                    
                    { loginData.isLoggedIn ?

                            isSideMenuOpen ? "" : 
                            <button className="button is-text" onClick={()=>setOpenSideMenu( !isSideMenuOpen )}>Menu</button>
                        
                        : "" }   
                    
                    </div>
                    <div className="level-right"> FindHealth </div>
                </nav>
                <p className="title is-5">  </p>
                    <p className="subtitle">  </p>

                { loginData.isLoggedIn ? <LoggedUserHome activeViewName={activeViewName} onLogout={onLogoutButtonClick} /> : <LoginComponent onLogin={onLoginButtonClick} /> }

            </div>
        </div>

    </div>
</section>
}
        </React.Fragment>
    )
}

export default connect()(Home1Component)
