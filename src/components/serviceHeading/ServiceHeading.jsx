import React from 'react'
import './serviceHeading.scss'
import sideImg from '../../../public/20220912_220101 (1).png'



const ServiceHeading = () => {
  return (
    <div className='services'>
      <div className='service-heading'>
        <h1>Revolutionizin <img  src={sideImg} alt="" /> <br />
                     <span>Your</span>   <br />
         Experience</h1>
      </div>
    </div>
  )
}

export default ServiceHeading