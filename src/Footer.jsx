import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
      <small>Copyright &copy; {new Date().getFullYear()}</small>
    </div>
  )
}

export default Footer