import React, { Component } from 'react'
import './channelHome.css'
import {Link } from "react-router-dom";

export default class channelHome extends Component {
    render() {
        return (
            <div>
                {/* NavBar here */}
                {/* <div className="text-end UserNameSection">
                    <strong>{localStorage.getItem("name") ?? "User"}</strong>
                </div> */}
                <div className="HomeBody">
                    <div className="HomeContainer">
                        <div className="ButtonSection">
                            <Link to='/docSearch'><button className="mat-button-toggle" mat-raised-button color="primary" id="HomeButton" >Channelling</button> </Link>
                        </div>
                        <div className="ButtonSection">
                        <Link to='/personalDetails'><button className="mat-button-toggle" mat-raised-button color="primary" id="HomeButton">Personal Details</button></Link>
                        </div>
                        <div className="ButtonSection">
                            <button className="mat-button-toggle" mat-raised-button color="primary" id="HomeButton">Lab Reports</button>
                        </div>
                        <div className="ButtonSection">
                            <button className="mat-button-toggle" mat-raised-button color="primary" id="HomeButton">Prescriptions</button>
                        </div>
                        <div className="ButtonSection">
                        <Link to='/bookingList'><button className="mat-button-toggle" mat-raised-button color="primary" id="HomeButton">My Bookings</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

