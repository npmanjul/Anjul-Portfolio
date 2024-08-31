import React from 'react'
import './Services.css'
import webImg from '../assets/AboutUs/domain.png'
import uiux from '../assets/AboutUs/ux.png'
import code from '../assets/AboutUs/coding.png'

const services=[
    {
        image:webImg,
        description:"Possesses a deep understanding of both frontend and backend frameworks, along with proficiency in GitHub and AWS."
    },
    {
        image:uiux,
        description:"Skilled in designing visually appealing user interfaces that provide a positive and user-friendly experience."
    },
    {
        image:code,
        description:"Strong understanding of data structures and algorithms, with experience solving over 400+ problems."
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