import React from 'react';

function ProductDetail({match}) {
 return(
   console.log(match),
     <React.Fragment>
     <h2>ID: {match.params.id}</h2>
     <h2>Price: ₹{match.params.cost}</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </React.Fragment>
 )
}

export default ProductDetail;