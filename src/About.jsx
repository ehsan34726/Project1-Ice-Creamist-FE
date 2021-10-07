import React from 'react'
import { NavLink } from 'react-router-dom';
import scoop from "../src/images/scoop.png"
import Common from "../src/Common";

const About = () => {
    return (
        <>
            <Common
                heading="Variety is the spice of life!"
                subheading=" We rotate through an amazing selection of roll ice cream and serve different flavors every day."
                items="Gelato, Rolls, Bingsoo, Soft Serve, Cone, Sundaes, Float"
                
            
                imgsrc={scoop}
                visit="/contact"
                btnname="Contact" />
        </>
    );
};
export default About;