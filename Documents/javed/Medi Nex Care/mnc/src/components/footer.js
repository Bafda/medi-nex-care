import React from 'react';
import profile from './profile.jpg';

const Footer=()=>{
    return(
<footer className="bg-dark text-white py-4">
  <div className="container">
      <div className="row align-items-center">
          <div className="col-md-6">
              <a className="navbar-brand" href="#">
                <img src={profile} alt="Brand Logo" height={80} width={80}/>
                {/* <img src={profile} alt="Brand Logo" height={80} width={80}><img/> */}
                <span className="navbar-brand-text mx-5 " style={{ fontSize: '35px' }}>Med Nex Care</span>
                {/* <h4>Med Nex Care</h4> */}
              </a>
          </div>
          <div className="col-md-6">
              <div className="row">
                  <div className="col-lg-4 col-md-6">
                      <h5>Quick Links</h5>
                      <ul className="list-unstyled">
                          <li><a href="#hospital-rides">Hospital Rides</a></li>
                          <li><a href="#doctor-appointments">Doctor Appointments</a></li>
                          <li><a href="#pharmacy">Pharmacy</a></li>
                          <li><a href="#offers">Offers</a></li>
                      </ul>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <h5>Connect with Us</h5>
                      <ul className="list-unstyled">
                          <li><a href="#">Facebook</a></li>
                          <li><a href="#">Twitter</a></li>
                          <li><a href="#">Instagram</a></li>
                          <li><a href="#">LinkedIn</a></li>
                      </ul>
                  </div>
                  <div className="col-lg-4 col-md-12">
                      <h5>Contact Information</h5>
                      <address>
                          123 Main Street, City<br/>
                          State, ZIP<br/>
                          Phone: 123-456-7890<br/>
                          Email: info@medinexcare.com
                      </address>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="container-fluid text-center">
      <hr className="bg-light"/>
      <p className="mb-0">© 2024 MEDI NEX CARE. All rights reserved.</p>
  </div>
</footer>
    );
}

export default Footer;