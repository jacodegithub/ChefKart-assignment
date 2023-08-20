import React, { useEffect, useState } from 'react'
import { Card } from '../cards/cards'
import { getService1 } from '../../service/helper'
import './mainPage.css'
import CalenderTime from '../calenderTimeBox/calenderTime'
import Filter from '../filter/filter'
import Collections from '../collections/collections'

export const MainPage = ({setPage}) => {

    const [dishes, setDishes] = useState('')

    useEffect(() => {
        getService1().then(data => {
            setDishes(data)
        })
        .catch(error => {
            console.log('error ->', error)
        })
    }, [])

  return (
    <div>
        <div className="black-bg"></div>
        <CalenderTime />
        <Filter />
        <Collections popularDishes={dishes.popularDishes} />
        <Card dishes={dishes.dishes} setPage={setPage} />
    </div>
  )
}
