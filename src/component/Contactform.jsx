import React from 'react';
import './contactform.css'

const Contactform = () => {
  return (
    <>
        <form action="/submit-form" method="post">
        <div className='inputfield-area'>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required autoComplete='off'/>
        </div>
        
        <div className='inputfield-area'>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required autoComplete='off'/>
        </div>
        
        <div className='inputfield-area'>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" autoComplete='off'/>
        </div>
        <div className='inputfield-area'>
            <label for="bio">Message: </label>
            <textarea id="bio" name="bio" rows="5" cols="33" placeholder="Tell us a bit about yourself"></textarea>
        </div>
        </form>
        
    </>
  )
}

export default Contactform