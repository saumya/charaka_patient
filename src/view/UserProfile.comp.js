// Component
// UserProfile.comp.js
//

import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {updateProfileAction, updateHealthProfileAction} from '../actions/login_action'


const UserProfile = ()=>{

    const dispatch = useDispatch()

    // Redux Store
    const appMessages = useSelector( state=> state.messages )
    const loggedInUser = useSelector(state=> state.loginData)
    
    // Local State
    const [userProfile, setUserProfile] = useState({...loggedInUser.loginUserObj})

    const onUpdateProfileClick = ()=>{
        console.log('onUpdateProfileClick', userProfile)
        // serialising data as per API request
        const newProfile = {
            personId: userProfile.id,
            personName: userProfile.name,
            personEmail: userProfile.email,
            personPhone: userProfile.phone,
            personAddress: userProfile.address,
            personPassword: userProfile.password
        }
        //
        dispatch( updateProfileAction(newProfile) )
    }

    const onUpdateHealthProfileClick = ()=>{
        console.log('onUpdateHealthProfileClick', userProfile);
        dispatch( updateHealthProfileAction(userProfile) )
    }


    

    return(
        <React.Fragment>
            
            <div className="notification">
                <p className="mb-4 is-size-3"> Health Profile </p>
                
                <div className="field">
                    <label className="label">Gender</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Gender" value={userProfile.gender || ''} onChange={ event=>setUserProfile({ ...userProfile, gender:event.target.value}) } />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Age</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Age" value={userProfile.age || ''} onChange={ event=>setUserProfile({ ...userProfile, age:event.target.value}) } />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Height</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Height" value={userProfile.height || ''} onChange={ event=>setUserProfile({ ...userProfile, height:event.target.value}) } />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Weight</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Weight" value={userProfile.weight || ''} onChange={ event=>setUserProfile({ ...userProfile, weight:event.target.value}) } />
                    </div>
                </div>
                <div className="field">
                    <label className="label">BloodGroup</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="BloodGroup" value={userProfile.bloodGroup || ''} onChange={ event=>setUserProfile({ ...userProfile, bloodGroup:event.target.value}) } />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={onUpdateHealthProfileClick}>Update Health Profile</button>
                    </div>
                </div>

                <div className="field">
                { 
                    appMessages.app_is_busy 
                    ? <progress className="progress is-small is-dark" max="100" /> 
                    : <progress className="progress is-small is-dark" max="100" value="0" />  
                }
                </div>
                
            </div>

            <div className="notification">

                <p className="mb-4 is-size-3"> General Profile </p>
                
                <div>
                    <div className="field">
                        <label className="label">Id - {userProfile.id}</label>
                    </div>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="name" value={userProfile.name} onChange={ event=>setUserProfile({ ...userProfile, name:event.target.value}) } />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="password" value={userProfile.password} onChange={ event=>setUserProfile({ ...userProfile, password:event.target.value}) } />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Phone</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="phone" value={userProfile.phone} onChange={ event=>setUserProfile({ ...userProfile, phone:event.target.value}) } />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="email" value={userProfile.email} onChange={ event=>setUserProfile({ ...userProfile, email:event.target.value}) } />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Address</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="address" value={userProfile.address} onChange={ event=>setUserProfile({ ...userProfile, address:event.target.value}) } />
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" onClick={onUpdateProfileClick}>Update</button>
                        </div>
                    </div>
                    
                    <div className="field">
                    { 
                        appMessages.app_is_busy 
                        ? <progress className="progress is-small is-dark" max="100" /> 
                        : <progress className="progress is-small is-dark" max="100" value="0" />  
                    }
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default UserProfile