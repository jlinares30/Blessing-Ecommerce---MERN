// import React from "react";
// export function CardService({ service }) {
//   return (
//     <div className="card-service">
//         <div key={service.id} className="col-sm-6 col-lg-3 mb-4">
//             <div className="card h-100 shadow">
//             <div className="card-img-top" style={{ height: '200px', overflow: 'hidden' }}>
//                 <img 
//                 src={`/imagenes/${service.id}.jpg`} 
//                 alt="Service"
//                 className="img-fluid" 
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                 />
//             </div>
//             <div className="card-body text-center">
//                 <h5 className="card-title">{service.detail_service}</h5>
//                 <p className="card-text text-muted">${service.price_service}</p>
//             </div>
//             <div className="card-footer text-center">
//                 <Link 
//                 to={sessionStorage.getItem('user') ? `/service/${service.id}` : '/login'}
//                 className="btn btn-outline-light w-100"
//                 >
//                 View Service
//                 </Link>
//             </div>
//             </div>
//         </div>
//     </div>
//   );
// }


// CardService.jsx
import React from 'react';
import { Link } from "react-router-dom";

export const CardService = ({ service }) => {
  return (
    <div className="card m-4" style={{width: '18rem'}}>
        <img src="https://i.scdn.co/image/ab67616100005174274df4dfcb960867eccedfb5" className="card-img-top" alt={service.name}/>
        <div className="card-body">
            <h5 className="card-title">{service.name}</h5>
            <p className="card-text">{service.description}</p>
            <Link to={`/services/${service._id}`} className="btn btn-primary">View Details</Link>
        </div>
    </div>
  );
};

