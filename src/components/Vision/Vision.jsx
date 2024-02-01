import React from 'react'
import './Vision.css'
import { Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,AccordionItemState } from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from "../../utils/visions"
import { useState } from 'react';

const Vision = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="flexColStart v-left">
                <span className='orangeText'>Our Vision</span>
                <span className='primaryText'>Vision We Have</span>
                <span className='secondaryText'>
                Aspiring Excellence: Shikhram Institute's Vision for Academic Leadership
                <br/>
                and Holistic Development in PCM and Commerce
                </span>

                <Accordion className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {
                        data.map((item,i)=>{
                            const [className,setClassName]=useState(null)
                            return (
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                        <AccordionItemState>
                                            {({expanded})=> 
                                                expanded 
                                                ? setClassName("expanded")
                                                :setClassName("collapsed")
                                            }
                                        </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className='secondaryText'>{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>

            {/* right side */}
            <div className="flexEnd v-right">
                <div className='image-container'>
                    <img src='./value.png' alt=""></img>
                </div>
            </div>
        </div>
    </section>
  ) 
}

export default Vision