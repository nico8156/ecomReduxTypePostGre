"use client"

const ButtonTocart: React.FC<{ children: string }> = ({ children }) =>{
    
  return (
    <div>
        <button 
          className="px-6 py-2 bg-orange-400 rounded-xl">To Cart
        </button>
    </div>
    
  )
}

export default ButtonTocart