import React from 'react';
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="header">
           <Link to="/" >
               Streamer
           </Link>
           <div className="header__cta">
           <Link className="header__cta--link" to="/">
               All Streams
           </Link>
           <GoogleAuth />
           </div>
        </div>
    );
}


export default Header;