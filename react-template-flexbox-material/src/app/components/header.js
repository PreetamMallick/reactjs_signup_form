import React from "react";
import { NavLink, Link } from 'react-router-dom';

export const Header = (props) => {
	return(
		<nav className="navbar navbar-default">
		  <div className="container">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span> 
		      </button>
		      <Link to={"/"} className="navbar-brand">React Template</Link>
		    </div>
		    <div className="collapse navbar-collapse" id="myNavbar">
		      <ul className="nav navbar-nav navbar-right custom-navbar-nav">
		        <li><NavLink to={"/home"}>Home</NavLink></li>
		        <li><NavLink to={"/about"}>About</NavLink></li>
		        <li><NavLink to={"/signup"}>Signup</NavLink></li>
		      </ul>
		    </div>
		  </div>
		</nav>
	);
}