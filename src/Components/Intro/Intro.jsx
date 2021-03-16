import React from 'react';
import './Intro.scss';
import '../../App.scss';
import view_more from '../../Image/more.webp'

import { Link } from "react-router-dom";

function Intro() {
    return (
        <div className="app-intro">
            <div className="app-intro__main">
                <div className="app-intro__text">
                    <span className="app-intro__title">
                        Gourmet Georgian cuisine
                    </span>
                    <Link >
                        <img
                        className="app-intro__view" 
                        src={view_more} />
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default Intro;
