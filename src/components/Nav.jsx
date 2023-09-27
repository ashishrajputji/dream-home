import React from 'react'

function Nav() {
  return (
    <section className="nav__main">
        <div className='nav__main--logo'>
            <img src="./image/logo-modified.png" alt="" />
        </div>
        <div className="nav__main--list">
        <ul className='nav__main--list-ul'>
            <li className='nav__main--list-ul-item'>Home</li>
            <li className='nav__main--list-ul-item'>Buy Now</li>
            <li className='nav__main--list-ul-item'>Rent Now</li>
            <li className='nav__main--list-ul-item'>About Us</li>
        </ul>
        </div>
        <div className="nav__main--search">
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </section>
  )
}

export default Nav