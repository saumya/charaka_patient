// View
// Busy.comp

import React from 'react'



const BusyComp = (props)=>{
    const renderNotBusy = ()=>(
        <div className="control">
            <div className="tags has-addons are-normal">
                <span className="tag is-dark">Is Ready</span>
                <span className="tag is-success">Yes</span>
            </div>
        </div>
    )
    const renderBusy = ()=>(
        <div className="control">
            <div className="tags has-addons are-large">
                <span className="tag is-dark">Application Is Busy</span>
                <span className="tag is-danger">Please wait.</span>
            </div>
        </div>
    )
    return(
        <React.StrictMode>
                <div>
                    { props.isBusy ? renderBusy() : renderNotBusy() }
                </div>
        </React.StrictMode>
    )
}

export default BusyComp