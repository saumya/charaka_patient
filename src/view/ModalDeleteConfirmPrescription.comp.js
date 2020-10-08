// ModalDeleteConfirmPrescription.comp.js
import React, {useState, useEffect} from 'react'

const ModalDeleteConfirmPrescription = (props)=>{
    
    const [isActive, setActive] = useState(false)
    const onClose = ()=> { props.closeIt() }
    const onDelete = ()=> { props.deleteIt() }
    useEffect(()=> setActive(props.showIt) )
    

    const renderModal = ()=>(
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="content" style={{background:"#fff"}}>

                    {/* props.data */}
                    
                    <section className="section">
                        <div className="container">
                            <h1 className="title">Are you sure?</h1>
                            <h2 className="subtitle">You are going to <span className="has-text-danger">Delete</span> it.</h2>
                            
                        </div>
                        <div className="level">
                            <div className="level-left"> </div>
                            <div className="level-right">
                                <div style={{paddingRight:'0.4em'}}>
                                    <button className="button is-success" onClick={onDelete}> Yes </button> 
                                </div>
                                <div style={{paddingRight:'1em'}}>
                                    <button className="button is-danger" onClick={onClose}> No </button> 
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/*
                    <div className="level">
                        <div className="level-left"> Are you Sure?</div>
                    
                        <div className="level-right">
                            <div style={{paddingRight:'0.4em'}}>
                                <button className="button is-success"> Yes </button> 
                            </div>
                            <div style={{paddingRight:'1em'}}>
                                <button className="button is-danger"> No </button> 
                            </div>
                        </div>
                    </div>
                    */}
                    

                </div>
            </div>
            <button className="modal-close is-large" onClick={onClose}></button>
        </div>
    )

    return(
        <React.Fragment>
            { isActive ? <div>Active</div> : <div>Not Active</div> }
            { isActive ? renderModal() : ""}
        </React.Fragment>
    )
}

export default ModalDeleteConfirmPrescription