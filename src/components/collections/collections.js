import React from 'react'
import './collections.css'

const Collections = ({popularDishes}) => {

  // console.log("popular -> ", popularDishes)

  return (
    <section className='collections max-width'>
      <div className="collections-title">
        Popular Dishes
      </div>
      <div className="colletions-wrapper">
        {
          popularDishes && popularDishes.map((dish, index) => {
            return (
            <div key={index} className="popular-dish-item">
                <div className="popular-dish-img-wrapper">
                  <img src={dish.image} alt={dish.name} 
                    className='popular-dish-img'
                  />
                </div>
                <div className="popular-dish-title-wrapper">
                  <div className="popular-dish-title">
                    {dish.name}
                  </div>
                </div>
                <div className="popular-dish-ring"></div>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Collections