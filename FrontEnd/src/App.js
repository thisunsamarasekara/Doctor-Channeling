import './App.css';

import { Route, Switch, BrowserRouter } from "react-router-dom";
import userRegister from './user-register/userRegister';
import channelHome from './channel-home/channelHome';
import bookingList from './booking-list/bookingList';
import channelDetails from './channel-details/channelDetails';
import addAppointment from './add-appointment/addAppointment';
import userLogin from './user-login/userLogin';
import searchDoctor from './search-doctor/searchDoctor';
import editAppointment from './edit-appointment/editAppointment';
import personalDetails from './personal-details/personalDetails';
import docSearchResults from './doctor-search-results/docSearchResults';
import Footer from './Component/Common/Footer';
import NavBar from './Component/Common/NavBar';
import Home from './Component/Common/Home';
function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
    
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/userRegister'  component={userRegister}/>
      <Route path='/channelHome' component={channelHome}/>
      <Route path='/bookingList' component={bookingList}/>
      <Route path='/channelDetails' component={channelDetails}/>
      <Route path='/appointment' component={addAppointment}/>
      <Route path='/login' component={userLogin}/>
      <Route path='/docSearch' component={searchDoctor} />
      <Route path="/editAppointment" component={editAppointment}/>
      <Route path="/personalDetails" component={personalDetails} />
      <Route path="/docSearchResults" component={docSearchResults}/>
       
      
    </Switch>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
