import React from 'react';


class Contacts extends React.Component{
    render(){
        return(  
            <React.Fragment>
             <h2>Citizen Watches</h2>
              <div className="container py-2">  
              <h4><i className="fa fa-phone"> : 9999958670</i></h4>  
              <h4><i className="fa fa-envelope"> : citizen@gmail.com </i></h4> 
              </div>
              </React.Fragment>              
        );
    }
};
export default Contacts;