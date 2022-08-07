import React from 'react'
import "./productList.css"
import "../product/product.css"
import Product from '../product/product'
import {products} from "../../data"
import img from "../../images/model.jpg";
import img2 from "../../images/model2.jpg";
import img3 from "../../images/model3.jpeg";
import img4 from "../../images/mode4.jpeg";
import img5 from "../../images/model5.png";
import img6 from "../../images/model6.png";

const productList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Projects  &  my works</h1>
            <p className='pl-desc'>
                I loved to create new type of website using react,angular and Flask. 
                Here my own all projects what were I done.
            </p>
        </div>
        <div className='pl-list'>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle rc"></div>
                    <div className="p-circle gc"></div>
                    <div className="p-circle bc"></div>
                </div>
                <a href="http://dearam.pythonanywhere.com/" >
                    <img src={img} alt="" className="p-img"/>
                </a>
            </div>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle rc"></div>
                    <div className="p-circle gc"></div>
                    <div className="p-circle bc"></div>
                </div>
                <a href="https://github.com/dearam/video-serch" >
                    <img src={img2} alt="" className="p-img"/>
                </a>
            </div>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle rc"></div>
                    <div className="p-circle gc"></div>
                    <div className="p-circle bc"></div>
                </div>
                <a href="https://github.com/dearam/dashboard" >
                    <img src={img3} alt="" className="p-img"/>
                </a>
            </div>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle rc"></div>
                    <div className="p-circle gc"></div>
                    <div className="p-circle bc"></div>
                </div>
                <a href="https://github.com/dearam" >
                    <img src={img4} alt="" className="p-img"/>
                </a>
            </div>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle rc"></div>
                    <div className="p-circle gc"></div>
                    <div className="p-circle bc"></div>
                </div>
                <a href="https://github.com/dearam" >
                    <img src={img5} alt="" className="p-img"/>
                </a>
            </div>
            <div className='p'>
                <div className="p-browser">
                    <div className="p-circle rc"></div>
                    <div className="p-circle gc"></div>
                    <div className="p-circle bc"></div>
                </div>
                <a href="https://github.com/dearam" >
                    <img src={img6} alt="" className="p-img"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default productList