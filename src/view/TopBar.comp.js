// View
// TopBar.comp.js
//

import React from 'react'

const TopBarComponent = ()=>{
    return(
        <React.Fragment>
            <nav className="navbar is-primary is-fixed-top" role="navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://findhealth.today"> FindHealth </a>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default TopBarComponent