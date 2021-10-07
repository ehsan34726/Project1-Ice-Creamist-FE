import React from 'react'
import { NavLink } from 'react-router-dom';
import scoop from "../src/images/scoop.png"

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-10 mx-auto">
                            <div className='row'>
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        {props.heading}
                                        <strong className="brand-name"> Ice Creamist </strong>
                                    </h1>

                                    <h2>{props.subheading}</h2>
                                    <h3>{props.items}</h3>
                                    
                                    
                                    

                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-get-started">
                                            {props.btnname}
                                        </NavLink>
                                    </div>

                                </div>
                                <div className="col-md-6 pt-5 order-1 order-md-2 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Common img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Common;