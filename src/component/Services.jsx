import React from 'react'
import './Services.css'
import webImg from '../assets/AboutUs/domain.png'
import uiux from '../assets/AboutUs/ux.png'
import code from '../assets/AboutUs/coding.png'

const services=[
    {
        image:webImg,
        description:"Has deep understanding of Frontend as well as Backend Frameworks with Github and AWS."
    },
    {
        image:uiux,
        description:"Has deep understanding of Frontend as well as Backend Frameworks with Github and AWS."
    },
    {
        image:code,
        description:"Has deep understanding of Frontend as well as Backend Frameworks with Github and AWS."
    },
]

const Services = () => {
    return (
        <>
            {services.map((serviceCard)=>(
                <div className='servicescard-container'>
                <div className='servicescard-image'>
                    <img src={serviceCard.image} />
                </div>
                <div className='servicescard-description'>
                    
                    {serviceCard.description}
                </div>
            </div>
            ))}
        </>
    )
}

export default Services