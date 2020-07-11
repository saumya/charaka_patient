// Component
// ModalGeneral.comp.js
//

import React, {useState} from 'react'

const ModalGeneralComponent = (props)=>{
    let [isActive, setActive] = useState(props.showIt)
    const onClose = ()=> setActive(false) 

    const renderModal = ()=>(
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
            <div className="content" style={{background:"#fff"}}>
                {props.data}
            </div>
            </div>
            <button className="modal-close is-large" onClick={onClose}></button>
        </div>
    )
    return(
        <React.StrictMode>
            { isActive ? renderModal() : ""}
        </React.StrictMode>
    )
}

export default ModalGeneralComponent