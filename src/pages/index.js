import React from "react";
import { useMediaQuery } from "react-responsive";

import { DeviceSize } from "../components/responsive";
import "./index.css";
import Started from '../components/buttons/started';
import Play from '../components/buttons/play'
const poster=require('../assets/images/joyous.png');
const play=require('../assets/images/play.svg');
const amazon=require('../assets/images/amazon.png');
const google=require('../assets/images/google.png');
const northern=require('../assets/images/northern.png');
const skrill =require('../assets/images/skrill.png');




const Body=()=>{
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <div className="bodyContainer">
        <div className="content">
            <div className="heading">
                Don't worry.<br></br>
                We are here for<br></br> every solution.
            </div>

            <div className="description">
                Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf 
                moon. <br></br>Actually beard single-origin coffee, twee 90's PBR Echo Park

            </div>
        <div>
            <Started>
            Get Started
              </Started>
          
            <Play>
           
            <img src={play.default} alt="play"className="play"/>
            
          Watch video
          
          </Play>
        </div>

            <div className="integrations">
              <ul>
                <li>Integrations</li>
                <li><img src={amazon.default} alt="amazon"/></li>
                <li><img src={northern.default} alt="northern"/></li>
                <li><img src={google.default} alt="google"/></li>
                <li><img src={skrill.default} alt="skrill"/></li>
                
              </ul>


            </div>

        </div>
        <div className="poster">
            <img src={poster.default} alt="poster"/>

        </div>
      
    </div>
  );
}


export {Body};