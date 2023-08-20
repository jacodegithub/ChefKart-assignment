import React from 'react'
import './calenderTime.css'

const CalenderTime = () => {
  return (
    <div>
        <div className="calender-time-box max-width">
            <section className="ctbox calender-section">
                <i className='bx bx-calendar' ></i>
                19-09-2023
            </section>
            <section className="ctbox time-secton">
                <i className='bx bx-time' ></i>
                10:30 PM - 12:30 PM
            </section>
        </div>
    </div>
  )
}

export default CalenderTime