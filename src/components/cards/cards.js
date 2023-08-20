import React from 'react'
import './cards.css'

export const Card = ({dishes, setPage}) => {

  return (
    <section className='cards max-width cur-po'>
        <div className="card-top">
          <div className="card-top-left">
            Recommended
            <i className='bx bxs-down-arrow' ></i>
          </div>
          <div className="card-top-right">
            Menu
          </div>
        </div>
        <div className="cards-wrapper">
          {
            dishes && dishes.map((dish, index) => {
              return (
                <div key={index} className="card-dish-item"
                  onClick={() => setPage('subPage')}
                >
                  <div className="card-left">
                    <div className="card-left-one">
                      <div className="card-dish-title">
                        {dish.name}
                      </div>
                      <img src="https://www.iamgoingvegan.com/wp-content/uploads/2020/05/Indian-Vegetarian-Mark-1-1024x1024.jpg" 
                          alt="veg-symbot" 
                          className='veg-symbol'
                      />
                      <div className="dish-rating">
                        <span>{dish.rating}</span>
                        <i className='bx bxs-star' ></i>
                      </div>
                    </div>
                    <div className="card-left-two">
                      <div className="card-dish-storage-type">
                        {
                          dish && dish.equipments.map((item, index) => {
                            return (
                              <div key={index} className="storage-type">
                                <i className='bx bx-fridge' ></i>
                                {item}
                              </div>
                            )
                          })
                        }
                      </div>
                      <div className="card-ingredients-view-list">
                          <span className="dish-ingrednts">Ingredients</span>
                          <div className="vw-list">View list
                            <i className='bx bx-chevron-right' ></i>
                          </div>
                      </div>
                    </div>
                    <div className="card-left-three">
                        <div className="dish-description">
                          {dish.description}
                        </div>
                    </div>
                  </div>
                  <div className="card-right">
                    <div className="card-img-wrapper">
                      <img src={dish.image} alt={dish.name} 
                        className='dish-img'
                      />
                    </div>
                    <div className="img-top-tag">
                      <span className="img-tag">Add</span>
                      <i className='bx bx-plus' ></i>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </section>
  )
}
