import React, { useState } from 'react'
import './products.css'
import necklace from '../Image/necklace.png'




function Products() {
  // const [toggle, setToggle] = useState(false)

  const Products = [
    { id: '1',name: 'DIAMOND TENNIS BRACELET', price: 'R182,899.00', image: necklace },
    { id: '2', name: 'DIAMOND RING', price: 'R6778', image: 'https://images.unsplash.com/photo-1663568675454-ecd65012d8f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8RElBTU9ORCUyMFRFTk5JUyUyMEJSQUNFTEVUfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }
    
  
  
  ]

  
  return (
    <div>
         <b></b>

      {
        Products.map(product => {

          return(
          <div key={product.id} className="card">
            <img src={product.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          )
        })
      }

    </div>
  )
}

export default Products