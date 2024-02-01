import React from 'react'
import './Courses.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { Phone, Address, Email, Timings } from "../../utils/footerContent";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Courses = () => {
  return (
    <section className="c-wrapper">
    <div className="paddings innerWidth c-container">
        <div className="flexColStart c-head">
            <span className='orangeText flexColStart'>Our Courses</span>
            <span className='primaryText'>Courses we have to offer</span>
            <span className='secondaryText'>We always ready to help by the best place to live in</span>
        </div>
            <div className="flexCenter contactModes">
                {/* row */}
                {/* first course */}
                <div className='flexCenter row'>
                    <div className='flexColCenter mode'>
                        <div className="flexCenter">
                            <div className="flexColCenter detail">
                                <span className='primaryText'>5th - 10th (All Subjects)</span>
                                <span className='secondaryText'>CBSE & MP Board</span>
                            </div>
                        </div>
                        <div className="flexCenter button"><a href={Phone.link}>Call Now</a></div>
                    </div>

                    {/* second course */}
                    <div className='flexColCenter mode'>
                        <div className="flexCenter">
                            <div className="flexColCenter detail">
                                <span className='primaryText'>11th & 12th PCM</span>
                                <span className='secondaryText'>CBSE & MP Board</span>
                            </div>
                        </div>
                        <div className="flexCenter button"><a href={Phone.link}>Call Now</a></div>
                    </div>

                {/* thirs course */}
                <div className='flexColCenter mode'>
                        <div className="flexCenter">
                            <div className="flexColCenter detail">
                                <span className='primaryText'>11th & 12th Commerce</span>
                                <span className='secondaryText'>CBSE & MP Board</span>
                            </div>
                        </div>
                        <div className="flexCenter button"><a href={Phone.link}>Call Now</a></div>
                    </div>

                    {/* forth course */}
                    <div className='flexColCenter mode'>
                        <div className="flexCenter">
                            <div className="flexColCenter detail">
                                <span className='primaryText'>11th & 12th PCM</span>
                                <span className='secondaryText'>CBSE & MP Board</span>
                            </div>
                        </div>
                        <div className="flexCenter button"><a href={Phone.link}>Call Now</a></div>
                    </div>
                </div>

            </div>
    </div>
</section>
  )
}

export default Courses