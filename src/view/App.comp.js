// Component
// App.comp.js

import React from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'

import TopBarComp from './TopBar.comp'
import BusyComp from './Busy.comp'
import ModalGeneral from './ModalGeneral.comp'
import TableViewGeneral from './TableViewGeneral.comp'
import LoginComponent from './Login.comp'
import LoggedUserHome from './LoggedUserHome.comp'

import {update_message} from '../actions/messages_action'
import {loginAction, updateLoginStatus} from '../actions/login_action'

const AppComponent = ()=>{

    const dispatch = useDispatch()
    
    const appMessages = useSelector( state=> state.messages )
    const loginData = useSelector( state=> state.loginData )
    

    const onLoginButtonClick = (loginObj)=>{
        //dispatch( update_message(loginObj) )
        dispatch( loginAction(loginObj) )
    }
    const onLogoutButtonClick = ()=>dispatch( updateLoginStatus(false) )

    return(
        <React.Fragment>
            <section className="section has-navbar-fixed-top" style={{marginTop:'4em'}}>
            <div>
                <TopBarComp />
                <ModalGeneral showIt={false} data="This is Modal" />

                {/* <BusyComp isBusy={ appMessages.app_is_busy }/> */}
                
                {/* <TableViewGeneral /> */}
                { appMessages.app_is_busy ? <progress className="progress is-small is-primary" max="100"/> : <progress className="progress is-small is-primary" value="0" max="100" />}

                

                

                

                <div className="container is-fluid">
                    
                    

                    { loginData.isLoggedIn ? <LoggedUserHome onLogout={onLogoutButtonClick} /> : <LoginComponent onLogin={onLoginButtonClick} /> }
                    
                    {/* <h1>{loginData.loginUserObj.name}</h1> */}

                    {/* JSON.stringify(appMessages) */}

                    
                    
                </div>
                

                
                

                
                
            </div>
            </section>
        </React.Fragment>
    )
}

export default connect()(AppComponent)