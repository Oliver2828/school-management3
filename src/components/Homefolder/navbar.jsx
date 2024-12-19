import React from 'react'
import { Link } from 'react-router-dom'

function navbar({show}) {
  return (
    <div  className='absolute top-9 bg-slate-400  w-[300px] ' style={{right:show, transition:'1s'}}>
      <Link to='/' className='hover:text-blue-300'>
      <div className="h-[40px] w-full text-center font-serif">Home</div>
      </Link>
          <Link to='/contact' className='hover:text-blue-300'>
            <div className='h-[40px] w-full text-center font-serif'>Contact</div>
          </Link>
          <Link to='/about' className='hover:text-blue-300'>
          <div className='h-[40px] w-full text-center  font-serif '>About</div>
           </Link>
          <Link to='/landing' className='hover:text-blue-300'>
          <div className='h-[40px] w-full text-center  font-serif'>Login</div>
          </Link>
          <Link to='/register' className='hover:text-blue-300 text-center'>
          <div className='h-[40px] w-full text-center  font-serif'>Register</div>
          </Link>
    </div>
  )
}

export default navbar