import React from 'react'
import Header from './Header';
function Contact() {
    return (
    <div>
      <Header></Header>
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-black to-gray-800">
        <h1 className="text-5xl font-bold text-white mb-5"><span className='text-purple-500'>Contact</span></h1>
      </div>
    </div>
 
  )
}

export default Contact;