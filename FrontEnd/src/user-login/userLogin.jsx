import React, { Component } from 'react'
import "./userLogin.css";
import axios from "axios";

export default class userLogin extends Component {
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
        // this.state = { user };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSumbit = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log("Data sent ", data);

        axios
            .post("http://localhost:4000/user/login", data)
            .then((res) => {
                if((res.data.email = this.state.email) && (res.data.password = this.state.password)) {
                    window.location = "/channelHome";
                }
                else {
                    window.location = "/bookingList";
                    // localStorage.setItem("name", res.data.name);
        //   window.location = "/bookingList";
                }

                // localStorage.setItem("name", res.data.name);
                //window.location = "/channelHome"
            });

            //this.props.history.push("/channelHome")

        // this.setState({
        //     email: "",
        //     password: ""
        // })
    }
    render() {
        return (
            <div>
                <div className="LoginHead">
                    <h2>User Login</h2>
                </div>
                <div className="LoginContainer">
                    <form onSubmit={this.handleSumbit}>
                        <div className="form-group LoginData">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div>
                                <input type="email" className="form-control LoginText" name="email" placeholder="Email" required value={this.state.email} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group LoginData">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div>
                                <input type="password" className="form-control LoginText" name="password" placeholder="Password" required value={this.state.password} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group LoginData">
                            <div>
                                <button type="submit" className="btn btn-primary LoginButton">Sign in</button>
                               <center><p><b><a href="/" className= "a2">Create an account</a></b></p></center>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
