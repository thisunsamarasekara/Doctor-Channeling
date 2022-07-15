import React, { Component } from 'react'
import "./searchDoctor.css"
import {Link } from "react-router-dom";

export default class searchDoctor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
          specialization: " ",
          date:null
    
        };
        this.handleChange = this.handleChange.bind(this);
        /* this.retrievedoctor = this.retrievedoctor.bind(this); */
      /* this.handleChange=this.handledate.bind(this);  */
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }
    
    
      handleChange(e) {
        console.log(e);
        this.setState({ specialization: e.target.value });
        console.log(this.state.specialization);
    
    
      }
     /*  handledate(e) {
        
          this.setState({ date: e.target.value});
        console.log(this.state.date);  
      } */
    
      handleFormSubmit = () => {
        const { specialization, date } = this.state;
        localStorage.setItem('specialization', specialization);
        localStorage.setItem('date', date);
      };

    render() {
        return (
            <div>
                {/* Header here */}
                <div class="SearchHead">
                    <h2>Search Doctor</h2>
                </div>
                <div class="SearchContainer">
                    <form>
                        <div class="form-group SearchData">
                            <label for="inputName" class="col-sm-2 col-form-label">Doctor Name</label>
                            <div>
                                <input type="text" class="form-control SearchText" id="name" placeholder="Doctor Name" />
                            </div>
                        </div>
                        <div class="form-group SearchData">
                            <label for="inputSpecialization" class="col-sm-2 col-form-label">Specialization</label>
                            <div  class="col-auto">
                                <select class="form-control SpecializationDropdown" name="status">
                                    <option>Choose Specialization</option>
                                    <option value="Anaesthetists">Anaesthetists</option>
                                    <option value="General Surgeons">General Surgeons</option>
                                    <option value="Cardiothoracic Surgeons">Cardiothoracic Surgeons</option>
                                    <option value="Plastic Surgeons">Plastic Surgeons</option>
                                    <option value="Neuro Surgeons">Neuro Surgeons</option>
                                    <option value="Genito Urinary Surgeons">Genito Urinary Surgeons</option>
                                    <option value="Vascular Surgeons">Vascular Surgeons</option>
                                    <option value="Gastroenterology Surgeon">Gastroenterology Surgeon</option>
                                    <option value="ENT Surgeons">ENT Surgeons</option>
                                    <option value="General Physicians">General Physicians</option>
                                    <option value="Cardiologists">Cardiologists</option>
                                    <option value="Resident Cardiologists">Resident Cardiologists</option>
                                    <option value="Resident Physicians">Resident Physicians</option>
                                    <option value="Dermatologists">Dermatologists</option>
                                    <option value="Neurologists">Neurologists</option>
                                    <option value="Rheumatologists">Rheumatologists</option>
                                    <option value="Cardiac Electro Physiologists">Cardiac Electro Physiologists</option>
                                    <option value="Electro Neuro Physiologists">Electro Neuro Physiologists</option>
                                    <option value="Endocrinologists">Endocrinologists</option>
                                    <option value="Histopathologists">Histopathologists</option>
                                    <option value="Haematologists">Haematologists</option>
                                    <option value="Microbiologist">Microbiologist</option>
                                    <option value="Radiologists">Radiologists</option>
                                    <option value="Chemical Pathologist">Chemical Pathologist</option>
                                    <option value="Gastroenterology Medicine">Gastroenterology Medicine</option>
                                    <option value="Nephrologists">Nephrologists</option>
                                    <option value="Pain Management">Pain Management</option>
                                </select>
                                </div>
                        </div>
                        <div class="form-group SearchData">
                            <div>
                                <label for="appoinmentDate">Date :</label>
                            </div>
                            <input type='date' class="form-control SearchText" />
                            <span class="input-group-addon">
                                <span class="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
                        <div class="form-group SearchData">
                            <div>
                                <button type="reset" class="btn btn-primary ResetButton">Reset</button>
                                <Link to="/appointment"><button type="submit" class="btn btn-primary SearchButton">Search</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}