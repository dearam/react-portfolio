import React from 'react'

import ram from "../../images/model.jpg";
import ram2 from "../../images/model2.jpg";

const Product = ({img,link}) => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle rc"></div>
        <div className="p-circle gc"></div>
        <div className="p-circle bc"></div>
      </div>
      <a href={link} >
      <img src={img} alt="" className="p-img"/>
      </a>
    </div>
  )
}

export default Product