import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center gap-2 p-6'>
      <div className="logo font-bold text-2xl">
            <Link to="/">Shrinkly</Link>
        </div>
        <div className="content  text-center text-xs">
            <p>Copy right &copy; - 2025. All right reserved.</p>
            <p>Developed by Rohan Jha.</p>
        </div>
    </div>
  )
}

export default Footer
