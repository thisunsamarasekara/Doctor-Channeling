import axios from 'axios';
import React, { Component } from 'react'
import './addAppointment.css'
import { Link } from "react-router-dom";

export default class addAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            status: "",
            time: "",
        };
        this.state = { channelDetails: [] };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            date: this.state.date,
            status: this.state.status,
            time: this.state.time
        };
        console.log("Data to send ", data);

        axios.post("http://localhost:4000/channelDetails/add", data)
            .then((res) => console.log(res.data));

            this.props.history.push('/channelDetails')
        this.setState({
            date: "",
            status: "",
            time: "",
        });
        
    };

    reset() {
        const res = {
            date: "",
            status: "",
            time: "",
        }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/channelDetails/")
            .then((response) => {
                this.setState({ addAppointment: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
                {/* Header here */}
                <div class="AppoinmentHead">
                    <h2>MAKE APPOINMENT</h2>
                    <div class="AppoinmentContainer">
                        <form onSubmit={this.handleSubmit}>
                            <input type="hidden" name="id" />
                           {/* Doctor name*/}
                            
                          
                            
                            <div class="form-group AppoinmentData row g-6 align-items-center">
                                <div class="col-auto">
                                    <label for="appoinmentDate">Appoinment Date :</label>
                                </div>
                                <div class="col-auto">
                                    <input type='date' class="form-control AppoinmentText" name="date" required value={this.state.date} onChange={this.handleChange} />
                                </div>
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                            <div class="form-group AppoinmentData row g-6 align-items-center">
                                <div class="col-auto">
                                    <label for="appoinmentStatus">Status :</label>
                                </div>
                                <div class="col-auto">
                                    <select class="form-control AppoinmentDropdown" name="status" required value={this.state.status} onChange={this.handleChange}>
                                        <option>Choose Status</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Complete">Complete</option>
                                        <option value="Cancelled">Cancelled</option>
                                        <option value="Refund">Refund</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group AppoinmentData row g-6 align-items-center">
                                <div class="col-auto">
                                    <label for="appoinmentTime">Time :</label>
                                </div>
                                <div class="col-auto">
                                    <select class="form-control AppoinmentDropdown1" name="time" required value={this.state.time} onChange={this.handleChange}>
                                        <option>Choose Time</option>
                                        <option value="Morning">Morning</option>
                                        <option value="Noon">Noon</option>
                                        <option value="Evening">Evening</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary AppoinmentSubmit" onClick={"/channelDetails"}>Book Now</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
