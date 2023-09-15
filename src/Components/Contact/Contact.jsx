import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsChatDots, BsFillChatDotsFill, BsFillChatRightDotsFill} from 'react-icons/bs'
import {HiChatBubblebottomCenter} from'react-icons/hi2'

const Contact = () => {
  return (
   <section className="c-wrapper">

       <div className="paddings innerwidth flexcenter c-container">
                
            <div className="c-left flexcolstart">
            <span className='orangetext '>Our Contact</span>
            <span className='primarytext'>Easy to Contact</span>
            <span className='secondarytext'>WE are always ready to help by provuding the best services. feel free to contact us through any of these means. Lets get talking!!</span>


            <div className="flexcolstart contactmodes">

              <div className="flexstart row">

                <div className="flexcolcenter mode">
                  <div className="flexstart ">

                  <div className="flexcenter icon">
                    <MdCall size={25}/>
                  </div>

                  <div className="flexcolstart detail">
                    <span className='primarytext'>Call</span> 
                    <span className='secondarytext'>09150980633</span>
                  </div>
                </div>
                <div className="flexcenter button">
                  Call now
                </div>

              </div>

                <div className="flexcolcenter mode">
                  <div className="flexstart ">

                  <div className="flexcenter icon">
                    <BsFillChatDotsFill size={25}/>
                  </div>

                  <div className="flexcolstart detail">
                    <span className='primarytext'>Chat</span> 
                    <span className='secondarytext'>09150980633</span>
                  </div>
                </div>
                <div className="flexcenter button">
                  Chat now
                </div>

              </div>
            </div>
              <div className="flexstart row">

                <div className="flexcolcenter mode">
                  <div className="flexstart ">

                  <div className="flexcenter icon">
                    <BsChatDots size={25}/>
                  </div>

                  <div className="flexcolstart detail">
                    <span className='primarytext'>Video Call</span> 
                    <span className='secondarytext'>09150980633</span>
                  </div>
                </div>
                <div className="flexcenter button">
                Virtual Meet
                </div>

              </div>

                <div className="flexcolcenter mode">
                  <div className="flexstart ">

                  <div className="flexcenter icon">
                    <BsFillChatRightDotsFill size={25}/>
                  </div>

                  <div className="flexcolstart detail">
                    <span className='primarytext'>Message</span> 
                    <span className='secondarytext'>09150980633</span>
                  </div>
                </div>
                <div className="flexcenter button">
                 Message Now
                </div>

              </div>
            </div>




            </div>
            </div>
            <div className="c-right">
                  <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                  </div>
            </div>

        </div>

   </section>
  )
}

export default Contact
