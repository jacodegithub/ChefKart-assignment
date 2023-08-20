import React from 'react'
import './filter.css'

const Filter = () => {
  return (
    <section className='filter-section max-width'>
        <div className="filter-wrapper">
            <div className="filter">Italian</div>
            <div className="filter">Indian</div>
            <div className="filter">Chinese</div>
            <div className="filter">Spanish</div>
            <div className="filter">Australian</div>
            <div className="filter">Japanese</div>
        </div>
    </section>
  )
}

export default Filter