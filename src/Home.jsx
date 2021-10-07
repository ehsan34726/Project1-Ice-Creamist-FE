import React from 'react'
import { NavLink } from 'react-router-dom';
import scoop from "../src/images/scoop.png"
import Common from "../src/Common";

const Home = () => {
    return (
        <>
           <Common 
             heading="Lets Take a ride in the world of ice-cream with"
             imgsrc={scoop} 
             visit="/service" 
             btnname="Details"/>
        </>
    );
};
export default Home;