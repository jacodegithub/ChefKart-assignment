import React, { useEffect, useState } from 'react'
import './subPage.css'
import { getService2 } from '../../service/helper'
import { Ingredients } from '../../components/ingredients/ingredients'


const coverImg = "https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg"
const coverName = "dish"

const SubPage = () => {

  const [dish, setDish] = useState('')

  useEffect(() => {
    getService2().then(data => {
      setDish(data)
    }).catch(error => {
      console.log('single dish error ->', error)
    })
  }, [])

  // console.log('single dish ->', dish)

  return (
    <section className='max-width'>
      <div className="sub-page-container">
        <div className="sub-page-top-container">
          <div className="sub-page-top-container-left">
            <div className="sub-page-header">
              <div className="sub-page-header-title">{dish.name}</div>
              <div className="dish-rating">
                <span>4.2</span>
                <i className='bx bxs-star' ></i>
              </div>
            </div>
        
            <div className="sub-page-dish-description">
              {dish.name} is a style of cookery developed in the India
              Subcontinent by the Imperial Kitchens of Mughul Empire.
            </div>
            <div className="sub-page-time-icon">
              <i className='bx bx-time' ></i>
              <span className="sub-page-time">{dish.timeToPrepare}</span>
            </div>
          </div>
          <div className="sub-page-top-container-right">
              <div className="sub-page-img-bg"></div>
              <div className="sub-page-top-img-wrapper">
                <img src={coverImg} alt={coverName} className='sub-page-dish-img'/>
              </div>
          </div>
        </div>
        
        <div className="sub-page-separator"></div>
        <div className="sub-page-dish-ingredients">
          <div className="sub-page-dish-ingredients-header">
            <span className='sub-page-ingredients'>Ingredients</span>
            <span className="sub-page-people">For 2 people</span>
          </div>
          <div className="sub-page-divider"></div>
          <div className="sub-page-dish-contents">
            <div className="ingredients-title">Vegetables (05)</div>
            <div className="sub-page-dish-top">
            
              {
                dish && dish?.ingredients?.vegetables?.map((item, index) => {
                  return <Ingredients key={index} item={item} />
                })
              }
            </div>
            <div className="ingredients-title">Spices (10)</div>
            <div className="sub-page-dish-top">
              {
                dish && dish?.ingredients?.spices?.map((item, index) => {
                  return <Ingredients key={index} item={item} />
                })
              }
            </div>
            <div className="appliances-title">Appliances</div>
            <div className="sub-page-appliances">
              {
                dish && dish?.ingredients?.appliances?.map((item, index) => {
                  return (
                    <div key={index} className="appliances-naem">
                      <i className='bx bx-fridge' ></i>
                      <span>{item.name}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubPage