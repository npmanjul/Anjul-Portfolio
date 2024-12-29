import React, { useState } from 'react';
import './contactform.css';
import toast from 'react-hot-toast';
import { HOST_URL } from '../Constants.js';

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
        const response=await fetch(`${HOST_URL}/contacts/addNewContact`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })

        const data=await response.json()
      
        if(response.status===201){
            setFormData({
                name:'',
                email:'',
                phone:'',
                message:''
            })
            toast.success('Message sent successfully')
        }else{
            toast.error('Something went wrong')
        }
    }catch(error){
        toast.error('Something went wrong')
    }

  };

  return (
    <div className="contactform-container">
      <form onSubmit={handleSubmit} className="contactform">
        <div className="inputfield-area">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="off"
            placeholder="Enter your full name"
          />
        </div>

        <div className="inputfield-area">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
            placeholder="Enter your email"
          />
        </div>

        <div className="inputfield-area">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="off"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="inputfield-area">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="33"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          ></textarea>
        </div>

        <div className="contactus-submit-btn">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactform;