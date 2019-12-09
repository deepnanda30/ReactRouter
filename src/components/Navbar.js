import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(     
           <nav className="navbar navbar-expand-lg navbar-dark bar ">
               <Link to="/">
                   <i className="fa fa-home icon"></i>
               </Link>
               
               <Link to="/About" className="ml-auto" >
                   <h3 className="element">About</h3>
               </Link>
               <Link to="/Contacts">
                    <h3 >Contacts</h3>
               </Link>
           </nav>                       
        );
    }
};
export default Navbar;