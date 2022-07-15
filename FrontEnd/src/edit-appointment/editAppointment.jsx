import React, { Component } from "react";
import axios from "axios";
import "./editAppointment.css";
import Swal from "sweetalert2";

export default class editAppointment extends Component {
  constructor(props) {
    super(props);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      date: "",
      status: "",
      time: "",
    };
  }

  componentDidMount() {
    // console.log(this.props.location.id);
    let id = this.props.location.id;
    axios
      .get("http://localhost:4000/channelDetails/" + id)
      .then((response) => {
        this.setState({
          date: response.data.date.slice(0, 10),
          status: response.data.status,
          time: response.data.time,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }

  onChangeTime(e) {
    this.setState({
      time: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const obj = {
      date: this.state.date,
      status: this.state.status,
      time: this.state.time,
    };
    console.log(obj);
    let id = this.props.location.id;
    axios
      .post("http://localhost:4000/channelDetails/update/" + id, obj)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Successfully Updated!",
        }).then(() => {
          window.location = "/bookingList";
        });
      });
  }

  render() {
    return (
      <div>
        {/* Header here */}
        <div class="AppoinmentHead">
          <h2>UPDATE APPOINMENT</h2>
          <div class="AppoinmentContainer">
            <form onSubmit={this.handleSubmit}>
              <input type="hidden" name="id" />
              <div class="form-group AppoinmentData row g-6 align-items-center">
                <div class="col-auto">
                  <label for="appoinmentDate">Appoinment Date :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="date"
                    class="form-control AppoinmentText"
                    name="date"
                    required
                    value={this.state.date}
                    onChange={this.onChangeDate}
                  />
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
                  <select
                    class="form-control AppoinmentDropdown"
                    name="status"
                    required
                    value={this.state.status}
                    onChange={this.onChangeStatus}
                  >
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
                  <select
                    class="form-control AppoinmentDropdown1"
                    name="time"
                    required
                    value={this.state.time}
                    onChange={this.onChangeTime}
                  >
                    <option>Choose Time</option>
                    <option value="Morning">Morning</option>
                    <option value="Noon">Noon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary AppoinmentSubmit"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
