import React from 'react'
import './ingredients.css'

export const Ingredients = ({item}) => {
    return (
        <div className="content-01">
            <div className="content-left">
                {item.name}
            </div>
            <div className="content-right">
                {item?.quantity && item.quantity}
            </div>
        </div>
      )
}
