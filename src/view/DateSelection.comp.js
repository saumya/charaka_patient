//
// Component
// DateSelection.comp.js
//

import React, {useState} from 'react'

const DateSelectionComponent = (props)=>{

    const today = new Date()
    const y = today.getFullYear()
    const m = today.getMonth()
    const d = today.getDate()

    const[selectedDate, setSelectedDate] = useState( new Date(y,m,(d-1)) )

    const calender = []
    let i = 0
    const max = 6
    for( i; i<max; i++){
        calender.push( new Date( y, m, (d + i) ) )
    }
    
    const onButtonClick = (date)=>{
        // 2020-08-11
        let sMonth = date.getMonth()+1
        if(sMonth<10){ sMonth=('0'+sMonth) }
        const sDate = date.getFullYear() + '-' + sMonth + '-' + date.getDate()
        //console.log( sDate )
        setSelectedDate(date)
        props.onDateSelected( sDate )
    }

    return(
        <div>
            <h4 className='is-size-4'> Day </h4>
            <div className="buttons">
                { calender.map( (date, index)=>(
                    <button className={(date.toDateString() === selectedDate.toDateString()) ? "button is-medium is-dark" : "button is-medium"} onClick={()=>onButtonClick(date)} key={index}> {date.getDate()} </button>
                ) ) }
            </div>
        </div>
    )
}

export default DateSelectionComponent