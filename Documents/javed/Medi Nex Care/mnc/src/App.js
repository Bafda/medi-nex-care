import logo from './logo.svg';
import './App.css';
// import {Link} from 'react-router-dom'

function App() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
{/* <img src={} alt="Logo" /> */}
<a class="navbar-brand" href="#">Medi Nex Care</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
 <li class="nav-item">
   <a class="nav-link active" aria-current="page" href="#">Home</a>
 </li>
 <li class="nav-item">
   <a class="nav-link" href="#">Dashboard</a>
 </li>
 <li class="nav-item dropdown">
   {/* <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    explore
   </a>
   <ul class="dropdown-menu">
     <li><a class="dropdown-item" href="#">Med ride</a></li>
     <li><a class="dropdown-item" href="#">Med easy</a></li>
     <li><hr class="dropdown-divider"/></li>
     <li><a class="dropdown-item" href="#">med shop</a></li>
   </ul> */}
 </li>
</ul>
<form class="d-flex" role="search">
 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
 <button class="btn btn-outline-success" type="submit">Search</button>
 {/* <button class="btn btn-outline-secondary mx-3" type="submit" >SignUp</button> */}
 {/* <Link className='signup mx-2 my-2' to="/Signup">Signup</Link> */}
</form>
</div>
</div>
</nav>
 </>
  );
}

export default App;
