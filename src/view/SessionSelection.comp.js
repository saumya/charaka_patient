// View
// SessionSelection.comp.js

import React, {useState} from 'react'

const SessionSelectionComponent = (props)=>{
    const [selectedValue, setSelectedValue] = useState('')
    const onSelectionDone = (name)=>{
        setSelectedValue(name)
        if(name==='morning'){
            props.onSessionSelect(true)
        }else if(name==='evening'){
            props.onSessionSelect(false)
        }

    }
    return(
        <div>
            <h4 className='is-size-4'> Session </h4>
            <div className="buttons">
                <button className={selectedValue==="morning" ? "button is-dark" : "button"} onClick={ ()=>onSelectionDone('morning') }> Morning </button>
                <button className={selectedValue==="evening" ? "button is-dark" : "button"} onClick={ ()=>onSelectionDone('evening') }> Evening </button>
            </div>
        </div>
    )
}

export default SessionSelectionComponent