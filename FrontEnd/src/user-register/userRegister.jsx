import React, { Component } from 'react';
import './userRegister.css';
import axios from "axios";
/*import {Link } from "react-router-dom";*/

export default class userRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            name: "",
            nic: "",
            email: "",
            phone: "",
            password: "",
        };
        this.state = { user: [] };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: this.state.title,
            name: this.state.name,
            nic: this.state.nic,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
        }
        console.log("Data sent ", data);

        axios
            .post("http://localhost:4000/user/add", data)
            .then((res) => console.log(res.data));

            this.props.history.push('/login');

        this.setState({
            title: "",
            name: "",
            nic: "",
            email: "",
            phone: "",
            password: "",
        });
    };

    reset() {
        const res = {
            title: "",
            name: "",
            nic: "",
            email: "",
            phone: "",
            password: "",
        }
    }

    // componentDidMount() {
    //     axios
    //         .get("http://localhost:4000/user/")
    //         .then((response) => {
    //             this.setState({ user: response.data });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }
    render() {
        return (
            <div>
                {/* Header here */}
                <div className="RegisterHead">
                    <h2>CREATE A ACCOUNT</h2>
                </div>
                <div className="RegisterContainer">
                    <form onSubmit={this.handleSubmit}>
                        <input type="hidden" name="_id" />
                        <div className="form-group RegisterData">
                            <div>
                                <label>Title</label>
                                <select className="form-control RegisterDropdown" name="title" placeholder="Choose title" required value={this.state.title} onChange={this.handleChange}>
                                    <option>Choose Title</option>
                                    <option>Rev</option>
                                    <option>Mr</option>
                                    <option>Ms</option>
                                    <option>Mrs</option>
                                    <option>Master</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group RegisterData">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <div>
                                <input type="text" className="form-control RegisterText" name="name" placeholder="Enter Name" required value={this.state.name} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group RegisterData">
                            <label className="col-sm-2 col-form-label">National Id</label>
                            <div>
                                <input type="text" className="form-control RegisterText" name="nic" placeholder="Enter NIC" pattern="[0-9]{3}[0-9]{3}[0-9]{3}{1}[v/V] || [0-9]{4}[0-9]{4}[0-9]{4}" value={this.state.nic} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group RegisterData">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div>
                                <input type="email" className="form-control RegisterText" name="email" placeholder="Enter Email" required value={this.state.email} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group RegisterData">
                            <label className="col-sm-2 col-form-label">Phone No</label>
                            <div>
                                <input type="text" className="form-control RegisterText" name="phone" placeholder="Enter Phone No" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group RegisterData">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div>
                                <input type="password" className="form-control RegisterText" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group RegisterData">
                            <div>
                            <button type="submit" className="btn btn-primary RegisterButton">Register</button>
                            <center><p><b><a href="/login" className="a1">already Register</a></b></p></center>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
