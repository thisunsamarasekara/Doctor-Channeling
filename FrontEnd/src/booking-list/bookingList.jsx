import axios from 'axios';
import React, { Component } from 'react'
import './bookingList.css'
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// import MenuIcon from '@material-ui/icons/Menu';
import Swal from "sweetalert2";
import generateBookingPDF from './BookingReport';

export default class bookingList extends Component {
    constructor(props) {
        super(props);
        this.state = { channelDetails: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/channelDetails/')
            .then(response => {
                this.setState({ channelDetails: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    delete(_id) {
        let id=this.props.location.id;
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonStyling: false,
        });
    
        swalWithBootstrapButtons
          .fire({
            title: "Do you want to delete this record?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                "Deleted",
                "Item has been deleted",
                "success"
              );
              axios
                .delete("http://localhost:4000/channelDetails/" + _id)
                .then(() => {
                  this.componentDidMount();
                });
                
            } else if (result.dismiss == Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire("Cancelled");
            }
          });
      }
    render() {
        const { channelDetails } = this.state;
        return (
            <div>
                {/* header here  */}
                <div className="ListHead">
                    <h2>My Bookings</h2>
                </div>
                <div className="ButtonSection">
                    <button className="mat-button-toggle ReportDownload" mat-raised-button color="primary" onClick={() => {generateBookingPDF(this.state.channelDetails)}}>Download Report</button>
                </div>
                <div className="BListContainer">
                    <div className="row">
                        <table className="responsive-table highlightl ListTable">
                            <tr>
                                <th className="td">Doctor</th>
                                <th className="td">Date</th>
                                <th className="td">Status</th>
                                <th className="td">Time</th>
                                <th className="td">Number</th>
                                <th className="td"></th>
                            </tr>
                            {channelDetails.map((channel) => {
                                return (<tr key={channel.id}>
                                    <td>Doctor</td>
                                    <td>{channel.date && channel.date.slice(0, 10)}</td>
                                    <td>{channel.status}</td>
                                    <td>{channel.time}</td>
                                    <td>1</td>
                                    <td>
                                    <Link to={{pathname: "/editAppointment/" ,id:channel._id}} ><EditIcon/></Link>
                                    <Link onClick={(e) => this. delete(channel._id)} to={{pathname:"/bookingList"}}><DeleteIcon/></Link>
                                    </td>
                                </tr>)
                            })}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
