import React from 'react'
import Collection from './Collection';

const MultiSells = () => {
  return (
    <div className="sel-container">
      <div className="item1">
        <Collection name='Necklace'/>
      </div>
      <div className="item2">
        <Collection name='bracelet'/>
      </div>
      <div className="item3">
        <Collection name='watch'/>
      </div>
    </div>
  )
}

export default MultiSells;