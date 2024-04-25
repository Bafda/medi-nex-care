import logo from './logo.png';
// import './App.css';
// import {Link} from 'react-router-dom'

function Navbar() {
  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<img src={logo} alt="Logo" className="navbar-logo mx-2" height={50} width={50} />
{/* <a className="navbar-brand" href="#">Medi Nex Care</a> */}
<h5 className='name mx-2'>Med Nex Care</h5>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li className="nav-item">
<a className="nav-link active " aria-current="page" href="#">Home</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">something</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Dashboard</a>
</li>
{/* <li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
explore
</a>
<ul className="dropdown-menu">
 <li><a className="dropdown-item" href="#">Med ride</a></li>
 <li><a className="dropdown-item" href="#">Med easy</a></li>
 <li><hr className="dropdown-divider"/></li>
 <li><a className="dropdown-item" href="#">med shop</a></li>
</ul> 
</li> */}
</ul>
<form className="d-flex" role="search">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
<button className="btn btn-outline-success" type="submit">Search</button>
{/* <button className="btn btn-outline-secondary mx-3" type="submit" >SignUp</button> */}
{/* <Link classNameName='signup mx-2 my-2' to="/Signup">Signup</Link> */}
</form>
</div>
</div>
</nav>
</>
  );
}

export default Navbar;
