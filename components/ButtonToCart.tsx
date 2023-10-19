"use client"


import React from 'react'


const ButtonTocart = () => {
    

    const addClick = (e) => {
        console.log(e.value);
    }
  return (
    <div>
        <button 
        onClick={addClick} 
        className="px-6 py-2 bg-orange-400 rounded-xl">To Cart
        </button>
    </div>
    
  )
}

export default ButtonTocart