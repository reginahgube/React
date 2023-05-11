import React from 'react'
import CardBox from './CardBox';
import '../Components/Card.css'

function MultiCard() {
  return (
    <div className="grid-container">
      <div className="item1">
        <CardBox className='cardBox' image='https://thediamondbox.co.za/wp-content/uploads/2022/10/1102413-9ct-White-Gold-Ladies-Diamond-Halo-Engagement-Ring-main.jpg' />
        <button className='price'>R4567</button></div>
      <div className="item2">
        <CardBox image='https://cdn.shopify.com/s/files/1/0352/5958/0475/products/CZRG008.jpg?v=1588267778&width=823' />
        <button className='price'>R3400</button>
      </div>
      <div className="item3">
        <CardBox image='https://jewelshop.co.za/wp-content/uploads/2021/01/599288.jpg.webp' />
        <button className='price'>R3330</button>
      </div>
      <div className="item4">
        <CardBox image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEO4TOGlwNkWWctNCgboedrkWMEcNQFGerkA&usqp=CAU' />
        <button className='price'>R3900</button>
      </div>
      <div className="item5">
        <CardBox image='https://plus.unsplash.com/premium_photo-1678727212341-eb0a264a6800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2Vtc3RvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
        <button className='price'>R1999</button>
      </div>
      <div className="item6">
        <CardBox image='https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGpld2Vscnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
        <button className='price'>R4300</button>
      </div>
      <div className="item7">
        <CardBox image='https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2glMjB3b21lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
        <button className='price'>R7800</button>
      </div>
      <div className="item8">
        <CardBox image='https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        <button className='price'>R4567</button>
      </div>
      <div className="item9">
        <CardBox image='https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmVja2xhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
        <button className='price'>R3999</button>
      </div>
      <div className="item10">
        <CardBox image='https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5lY2tsYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        <button className='price'>R999</button>
      </div>
      <div className="item11">
        <CardBox image='https://images.unsplash.com/photo-1581344947734-faed9fc80bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5lY2tsYWNlJTIwZGlhbW9uZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
        <button className='price'>R3367</button>
      </div>
      <div className="item12">
        <CardBox image='https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5lY2tsYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        <button className='price'>R5999</button>
      </div>
    </div>
  )
}

export default MultiCard;
