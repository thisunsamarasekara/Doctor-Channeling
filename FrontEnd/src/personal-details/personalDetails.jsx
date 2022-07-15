import React, { Component } from 'react'
import "./personalDetails.css"
import axios from 'axios'

export default class personalDetails extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNic = this.onChangeNic.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            name: '',
            nic: '',
            email: '',
            phone: '',
            // password: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/user/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    name: response.data.name,
                    nic: response.data.nic,
                    email: response.data.email,
                    phone: response.data.phone,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeNic(e) {
        this.setState({
            nic: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            title: this.state.title,
            name: this.state.name,
            nic: this.state.nic,
            email: this.state.email,
            phone: this.state.phone,
            // password: this.state.password
        }
        console.log(obj);
        axios.post('http://localhost:4000/user/update/' + this.props.match.params.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className="ChannelHeading">User Details</h2>
                </div>
                <div className="PatientContainer ">
                    <form onSubmit={this.onSubmit}>
                        <input type="hidden" name="_id" />
                        <div className="form-group PatientData">
                            <div>
                                <label>Title :</label>
                            </div>
                            <div>
                                <select className="form-control PatientDropdown" name="title" placeholder="Choose title" required value={this.state.title} onChange={this.onChangeTitle}>
                                    <option>Choose Title</option>
                                    <option>Rev</option>
                                    <option>Mr</option>
                                    <option>Ms</option>
                                    <option>Mrs</option>
                                    <option>Master</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group PatientData">
                            <div>
                                <label>Name :</label>
                            </div>
                            <div>
                                <input type="text" className="form-control PatientText" name="name" placeholder="Choose title" placeholder="Enter Name" required value={this.state.name} onChange={this.onChangeName} />
                            </div>
                        </div>
                        <div className="form-group PatientData">
                            <div>
                                <label>National Id :</label>
                            </div>
                            <div>
                                <input type="text" className="form-control PatientText" name="nic" placeholder="Choose title" placeholder="Enter National Id" pattern="[0-9]{3}[0-9]{3}[0-9]{3}[v/V]{1} || [0-9]{4}[0-9]{4}[0-9]{4}" value={this.state.nic} onChange={this.onChangeNic} />
                            </div>
                        </div>
                        <div className="form-group PatientData">
                            <div>
                                <label>Email :</label>
                            </div>
                            <div>
                                <input type="email" className="form-control PatientText" name="email" placeholder="Choose title" placeholder="Enter Email" required value={this.state.email} onChange={this.onChangeEmail} />
                            </div>
                        </div>
                        <div className="form-group PatientData">
                            <div>
                                <label>Phone Number :</label>
                            </div>
                            <div>
                                <input type="text" className="form-control PatientText" name="phone" placeholder="Choose title" placeholder="Enter Phone No" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={this.state.phone} onChange={this.onChangePhone} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary PatientSubmit" >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
