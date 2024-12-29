import React, { useEffect, useState } from 'react';
import './aboutprofile.css';
import { HOST_URL } from '../Constants';

const Aboutprofile = () => {
  const [about, setAbout] = useState("")
  const [image, setImage] = useState("")

  const getAbout = async () => {
    try {
      const response = await fetch(`${HOST_URL}/about/getAbout`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()
      setImage(data.about[0].image)
      setAbout(data.about[0].about)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAbout()
  }, [])

  return (
    <>
      <div className='aboutusprofile-container' >
        <div className='aboutusprofile-image'><img src={image} /></div>
        <div className='aboutusprofile-description'>
        {about}
        </div>
      </div>
    </>
  )
}

export default Aboutprofile