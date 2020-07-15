// View
// Login.comp.js

import React,{useState} from 'react'


const LoginComponent = (props)=>{

    let [pUserId, setUserId] = useState('')
    let [pUserPw, setPassword] = useState('')

    return(
        <React.Fragment>
        <div className="columns is-centered">
        <div className="column is-half">

            <div className="container is-fluid">
                <div className="notification">
                    

                    <p className="mb-4 is-size-3"> Login </p>
                    <p>Please <strong>Login</strong> with id and Password. </p>
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
                                <button className="button is-link" onClick={()=>props.onLogin({pUserId,pUserPw})}>Login</button>
                            </div>
                        </div>
                    </div>
                    <p>
                        It is <strong>best</strong> to use a <strong>Desktop/Laptop</strong> for this application. 
                    </p>

                </div>
            </div>

        </div>
        </div>
        </React.Fragment>
    )
}

export default LoginComponent