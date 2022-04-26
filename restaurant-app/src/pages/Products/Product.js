import React from 'react'
import './Product.css'
import fries from '../../assets/fries.png'
import EwaAgoyin from '../../assets/Ewa agoyin.png'
import Suya from '../../assets/international suya.png'
import jollofRice from '../../assets/Nigerian jollof.png'
import Ofada from '../../assets/Ofada.png'
import ramen from '../../assets/ramen.png'
import Egusi from '../../assets/Semo Egusi.png'
import burger from '../../assets/top burger.png'
import vegie from '../../assets/vegiie.png'


function Product() {
    const food = [
        {id:1, foodname: 'Ramen', image:ramen, price: '$5'},
        {id:2, foodname: 'Ofada Rice', image:Ofada, price: '$8'},
        {id:3, foodname: 'French Fries', image:fries, price: '$10'},
        {id:4, foodname: 'Nigerian Jollof', image:jollofRice, price: '$7'},
        {id:5, foodname: 'Vegii', image:vegie, price: '$5'},
        {id:6, foodname: 'Suya', image:Suya, price: '$8'},
        {id:7, foodname: 'King Burger', image:burger, price: '$10'},
        {id:8, foodname: 'Ewa Agoyin', image:EwaAgoyin, price: '$7'},
        {id:9, foodname: 'Semo and Egusi', image:Egusi, price: '$7'}
    ]

  return (
    <div className='productBody'>
        <h1 className='productIntro'> Explore Our Delicacies</h1>
        <p className='productinfo'> we have a wide range of special delicacy from continental to international down to to "tiwa n tiwa" (that some regard "local") <p>below are some of our best delicacy</p> </p>
        <div className='card'>
            {
                food && food.map((food) => 
                    <div className='cardBox'>
                      <div className='cardImage'>  
                        <img src={food.image} alt=''/>  
                      </div>
                      <p>{food.foodname}</p>
                      <p>{food.price}</p>
                      <button>place your order</button>         
                    </div>  
                )
            }
        </div>
    </div>
  )
}

export default Product