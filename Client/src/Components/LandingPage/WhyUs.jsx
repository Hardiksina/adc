import React from 'react';
import "./Styles/Whyus.css";
import { Link } from 'react-router-dom';
import {GiArtificialHive} from "react-icons/gi";
import {MdOutlineSensors} from "react-icons/md";
import {LiaNetworkWiredSolid} from "react-icons/lia";
export const WhyUs = () => {
  return (
    <div className='whyus-container'>

        <div className="whyus-body">
            <div className="back-icons">
                <LiaNetworkWiredSolid />
            </div>
            <div className="whyus-left-flare"></div>
            <div className="heading-whyus-head">
                <h1 className="heading" id="whyus-heading">
                    Your <span style={{color: "#01caff"}}>Imagination</span>, Our Innovation {`<<<`}
                </h1>
                <div className="underline"></div>
            </div>
            <div className="whyus-content">
                <div className="whyus-leftbox">
                    <h3 className='internal-heading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore sit dolorum odit labore itaque commodi aliquid laudantium ratione nesciunt.</h3>
                    
                    <ul className='whyus-list'>
                        <li>Strong Network of 100 individuals</li>
                        <li>Exponential Growth with like minded people.</li>
                        <li>Senior Junior Interactions.</li>
                        <li>Stand out from the crowd!</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>

                    <Link to="#">
                        <button className='special-button'>Join Now!</button>
                    </Link>

                </div>
                <div className="whyus-rightbox">
                    <div className="rightcont">
                        <div style={{fontSize: "3rem", padding: "0.25em", display: "flex", alignItems: "center"}}>
                            <GiArtificialHive color='rgb(1 202 255 / 65%)' /> 
                            <div className="internal-heading-right">AI-ML</div>
                        </div>
                        <p className="right-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae recusandae quos sequi?</p>
                    <div className="why-flare"></div>
                    </div>
                    <div className="rightcont">
                        <div style={{fontSize: "3rem", padding: "0.25em", display: "flex", alignItems: "center"}}>
                            <MdOutlineSensors color='rgb(1 202 255 / 65%)' /> 
                            <div className="internal-heading-right">IOT</div>
                        </div>
                        <p className="right-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae recusandae quos sequi?</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
