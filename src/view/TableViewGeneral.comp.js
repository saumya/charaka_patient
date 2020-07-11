// View
// TableViewGeneral.comp.js

import React from 'react'

const TableViewGeneral = ()=>{
    return(
        <div>
            <div className="level is-mobile">
                <div className="level-left">
                    <div className="level-item">
                        <p className="title">Menu One</p>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item has-text-centered">
                        <p>User Name</p>
                    </div>
                </div>
            </div>
            <div className="level is-mobile">
                <div className="level-left">
                    <div className="level-item">
                        <p className="title">Second</p>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item has-text-centered">
                        <p>User Name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableViewGeneral