import React, { Component } from 'react'
import axios from 'axios'
import "./channelDetails.css"
import addAppointment from '../add-appointment/addAppointment'

export default class channelDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        name: "",
        nic: "",
        email: "",
        phone: "",
        
    };
    this.state = { channelDetails: [] };
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
        
    }
    console.log("Data sent ", data);

    axios
        .post("http://localhost:4000/docbookingpatient/add", data)
        .then((res) => console.log(res.data));

        this.props.history.push('/channelHome');

    this.setState({
        title: "",
        name: "",
        nic: "",
        email: "",
        phone: "",
       
    });
};

reset() {
    const res = {
        title: "",
        name: "",
        nic: "",
        email: "",
        phone: "",
        
    }
}
//Doctor booking
  componentDidMount() {
    axios.get('http://localhost:4000/docbookingpatient/')
        .then(response => {
           this.setState({ docbookingpatient: response.data });
         })
        .catch(function (error) {
             console.log(error);
        });
 }
  render() {
   /* const {channels} = this.state;*/
    return (
      <div>
        {/* Navbar here  */}
        <div class="ChannelBody">
          <div>
            <h2 class="ChannelHeading">Channel Details</h2>
          </div>
          <div class="DetailsContainer">
            <div class="col s7">
              <table class="responsive-table highlight">
                {/* {channels.map((channel) => {
                  return(<tr key={channel.id}>
                 */}
                <tr>
                  <td>Doctor Name :</td>
                  <td>Name</td> {/* {{doc.name}}  */}
                </tr>
                <tr>
                  <td>Date :</td>
                  <td>{addAppointment.date}</td>
                </tr>
                <tr>
                  <td>Time :</td>
                  <td>{addAppointment.time}</td>
                </tr>
                <tr>
                  <td>Patient No :</td>
                  <td>Patient Number</td>
                </tr>
                {/* </tr> */}
                {/* // )})} */}
              </table>
            </div>
          </div>

          <div>
            <h2 class="ChannelHeading">Patient Details</h2>
          </div>
          <div class="PatientContainer ">
          <form onSubmit={this.handleSubmit}>
              <input type="hidden" name="_id" />
              <div class="form-group PatientData">
                <div>
                  <label>Title :</label>
                </div>
                <div>
                  <select class="form-control PatientDropdown" name="title" placeholder="Choose title" required value={this.state.title} onChange={this.handleChange}>
                    <option>Choose Title</option>
                    <option>Rev</option>
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Mrs</option>
                    <option>Master</option>
                  </select>
                </div>
              </div>
              <div class="form-group PatientData">
                <div>
                  <label>Name :</label>
                </div>
                <div>
                  <input type="text" class="form-control PatientText" name="name" placeholder="Choose title" placeholder="Enter Name"required value={this.state.name} onChange={this.handleChange}/>
                </div>
              </div>
              <div class="form-group PatientData">
                <div>
                  <label>National Id :</label>
                </div>
                <div>
                  <input type="text" class="form-control PatientText" name="nic" placeholder="Choose title" placeholder="Enter National Id"pattern="[0-9]{3}[0-9]{3}[0-9]{3}{1}[v/V] || [0-9]{4}[0-9]{4}[0-9]{4}" value={this.state.nic} onChange={this.handleChange}/>
                </div>
              </div>
              <div class="form-group PatientData">
                <div>
                  <label>Email :</label>
                </div>
                <div>
                  <input type="email" class="form-control PatientText" name="email" placeholder="Choose title" placeholder="Enter Email"required value={this.state.email} onChange={this.handleChange} />
                </div>
              </div>
              <div class="form-group PatientData">
                <div>
                  <label>Phone Number :</label>
                </div>
                <div>
                  <input type="text" class="form-control PatientText" name="phone" placeholder="Choose title" placeholder="Enter Phone No"  pattern="[0-9]{3}[0-9]{3}[0-9]{4}" value={this.state.phone} onChange={this.handleChange} />
                </div>
              </div>
              <button type="submit" class="btn btn-primary PatientSubmit" >Submit</button>
            </form>
          </div>
        </div>

      </div>
    )
  }
}