// Component
// UserProfile.comp.js
//

import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {updateProfileAction} from '../actions/login_action'


const UserProfile = ()=>{

    const dispatch = useDispatch()

    // Redux Store
    const loggedInUser = useSelector(state=> state.loginData)
    
    // Local State
    const [userProfile, setUserProfile] = useState({...loggedInUser.loginUserObj})

    const onUpdateProfileClick = ()=>{
        console.log('onUpdateProfileClick', userProfile)
        console.log('TODO: Action and Reducer')
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


    

    return(
        <React.Fragment>
            <div className="notification">

                <p className="mb-4 is-size-3"> Profile </p>
                
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
                </div>

            </div>
        </React.Fragment>
    )
}

export default UserProfile