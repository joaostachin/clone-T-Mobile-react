import React from 'react';
import './styles.css';
import logo from '../Header/logo.svg';
import cellphone from '../Header/img-cellphone.jpg';

export default () => {

    return (
        <div>
            <div className="header-elements">
                <div className="menu">
                    <div className="menu-1">WIRELLES</div>
                    <div className="menu-1">BUSINESS</div>
                    <div className="menu-1">PREPAID</div>
                    <div className="menu-1">TV</div>
                    <div className="menu-1">BANKING</div>
                </div>
            </div>
            <div className="header-logo">
                <div className="navbar-global">
                    <img className="logo" src={logo} />
                    <div className="menu-navbar">
                        <a className="menu-navbar-1">Plans</a>
                            <span className="Magenta"></span>
                            <span className="Magenta Plus"></span>
                            <span className="Essencial"></span>
                            <span className="Unlimited Age 55+"></span>
                            <span className="Military & Veteran"></span>
                        <a className="menu-navbar-2">Phones & devices</a>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                        <a className="menu-navbar-3">Deals</a>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                        <a className="menu-navbar-4">Coverage</a>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                        <a className="menu-navbar-4">Banefits & more</a>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                            <span className="navbar1"></span>
                    </div>
                <div className="navbar-items">
                        <div className="navbar-items-1">Find a store</div> 
                        <div className="navbar-items-2">Contact & support</div>
                        <div className="navbar-items-3">Cart</div>
                        <div className="navbar-items-4">Search</div>
                        <div className="navbar-items-5">My account</div>
                </div>
                </div>
            </div>
            <div className="header-pink">
                <h4>T-Mobile has merged with Spring!</h4> 
                <div className="header-pink-link">Find out what this means for you</div>
            </div>
            <div className="photo-principal">
                <div className="container">
                    <img src={cellphone}/>
                </div>
                <div className="container-1">
                    <h5>LIMITED-TIME OFFER</h5>
                </div>
                <div className="container-2">
                    <h2>Get iPhone 11 Pro On Us.</h2>
                </div>
                <div className="container-3">
                    <p>Via 24 monthly bill credits when you switch and trade in an <u>eligible device.</u></p>
                </div>
                <div className="container-4">
                    <a>Find a Store</a>
                </div>
                <div className="container-5">
                    <a>Call 1-800-T-MOBILE</a>
                </div>
                <div className="container-6">
                    <b>If you cancel wireless service, credits may stop and remaining balance on required finance agreement may be due. For well- <br />
                    qualified customers; plus tax <u>See full terms</u></b>
                </div>
            </div>
            <div className="sub-photo-principal">
                <div className="text-marketing">Text-to-Give to help those affected by wildfires.</div>
                <div className="decored-link">Get more details</div>
            </div>
            <div className="slike">
                <div className="title-products">
                    <div className="title-products-1">Shop our best-selling phones.</div>
                </div>
                <div className="second-title-products">
                    <a>See all phones</a>
                </div>
            </div>
            <div className="marketing-section">marketing-section</div>
            <div className="footer1">footer1</div>
            <div className="footer2">footer2</div>
        </div>
    )
}