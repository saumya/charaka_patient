// View
// Login.comp.js

import React,{useState} from 'react'
import {useSelector} from 'react-redux'


const LoginComponent = (props)=>{

    const appMessages = useSelector( state=> state.messages )

    const [pUserId, setUserId] = useState('')
    const [pUserPw, setPassword] = useState('')
    const [isFirstTime, setIsFirstTime] = useState(true)

    const onLoginClick = (event)=>{
        //console.log( event )
        setIsFirstTime(false)
        props.onLogin({pUserId,pUserPw})
    }

    return(
        <React.Fragment>
        <div className="columns is-centered">
        <div className="column is-half">

            <div className="container">
                
                    

                    <p className="title"> Login </p>
                    <p className="subtitle"> Use your id and Password. </p>
                    <div>
                        <div className="field">
                            <label className="label">Id</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="User Id" value={pUserId} onChange={event=>setUserId(event.target.value)} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input className="input" type="password" placeholder="Password" value={pUserPw} onChange={event=>setPassword(event.target.value)} />
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link" onClick={onLoginClick}>Login</button>
                                
                                { isFirstTime ? "" :
                                    <div className="has-text-danger" style={{"margin":"1em"}}>{ appMessages.msg_info }</div> 
                                }
                                
                            </div>
                        </div>
                        
                        { appMessages.app_is_busy 
                        ? <progress className="progress is-small is-dark" max="100" /> 
                        : <progress className="progress is-small is-dark" max="100" value="0" />  }
                        
                    </div>
                    <p>
                        It is <strong>best</strong> to use a <strong>Desktop/Laptop</strong> for this application. 
                    </p>

                
            </div>

        </div>
        </div>
        </React.Fragment>
    )
}

export default LoginComponent