import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { Phone, Address, Email, Timings } from "../../utils/footerContent";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>We always ready to help by the best place to live in</span>
                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className='flexStart row'>
                        <div className='flexColCenter mode'>
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>{Phone.name}</span>
                                </div>
                            </div>
                            <div className="flexCenter button"><a href={Phone.link}>Call Now</a></div>
                        </div>

                        {/* second mode */}
                        <div className='flexColCenter mode'>
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    {/* <BsFillChatDotsFill size={25}/> */}
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>{Phone.name}</span>
                                </div>
                            </div>
                            <div className="flexCenter button"><a href={Phone.link}>Chat Now</a></div>
                        </div>
                    </div>

                    {/* thirs row */}
                    <div className='flexStart row'>
                        <div className='flexColCenter mode'>
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    {/* <BsFillChatDotsFill size={25}/> */}
                                    <RiWhatsappFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>WhatsApp</span>
                                    <span className='secondaryText'>89621 65653</span>
                                </div>
                            </div>
                            <div className="flexCenter button">WhatsApp Now</div>
                        </div>

                        {/* forth mode */}
                        <div className='flexColCenter mode'>
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdEmail size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Email</span>
                                    <span className='secondaryText'>{Email.name}</span>
                                </div>
                            </div>
                            <div className="flexCenter button"><a href={Email.link}></a>Email Us Now</div>
                        </div>
                    </div>

                </div>
            </div>
            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src='./contact.jpg' alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact