import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <section className="f-wrapper">
    <div className="paddings innerwidth flexcenter f-container">



        <div className="flexcolstart f-left">
            
            <img src="./logo2.png" alt="" srcset="" width={120} />

            <span className="secondarytext">
                Our Vision is to provide everyone <br />
                the best place to live and succeed 
            </span>
        </div>


        <div className="f-right flexcolstart">
            <span className='primarytext'>Information</span>
            <span className='secondarytext'>Police Road Ilorin Kwara State</span>

            <div className="flexcenter f-menu">

                <span>Property</span>
                <span>Service</span>
                <span>Products</span>
                <span>About Us</span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Footer
