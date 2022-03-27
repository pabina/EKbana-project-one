import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Header/>
        <Navigation/>
        <div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</a></li>
				<li className="active">Login Page</li>
			</ol>
		</div>
	</div>
      <div className="login">
		<div className="container">
			<h2>Login Form</h2>
		
			<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
				<form>
					<input type="email" placeholder="Email Address"  />
					<input type="password" placeholder="Password"  />
					<div className="forgot">
						<a href="#">Forgot Password?</a>
					</div>
					<input type="submit" value="Login" />
				</form>
			</div>
			<h4>For New People</h4>
			<p><a  onClick={()=>{navigate("/createAccount")}}>Register Here</a> (Or) go back to <a onClick={()=>{navigate("/")}}>Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a></p>
		</div>
	</div>
    <Footer/>
    </div>
  )
}

export default Login
