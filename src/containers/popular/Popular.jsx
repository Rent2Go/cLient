import React from 'react'
import {  PopCarList } from "../../components";

import './popular.css'

const Popular = () => {
  return (
    <div className='rent2go__popular section__padding' >
        <div className="rent2go__popular-heading">
            <h1>Popüler Araçlar</h1>
        </div>
        <div className="rent2go__popular-content">
        <PopCarList />
        </div>
    </div>
  )
}

export default Popular