import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    state ={
        products : [
          {
              id:1,
              name:"Omega Marine",
              cost:15000,
              img:"./one.jpg",         
          },
          {
              id:2,
              name:"Rolex Gold",
              cost:50000,
              img:"two.jpg",
              added:false,
              count:0,
              total:0
            
          },
          {
              id:3,
              name:"Armani",
              cost:20000,
              img:"three.jpg",
          },
          {
              id:4,
              name:"Rado Topaz",
              cost:70000,
              img:"four.jpg",
        
            
          },
          {
              id:5,
              name:" Casio G-Shock",
              cost:25000,
              img:"five.jpg",
          
            
          },
          {
              id:6,
              name:"Daniel Wellington",
              cost:30000,
              img:"six.jpg",
            
          },
          {
            id:7,
            name:"Fossil",
            cost:25000,
            img:"seven.jpg",
          
        },
        {
            id:8,
            name:"Giordano",
            cost:30000,
            img:"eight.jpg",
          
        },
        ],
       
    }
    render(){
        const {products} = this.state
        return(
           <div className="container">
            <h2>OUR PRODUCTS</h2>
            <div className="row ">
                  {products.map( product => (
                          <div className=" col-9 mx-auto col-lg-3 my-3 "  key={product.id}>                             
                           <div className="card d-flex  "> 
                           <img src={product.img} className="pic" />
                             <h4>
                                 <Link to={`/${product.id}/${product.cost}`}>
                                  {product.name}
                                  </Link>
                            </h4>
                            </div> 
                         
                          </div>
                          
               ))}
               </div>
               </div>
        );
    }
};
export default Home;