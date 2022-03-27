import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';


const CreateAccount = () => {
    const navigate=useNavigate();
  return (
     
    <div>
      <Header/> 
      <Navigation/>
      <div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
				<li className="active">Registration page</li>
			</ol>
		</div>
        </div>
      <div className="register">
		<div className="container">
			<h2>Register Here</h2>
			<div className="login-form-grids">
				<h5>profile information</h5>
				<form action="#" method="post">
					<input type="text" placeholder="First Name..."    />
					<input type="text" placeholder="Last Name..."   />
				</form>
				<div className="register-check-box">
					<div className="check">
						<label className="checkbox"><input type="checkbox" name="checkbox" /><i> </i>Subscribe to Newsletter</label>
					</div>
				</div>
				<h6>Login information</h6>
					<form action="#" method="post">
					<input type="email" placeholder="Email Address"  />
					<input type="password" placeholder="Password"  />
					<input type="password" placeholder="Password Confirmation"  />
					<div className="register-check-box">
						<div className="check">
							<label className="checkbox"><input type="checkbox" name="checkbox" /><i> </i>I accept the terms and conditions</label>
						</div>
					</div>
					<input type="submit" value="Register" />
				</form>
			</div>
			<div className="register-home">
				<button onClick={()=>{navigate("/")}}>Home</button>
			</div>
		</div>
	</div>
    <Footer/>
    </div>
  )
}

export default CreateAccount;
